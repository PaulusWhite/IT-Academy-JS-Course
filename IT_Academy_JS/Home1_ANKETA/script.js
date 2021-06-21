let name = prompt("Введите ваше имя");
if (!name || name == null || Number(name) || /\d/.test(name)){
    do{
        name = prompt("Введите ваше имя буквами без цифр,пожалуйста");
    }while(name == false || name == null || Number(name) || /\d/.test(name));
}
let surname = prompt("Введите вашу фамилию");
if (!surname || surname == null || Number(surname) || /\d/.test(surname)){
    do{
        surname = prompt("Введите вашу фамилию буквами без цифр,пожалуйста");
    }while(surname == false || surname == null || Number(surname) || /\d/.test(surname));
}
let patronymic = prompt("Введите вашу отчество");
if (!patronymic || patronymic == null || Number(patronymic) || /\d/.test(patronymic)){
    do{
        patronymic = prompt("Введите ваше отчество буквами без цифр,пожалуйста");
    }while(patronymic == false || patronymic == null || Number(patronymic) || /\d/.test(patronymic));
}
let getAge = prompt("Укажите свой возраст");
let age = Number(getAge);
if(!age || !Number.isInteger(age)){
    do{
        getAge = prompt("Пожалуйста,укажите свой возраст целым числом без букв");
        age = Number(getAge);
    }while(!age || !Number.isInteger(age));
}
let ageInDays = age * 365;
let ageAfterFiveYears = parseFloat(age) + 5;
let askGender = confirm("Ваш пол мужской?");
let pension;
if (age > 61){
    pension = "Вы на пенсии";
}else{
    pension = "Вы не на пенсии";
}
let gender;
if (askGender == true){
    gender = "Мужской";
} else {
    gender = "Женский";
}
alert("Ваше ФИО: " + name + " " + surname + " " + patronymic + 
"\nВаш возраст в годах: " + age + "\nВаш возраст в днях: " + ageInDays + "\nЧерез 5 лет вам будет: " + ageAfterFiveYears + "\n" + pension + "\nВаш пол: " + gender);

