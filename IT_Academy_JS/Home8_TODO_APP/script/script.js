let inputData = document.getElementById('inputTask');
let btnAdd = document.getElementById('btn-add');
let ulList = document.querySelector('#list');
let spans = document.getElementsByTagName('span');
let btnSave = document.getElementById('btn-save');
let btnClear = document.getElementById('btn-clear');

function addTodo() {
  let inputContent = inputData.value;
  inputData.value = '';

  let newLi = document.createElement('li');
  newLi.innerHTML = inputContent;

  //Добавление даты
  let spanTime = document.createElement("span");
  spanTime.innerHTML = "Время добавления: " + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + " ";
  spanTime.style.color = "#787878";
  spanTime.style.fontSize = "14px";
  spanTime.style.cursor = "auto";
  newLi.prepend(spanTime );

  //Создал абзац и обернул в него текстовый узел для реализации зачеркивания
  let newP = document.createElement("p");
  newP.append(spanTime.nextSibling);
  newP.style.display = "inline-block";
  newP.style.margin = "0px";
  newP.style.cursor = "pointer";

  let newSpan = document.createElement('span');
  newSpan.className = "delete"; //Добавил класс спану,чтобы удаление происходило только по спану delete
  newSpan.textContent = ' DELETE';
  ulList.appendChild(newLi).append(newP);
  newLi.append(newSpan);

  //Зачеркивание задачи при нажатии на неё,а также уменьшение количества активных задач на счётчике и прибавление неактивных
  newP.onclick = function(){
    if(!(newP.style.textDecoration == "line-through")){
    newP.style.textDecoration = "line-through";
    countSpan.innerHTML--;
    countSpan2.innerHTML++;
    }
  }

  deleteTodo();
}

//Отредактировал функцию удаления.Теперь счётчик активных/неактивных задач уменьшяется и при удалении самих задач
function deleteTodo() {
  for (let span of spans) {
    if(span.className === "delete"){
    span.onclick = function () {
      if(span.previousSibling.style.textDecoration == "line-through"){
        countSpan2.innerHTML--;
      }else if(!(span.previousSibling.style.textDecoration == "line-through")){
        countSpan.innerHTML--;
      }
      span.parentElement.remove();
      }
    }
  }
}

function saveTodos() {
  localStorage.setItem('todo-app', ulList.innerHTML);
}

function clearTodos() {
  ulList.innerHTML = '';
  localStorage.setItem('todo-app', ulList.innerHTML);
  //При отчистке списка заданий счётчик также изменяется
  countSpan.innerHTML = 0; 
  countSpan2.innerHTML = 0;
}

function loadTodo() {
  if (localStorage.getItem('todo-app')) {
    ulList.innerHTML = localStorage.getItem('todo-app');
  }
}

loadTodo();

deleteTodo();

//Создал область-div для счетчика
let countDiv = document.createElement("div");
document.body.append(countDiv);
countDiv.style.background = "lightgray";
countDiv.style.height = "auto";
countDiv.style.padding = "0 0 0 50px";
countDiv.style.margin = "10px 0 0 0";
countDiv.style.fontSize = "20px";
//Создал элементы самого счётчика для активных задач
let countP = document.createElement("p");
countP.style.width = "300px";
countP.style.margin = "0";
countP.style.display = "inline-block";
let countSpan = document.createElement("span");
countP.textContent = "Активные задачи: ";
countSpan.innerHTML = 0;
countDiv.appendChild(countP).append(countSpan);
//Создал элементы счётчика для неактивных задач
let countP2 = document.createElement("p");
countP2.style.width = "300px";
countP2.style.margin = "0";
countP2.style.display = "inline-block";
let countSpan2 = document.createElement("span");
countP2.textContent = "Неактивные задачи: ";
countSpan2.innerHTML = 0;
countDiv.appendChild(countP2).append(countSpan2);

//Функция-счетчик активных задач при их добавлении кнопкой btnAdd
function countTodo(){
  countSpan.innerHTML++;
}

//Проверка на пустое поле при вводе
function preTodo(){
  if(inputData.value == false){
    alert("Вы ничего не ввели!")
  }else{
  addTodo();
  countTodo(); //Рост счётчика активных задач при нажатии кнопки btnAdd
  }
}

//Информация о разработчике.Эту кнопку я не создавал в js,а добавил сразу в верстку в index.html
function infoDev(){
  alert("Фурсевич Павел Игоревич")
}
let aboutDev = document.getElementById("info");
aboutDev.style.marginTop = "10px";

aboutDev.onclick = infoDev;

btnAdd.onclick = preTodo;

btnSave.onclick = saveTodos;

btnClear.onclick = clearTodos;
