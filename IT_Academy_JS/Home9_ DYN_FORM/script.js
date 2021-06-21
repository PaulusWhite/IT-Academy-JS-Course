let formDef1=[  
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division', 
        variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
        variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]}, 
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
  ];

let formDef2=[  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];

function createForm(form){
   let newForm = document.createElement("form"); // Создаю форму
   newForm.action = "https://fe.it-academy.by/TestForm.php";
    for(let obj of form){
        let newP = document.createElement("p"); // Создаю область для каждого пункта формы
        newP.style.cssText = "width:350px; display:flex; justify-content:space-between"
        let newLabel = document.createElement(Object.keys(obj)[0]); // Создаваемый элемент равен Object.keys(obj)[0] ,то есть label
        newLabel.setAttribute("for" ,Object.values(obj)[2]); 
        let textOfName = (Object.values(obj)[0]); // Создаю переменную и даю ей значение Object.values(obj)[0],то есть названия полей
        let newInput = document.createElement("input"); // Создаю input
  
        newInput.setAttribute(Object.keys(obj)[2] ,Object.values(obj)[2]);
        newForm.appendChild(newP).append(newLabel ,newInput);
        newLabel.append(textOfName); 
        
        // Ниже через сценарии задаю type инпутам в зависимости от требования массива задания

        if(Object.values(obj)[1] === "longtext"){
          newInput.type = "text";
        }else if(Object.values(obj)[1] === "shorttext"){
          newInput.type = "email";
        }else if(Object.values(obj)[1] === "combo"){  // Массив задания здесь требует выплывающее меню выбора в форме
          newInput.remove(); // Удаляю инпут,он не нужен здесь
          let select = document.createElement("select"); // Создаю выплывающее меню выбора в форме
          select.style.width = "177px";
          select.setAttribute(Object.keys(obj)[2] ,Object.values(obj)[2]);
          newP.appendChild(select); // Теперь вместо удаленного инпута у нас есть select 
          for(let key in obj){ // Перебираю данный объект,через сценарий в который мы спустились
            if(Array.isArray(obj[key])){ // Проверка значения ключа на массив
              for(let subObj of obj[key]){ // Перебираю наш объект-массив
                let option = document.createElement("option"); // Создаю option 
                option.value = Object.values(subObj)[1];
                option.append(Object.values(subObj)[0]); // В option бросаю значение Object.values(subObj)[0] ,то есть значение(текст) ключа
                select.append(option); // Кидаю option в select
              }
            }
          }
        }else if(Object.values(obj)[1] === "check"){
          newInput.type = "checkbox";
        }else if(Object.values(obj)[1] === "radio"){
          // Здесь точно такой же принцип как и в случае выше ,когда значение ключа в объекте является массивом
          newInput.remove();
          for(let key in obj){
            if(Array.isArray(obj[key])){    
              for(let subObj of obj[key]){
               let newSubinput = document.createElement("input"); 
               let newSubLabel = document.createElement("label");
               newSubLabel.append(Object.values(subObj)[0]);
               newSubinput.type = "radio";
               newSubinput.value = Object.values(subObj)[1];
               newSubinput.id = Object.values(subObj)[1] + "choice";
               newSubinput.name = "choice";
               newSubLabel.setAttribute("for" ,Object.values(subObj)[1] + "choice");
               newP.append(newSubinput ,newSubLabel);
              }
            }
          }
        }else if(Object.values(obj)[1] === "memo"){ // Здесь создаю поле для описания сайта,наличие которого требует задание
          let textArea = document.createElement("textarea");
          textArea.style.cssText = "height:100px; resize:none;"
          newP.append(textArea);
          newInput.remove(); // Здесь также теперь инпут не нужен
          newP.style.flexDirection = "column";
        }else if(Object.values(obj)[1] === "submit"){ // Создаю кнопку
          newLabel.remove(); // Здесь также теперь инпут не нужен
          newInput.type = Object.values(obj)[1];
          if(Object.values(obj)[0] === "Опубликовать"){ // Название кнопки в зависимости от передаваемого аргумента в параметр функции
            newInput.value = "Опубликовать";
          }else{
            newInput.value = "Зарегестрироваться";
          }
        }
        else{
          newInput.type = Object.values(obj)[1];
        }
    }
    document.body.append(newForm); // Добавляю форму на страницу
}

createForm(formDef1);

createForm(formDef2);

