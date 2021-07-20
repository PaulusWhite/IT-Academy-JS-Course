class Book {
    constructor(nameBook ,author ,id ,count){
        this.nameBook = nameBook;
        this.author = author;
        this.id = id;
        this.count = count;
    }
}

class TravelBook extends Book {
    constructor(typeCover ,nameBook ,author ,id ,count){
        super(nameBook,author,id,count);
        this.typeCover = typeCover;
    }
    getInfo(){
        return `Название книги: ${this.nameBook}
Автор книги: ${this.author}
Количество страниц: ${this.count}`;
    }
}

class Comics extends TravelBook {
    constructor(numRelease ,typeCover,nameBook ,author ,id ,count){
        super(typeCover ,nameBook ,author ,id ,count);
        this.numRelease = numRelease;
    }
}

let formBooksTravel = document.querySelector("#books-travel");
let formComics = document.querySelector("#books-comics");
let list = document.querySelector("#list-books");
let btnDlt = document.querySelectorAll("#del");

let allInputNameBook = document.querySelectorAll("#books-travel input");
let allInputComics = document.querySelectorAll("#books-comics input");
let inputNameBook = document.querySelector("#title");
let inputAuthor = document.querySelector("#author");
let inputCount = document.querySelector("#count");
let inputWrapper = document.querySelector("#type-wrapper");

let allInputNameComics = document.querySelectorAll("#books-comics input");
let inputNameComics = document.querySelector("#title-c");
let inputAuthorComics = document.querySelector("#author-c");
let inputCountComics = document.querySelector("#count-c");
let inputNumberComics = document.querySelector("#number-count");

let allForms = document.querySelectorAll("form"); 

let arrBook = []; // массив,в который будут пушится значения данных о каждой книге,то есть getInfo() при их добавлении в общий список под формами

formBooksTravel.addEventListener("submit",(event) => {
    event.preventDefault();
    let book = new TravelBook(inputCount.value ,inputNameBook.value ,inputAuthor.value ,"",inputCount.value);
    arrBook.push(book.getInfo()) //пушим данные getInfo() этой книги в массив
    list.innerHTML += `
            <ul class="head_list">
                <li>Название книги</li>
                <li>Автор книги</li>
                <li>Действие</li>
            </ul>
            <ul>
                <li>${book.nameBook}</li>
                <li>${book.author}</li>
                <li><button class="delete">удалить</button><button class="info">подробнее</button></li>
            </ul>
    `
    allInputNameBook.forEach((elem,index) => { //чистим инпуты после отправки данных
        if(index !== allInputNameBook.length-1){
            elem.value = "";
        }
    })
})
formComics.addEventListener("submit",(event) => {
    event.preventDefault();
    let comics = new Comics(inputNumberComics.value ,"" ,inputNameComics.value , inputAuthorComics.value ,"" ,inputCountComics.value);
    arrBook.push(comics.getInfo()); //пушим данные getInfo() этой книги в массив
    list.innerHTML += `
            <ul class="head_list">
                <li>Название книги</li>
                <li>Автор книги</li>
                <li>Действие</li>
            </ul>
            <ul>
                <li>${comics.nameBook}</li>
                <li>${comics.author}</li>
                <li><button class="delete">удалить</button><button class="info">подробнее</button></li>
            </ul>
    `
    allInputComics.forEach((elem,index) => { //чистим инпуты после отправки данных
        if(index !== allInputComics.length-1){
            elem.value = "";
        }
    })
})

allForms.forEach((form) => { //перебираем две формы
    form.addEventListener("submit",(event) => {
        event.preventDefault();
        let allBtnInfo = document.querySelectorAll(".info"); // при каждой отправке формы нахоим/обновляем коллекцию кнопок "подроюнее"
        let allBtnDelete = document.querySelectorAll(".delete"); // при каждой отправке формы нахоим/обновляем коллекцию кнопок "удалить"
        allBtnInfo.forEach((elem ,index) => {
            elem.addEventListener("click",() => { // индекс соответствующей информации в массиве равен индексу кнопки в общей коллекции кнопок "подробнее"
                alert(arrBook[index]); 
            })
        })
        allBtnDelete.forEach((elem) => {
            elem.addEventListener("click",() => { // кнопка удаления для соответствующей колонки
                elem.parentElement.parentElement.previousElementSibling.remove();
                elem.parentElement.parentElement.remove();
            })
        })
    })
})