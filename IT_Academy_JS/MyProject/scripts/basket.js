let arrLocalStorageIds ;
let indicatorBasket = document.querySelector(".nav__basket p span");

let resetData = () => {
    let localKeys = Object.keys(localStorage);
    if(localKeys.indexOf("ids") === -1){
        localStorage.setItem("ids",0); 
    }
    Object.keys(localStorage).forEach((key) => {
        if(key === "ids"){
            let index = Object.keys(localStorage).indexOf(key);
            arrLocalStorageIds = Object.values(localStorage)[index].split(",");
        }
    })
    indicatorBasket.innerHTML = arrLocalStorageIds.length-1;
}

resetData();

let addBooks = () => {
    let btnsBuy = document.querySelectorAll(".main-content__price .button");
    btnsBuy.forEach((btn) => {
        btn.addEventListener("click",() => {
            let id = btn.parentElement.nextElementSibling.textContent;
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

let setBtnSelectedBooks = () => {
    let allId = document.querySelectorAll(".main-content__post #idPost");
    arrLocalStorageIds.forEach((id) => {
        allId.forEach((idPost) => {
            if(+id === +idPost.textContent){
                let btn = idPost.previousElementSibling.lastElementChild;
                btn.classList.add("basket");
                btn.textContent = "В корзине";
            }
        })
    })
}

let addItemsBasket = () => {
    addBooks();
    setBtnSelectedBooks();
}
