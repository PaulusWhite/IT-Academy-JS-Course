let isBookInBasket = () => {
    let btn = document.querySelector("button");
    let id = btn.parentElement.lastElementChild.lastElementChild.textContent;
    let arr = localStorage.getItem("ids").split(",");
    arr.forEach((idLocalS) => {
        if(id === idLocalS){
            btn.classList.add("basket");
            btn.textContent = "В корзине";
        }
    })
}
let addBookToBasket = () => {
    let btn = document.querySelector("button");
    btn.addEventListener("mouseover",() => {
        if(!btn.classList.contains("basket")){
            btn.style.cssText = "background:#8a491c;border-color:#8a491c;"
        }
    })
    btn.addEventListener("mouseout",() => {
        btn.style.cssText = "background:#black;border-color:white;"
    })
    btn.addEventListener("click", () => {
        let id = btn.parentElement.lastElementChild.lastElementChild.textContent;
        if(arrLocalStorageIds.indexOf(id) === -1){
            arrLocalStorageIds.push(id);
            btn.classList.add("basket");
            btn.textContent = "В корзине";
            localStorage.setItem("ids",arrLocalStorageIds);
            indicatorBasket.innerHTML = arrLocalStorageIds.length-1;
        }
    })
}


let addPotentialBookToBasket = () => {
    let allBtns = document.querySelectorAll(".main-content__potential-book button");
    allBtns.forEach((btn) => {
        btn.addEventListener("mouseover",() => {
            if(!btn.classList.contains("basket")){
                btn.style.cssText = "background:#8a491c;border-color:#8a491c;"
            }
        })
        btn.addEventListener("mouseout",() => {
            btn.style.cssText = "background:#black;border-color:white;"
        })
        btn.addEventListener("click", () => {
            let id = btn.parentElement.children[1].lastElementChild.textContent;
            if(arrLocalStorageIds.indexOf(id) === -1){
                arrLocalStorageIds.push(id);
                btn.classList.add("basket");
                btn.textContent = "В корзине";
                localStorage.setItem("ids",arrLocalStorageIds);
                indicatorBasket.innerHTML = arrLocalStorageIds.length-1;
            }
        })
    })
}

let isPotentialBookInBasket = () => {
    let allBtns = document.querySelectorAll(".main-content__potential-book button");
    allBtns.forEach((btn) => {
        let id = btn.parentElement.children[1].lastElementChild.textContent;
        let arr = localStorage.getItem("ids").split(",");
        arr.forEach((idLocalS) => {
            if(id === idLocalS){
                btn.classList.add("basket");
                btn.textContent = "В корзине";
            }
        })
    })
}

let runPageProduct = () => {
    let allItems = document.querySelectorAll(".main-content__potential-book");
    allItems.forEach((item) => {
        let name = item.children[1].children[2];
        item.addEventListener("mouseover", () => {
            name.style.textDecoration = "underline";
        })
        item.addEventListener("mouseout", () => {
            name.style.textDecoration = "none";
        })
        item.addEventListener("click", (event) => {
            if(event.target.tagName !== "BUTTON"){
                let id = item.children[1].children[3].textContent;
                localStorage.setItem("bookId", id);
                document.location.href = "productPage.html";
            }
        })
    })
}

let getRandomBooks = async () => {
    let potentialBooks = document.querySelector(".main-content__box-for-potential-books");
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    let arr = [];
    let activeId = document.querySelector("#idBook").textContent;
    do{
        let current = 0;
        let randomNum =  Math.ceil(Math.random() * data.length);
        arr.forEach((num) => {
            if((+num === randomNum) || (+activeId === randomNum)){
                current++;
            }
        })
        if(current === 0){
            arr.push(randomNum);
        }
    }while (arr.length < 5);
    arr.forEach((num) => {
        data.forEach((post) => {
            if(num === post.id){
                potentialBooks.innerHTML += `
                    <div class="main-content__potential-book">
                        <div class="main-content__box-for-img">
                            <img src="img/books/${post.img}.png">
                        </div>
                        <div class="main-content__box-for-description">
                            <p class="main-content__price">${post.price}</p>
                            <p class="main-content__author">${post.author}</p>
                            <p class="main-content__name">${post.nameBook}</p>
                            <span id="itemId">${post.id}</span>
                        </div>
                        <button>В корзину</button>
                    </div>
                `
            }
        })
    })
    runPageProduct();
    addPotentialBookToBasket();
    isPotentialBookInBasket();
}

let getTargetData = async () => {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    let neededId = localStorage.getItem("bookId")-1;
    let targetBook = data[neededId];
    let boxForBook = document.querySelector(".main-content__box-for-book");
    let crumb = document.querySelector("#crumb-book");
    crumb.innerHTML = `/ ${targetBook.nameBook}`;
    crumb.addEventListener("click", () => {
        location.reload();
    })
    boxForBook.innerHTML = `
    
        <div class="main-content__info">
            <div class="main-content__img">
                <img src="img/books/${targetBook.img}.png">
            </div>
            <div class="main-content__description">
                <h1 class="name">${targetBook.nameBook}</h1>
                <p class="price">${targetBook.price}</p>
                <button class="button">Заказать</button>
                <div class="info-book">
                    <div class="author">
                        <span>Автор</span>
                        <span>${targetBook.author}</span>
                    </div>
                    <div class="publishing">
                        <span>Издательство</span>
                        <span>${targetBook.publishing}</span>
                    </div>
                    <div class="yearOfEdition">
                        <span>Год издания</span>
                        <span>${targetBook.yearOfEdition}</span>
                    </div>
                    <div class="numOfPages">
                        <span>Количество страниц</span>
                        <span>${targetBook.numOfPages}</span>
                    </div>
                    <div class="cover">
                        <span>Переплёт</span>
                        <span>${targetBook.cover}</span>
                    </div>
                    <span id="idBook">${targetBook.id}</span>
                </div>
            </div>
        </div>
        <div class="main-content__annotation">
            <p>Анотация</p>
            <p>${targetBook.annotation}</p>
        </div>
    `
    addBookToBasket();
    isBookInBasket();
    getRandomBooks();
    let h = document.querySelector("h1");
    h.addEventListener("dblclick", (event) => {
        event.preventDefault();
    })
}
getTargetData();