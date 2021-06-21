//Создал все перменные с инпутами,которые я буду валидировать
let inputDev = document.getElementById("developers"); // Инпут поля Разработчики
let inputSite = document.getElementById("siteName"); // Инпут поля Название сайта
let inputURL = document.getElementById("url"); // Инпут поля URL
let inputEmail = document.getElementById("email"); // Инпут поля Email
let inputDate = document.getElementById("date"); // Инпут поля Дата открытия
let inputVisitors = document.getElementById("visitors"); // Инпут поля Количество посетителей
let textarea = document.getElementById("textarea"); // Инпут поля Описание сайта
let btnSbmt = document.getElementById("button"); // Кнопка отправки формы
let inputs = document.getElementsByTagName("input"); // Коллекция всех инпутов
let divRadio = document.getElementById("radio"); // Переменная div с инпут радио
let inputsInRadio = document.querySelectorAll(".radio > input"); //Все инпуты радио в div

function errorForDevelopersInput(){ // Создал функцию ошибки для конкретного инпута
    let error = document.createElement("label"); // Создание ошибки
    error.setAttribute("class","error"); // Добавил класс ошибке ,это понадобится в конце при фокусе на ошибочном инпуте при валидации формы
    error.style.cssText = "color:red;position:absolute;left:415px;padding:1px;width:450px;"; // Разположение ошибки через стили
    inputDev.addEventListener("blur",function(){ // Событие 
        if(/\d/.test(inputDev.value)){ // Валидация на наличие чисел
            if(inputDev.nextElementSibling !== null){ // Если ошибка уже висит,то она удаляется
                inputDev.nextElementSibling.remove();
            }
            inputDev.parentElement.appendChild(error); //Добавляется ошибка при непрохождении валидации на наличие чисел
            error.innerHTML = "&#129044;Поле не должно иметь цифр"; // Текст соответсвующей ошибки
        }else if(inputDev.value === ""){ // Валидация на наличие пустого поля
            if(inputDev.nextElementSibling !== null){ // Если ошибка уже висит,то она удаляется
                inputDev.nextElementSibling.remove();
            }
            inputDev.parentElement.appendChild(error); // Добавляется ошибка при непрохождении валидации на наличие пустого поля
            error.innerHTML = "&#129044;Заполните поле"; // Текст соответсвующей ошибки
        }else if(inputDev.nextElementSibling !== null){ // Если ошибка уже висит,то она удаляется
            inputDev.nextElementSibling.remove();
        }
    })
    inputDev.addEventListener("blur",function(){ // Такое же событие,но уже после первого использования
    if(!/\d/.test(inputDev.value) && inputDev.value !== ""){ // Если в инупте нет чисел и пустого поля ,то ...
        if(inputDev.nextElementSibling === error){ // Если ошибка уже висит,она удаляется
            inputDev.nextElementSibling.remove();
        }
    }
})
}

//Ниже все остальные функции ошибок для каждого инпута и одного textarea сделаны по такому же принципу,как и предыдущая функция выше для инпута "Разработчики сайта"

function errorForSiteNameInput(){
    let error = document.createElement("label");
    error.setAttribute("class","error");
    error.style.cssText = "color:red;position:absolute;left:415px;padding:1px;width:450px;";
    inputSite.addEventListener("blur",function(){
        if(/[A-Z\sА-я]/.test(inputSite.value)){ // Валидация на обязательное наличие латинских букв
            if(inputSite.nextElementSibling !== null){
                inputSite.nextElementSibling.remove();
            }
            inputSite.parentElement.appendChild(error);
            error.innerHTML = " &#129044;Только латинские буквы нижнего регистра,без пробелов";
        }else if(inputSite.value === ""){
            if(inputSite.nextElementSibling !== null){
                inputSite.nextElementSibling.remove();
            }
            inputSite.parentElement.appendChild(error);
            error.innerHTML = "&#129044;Заполните поле";
        }else if(inputSite.nextElementSibling !== null){
            inputSite.nextElementSibling.remove();
        }
    })
    inputSite.addEventListener("blur",function(){
        if(!(/[A-Z\sА-я]/.test(inputSite.value)) && inputSite.value !== ""){
            if(inputSite.nextElementSibling === error){
                inputSite.nextElementSibling.remove();
            }
        }
    })
}

function errorForURLInput(){
    let error = document.createElement("label");
    error.setAttribute("class","error");
    error.style.cssText = "color:red;position:absolute;left:415px;padding:1px;width:500px;";
    inputURL.addEventListener("blur",function(){
        if(/[A-Z\sА-я\d]/.test(inputURL.value)){
            if(inputURL.nextElementSibling !== null){
                inputURL.nextElementSibling.remove();
            }
            inputURL.parentElement.appendChild(error);
            error.innerHTML = " &#129044;Только латинские буквы нижнего регистра,без пробелов и цифр";
        }else if(inputURL.value === ""){
            if(inputURL.nextElementSibling !== null){
                inputURL.nextElementSibling.remove();
            }
            inputURL.parentElement.appendChild(error);
            error.innerHTML = "&#129044;Заполните поле";
        }else if(inputURL.nextElementSibling !== null){
            inputURL.nextElementSibling.remove();
        }
    })
    inputURL.addEventListener("blur",function(){
        if(!(/[A-Z\sА-я\d]/.test(inputURL.value)) && inputURL.value !== ""){
            if(inputURL.nextElementSibling === error){
                inputURL.nextElementSibling.remove();
            }
        }
    })
}

function errorForDateInput(){
    let error = document.createElement("label");
    error.setAttribute("class","error");
    error.style.cssText = "color:red;position:absolute;left:415px;padding:1px;width:450px;";
    inputDate.addEventListener("blur",function(){
        if(inputDate.value === ""){
            if(inputDate.nextElementSibling !== null){
                inputDate.nextElementSibling.remove();
            }
            inputDate.parentElement.appendChild(error);
            error.innerHTML = " &#129044;Укажите дату запуска вашего сайта";
        }else if(inputDate.nextElementSibling !== null){
            inputDate.nextElementSibling.remove();
        }
    })
    inputDate.addEventListener("blur",function(){
        if(!(inputDate.value === "")){
            if(inputDate.nextElementSibling === error){
                inputDate.nextElementSibling.remove();
            }
        }
    })
}

function errorForVisitorsImput(){
    let error = document.createElement("label");
    error.setAttribute("class","error");
    error.style.cssText = "color:red;position:absolute;left:415px;padding:1px;width:450px;";
    inputVisitors.addEventListener("blur",function(){
        if(inputVisitors.value === "" || Math.sign(inputVisitors.value)=== -1){
            if(inputVisitors.nextElementSibling !== null){
                inputVisitors.nextElementSibling.remove();
            }
            inputVisitors.parentElement.appendChild(error);
            error.innerHTML = " &#129044;Укажите корректное количество посетителей"
        }else if(inputVisitors.nextElementSibling !== null){
            inputVisitors.nextElementSibling.remove();
        }
    })
    inputVisitors.addEventListener("blur",function(){
        if(!(inputVisitors.value === "" || Math.sign(inputVisitors.value)=== -1)){
            if(inputVisitors.nextElementSibling === error){
                inputVisitors.nextElementSibling.remove();
            }
        }
    })
    
}

function errorForEmailInput(){
    let error = document.createElement("label");
    error.setAttribute("class","error");
    error.style.cssText = "color:red;position:absolute;left:415px;padding:1px;width:450px;";
    inputEmail.addEventListener("blur",function(){
        if(!(/[A-z]@[A-z]./.test(inputEmail.value))){
            if(inputEmail.nextElementSibling !== null){
                inputEmail.nextElementSibling.remove();
            }
            inputEmail.parentElement.appendChild(error);
            error.innerHTML = " &#129044;Введите часть вашего адреса до и после символа @";
        }
        else if(inputEmail.value === ""){
            inputEmail.parentElement.appendChild(error);
            error.innerHTML = "&#129044;Заполните поле";
        }else if(inputEmail.nextElementSibling !== null){
            inputEmail.nextElementSibling.remove();
        }
    })
    inputEmail.addEventListener("blur",function(){
        if((/[A-z]@[A-z]./.test(inputEmail.value))){
            if(inputEmail.nextElementSibling === error){
                inputEmail.nextElementSibling.remove();
            }
        }
    })
}

function errorForRadio(){
    for(let input of inputsInRadio){
        input.addEventListener("blur",function(){
                if(divRadio.nextElementSibling !== null){
                    divRadio.nextElementSibling.remove();
                }
        })
    }

}

function errorForTextare(){
    let error = document.createElement("label");
    error.setAttribute("class","error");
    error.style.cssText = "color:red;position:absolute;left:415px;bottom:50px;padding:1px;width:450px;";
    textarea.addEventListener("blur",function(){
        if(textarea.value === ""){
            if(textarea.nextElementSibling !== null){
                textarea.nextElementSibling.remove();
            }
            textarea.parentElement.appendChild(error);
            error.innerHTML = " &#129044;Введите описание вашего сайта"
        }else if(textarea.nextElementSibling !== null){
            textarea.nextElementSibling.remove();
        }
    })
    textarea.addEventListener("blur",function(){
        if(!(textarea.value === "")){
            if(textarea.nextElementSibling === error){
                textarea.nextElementSibling.remove();
            }
        }
    })
}

function validationBtn(){ // Валидация всей форме при нажатии на кнопку
    btnSbmt.addEventListener("click",function(event){
       for(let input of inputs){ // Перебираю все инпуты формы
           if(input.value === ""){ // Валидация каждого инупта на наличие пустого поля и если поле пустое,то...
            if(input.nextElementSibling === null){  // Если ошибки не висит,то ...
                let error = document.createElement("label");  // Создал ошибку
                error.setAttribute("class","error");  // Добавил класс ошибке
                error.style.cssText = "color:red;position:absolute;left:415px;padding:1px;width:450px;";  // Установил насположение ошибке через css
                input.parentElement.appendChild(error);  // Добавил ошибку
                error.innerHTML = " &#129044;Заполните поле";  // Текст соответствующей ошибки
            }
            event.preventDefault();  // Отправка формы на сервер отменяется,если есть хотя бы одно пустое поле инпута формы
           }
       }
       // Ниже точно такой же принцип,но для тега textarea для Описания сайта
       if(textarea.value ===""){ 
           if(textarea.nextElementSibling === null){
            let error = document.createElement("label");
            error.setAttribute("class","error");
            error.style.cssText = "color:red;position:absolute;left:415px;bottom:50px;padding:1px;width:450px;";
            textarea.parentElement.appendChild(error);
            error.innerHTML = " &#129044;Заполните поле";
           }
           event.preventDefault();
       }
       // Ниже принцип создания ошибки для div с наличием трёх input radio
       let countRadio = 0; // Создал условный счетчик
       for(let input of inputsInRadio){ // Перебираю все инпуты радио
           if(!input.checked){ // Если инпут радио не выбран,то счётчик увеличивается на один
               countRadio++;
           }
       }
       if(countRadio === inputsInRadio.length){ // Если условный счётчик равен длине всей коллекции с инпут радио,то есть ни один инпут радио не выбран,то ниже создается ошибка
            let error = document.createElement("label"); // Создал ошибку
            error.setAttribute("class","error");  // Создал класс ошибке
            error.style.cssText = "color:red;position:absolute;left:415px;padding:1px;width:450px;";  // Установил расположение для ошибки через css
            if(divRadio.nextElementSibling !== null){ // Если какая-то ошибка уже есть,то она удаляется
                divRadio.nextElementSibling.remove();
            }
            divRadio.parentElement.appendChild(error); // Повесил ошибку
            error.innerHTML = " &#129044;Заполните поле"; // Текст соответствущей ошибки
       }
       let focus = document.querySelector(".error"); // Переменная с первой найденной ошибкой
       if(focus ){ // Если есть ошибка в форме,то ...
        focus.previousElementSibling.scroll(); // Скролл к инпуту ,на котором висит эта ошибка
        focus.previousElementSibling.focus(); // Фокус инпута ,на котором висит эта ошибка
       }
    })
}

errorForDevelopersInput();
errorForSiteNameInput();
errorForURLInput();
errorForDateInput();
errorForVisitorsImput();
errorForEmailInput();
errorForRadio();
errorForTextare();
validationBtn();
