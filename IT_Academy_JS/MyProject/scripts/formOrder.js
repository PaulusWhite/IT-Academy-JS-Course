let btnApproveOrder = document.querySelector("#approveOrder");
let allInputs = document.querySelectorAll(".main-content__box-for-form input");
let inputName = document.querySelector("#userName");
let inputMail = document.querySelector("#mail");
let inputTel = document.querySelector("#tel");
let allLabelForm = document.querySelectorAll(".main-content__box-for-form form label");
let body = document.querySelector("body");

let renderOkWindow = () => {
    body.innerHTML += `
    <div class="main-content__bg-for-window">
        <div class="main-content__acceptBid">
            <h1>Ваша заказ успешно принят!</h1>
            <p>В течение 24 часов с Вами свяжется наш специалист для подтверждения заказа</p>
            <button id="okAfterOrder">Ok</button>
        </div>
    </div>
    `
    let okBtn = document.querySelector("#okAfterOrder");
    body.style.overflow = "hidden";
    okBtn.addEventListener("click", () => {
        document.location.href = "index.html";
    })
}
let styleForErrorOrder = `width:100%;position:absolute;top:45px;left:50%;
                     transform:translate(-50%);border:solid black 1px;
                     padding:5px;background-color:white;z-index:1`;
document.addEventListener("click",() => {
        allLabelForm.forEach((elem) => {
            if(elem.children.length === 1 || elem.children.length === 2){
                if(elem.firstElementChild.id !== "placeholder"){
                    elem.firstElementChild.remove();
                }
                }
        })
})

let resetBasket = () => {
    localStorage.setItem("ids",0);
}

let validName = () => {
    inputName.addEventListener("blur", () => {
        if(/[\W\d\s]/.test(inputName.value) && !(/[А-я]/.test(inputName.value))){
            inputName.style.cssText = "background-color:rgba(245, 98, 108, 0.9);transition:0.1s";
            let error = document.createElement("span");
            error.classList.add("error")
            error.innerHTML = "Не может быть пробелов,небуквенных символов,чисел!";
            error.style.cssText = styleForErrorOrder;
            setTimeout(() => {
                inputName.previousElementSibling.append(error)
            },200)
        }else{
            inputName.style.cssText = "background-color:white";
            inputName.classList.add("input-done");
        }
    })
}

let validMail = () => {
    inputMail.addEventListener("blur", () => {
        if(!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(inputMail.value))) {
            inputMail.style.cssText = "background-color:rgba(245, 98, 108, 0.9);transition:0.1s";
            let error = document.createElement("span");
            error.classList.add("error")
            error.innerHTML = "Введите корректный email!";
            error.style.cssText = styleForErrorOrder;
            setTimeout(() => {
                inputMail.previousElementSibling.append(error)
            },200)
         }else{
            inputMail.style.cssText = "background-color:white";
            inputMail.classList.add("input-done"); 
         }
    })
}

let validTel = () => {
    inputTel.addEventListener("blur", () => {
        if(/[\D]/.test(inputTel.value) || inputTel.value.length < 9){
            inputTel.style.cssText = "background-color:rgba(245, 98, 108, 0.9);transition:0.1s";
            let error = document.createElement("span");
            error.classList.add("error");
            error.innerHTML = "Укажите телефон в формате 375 ** *** ** **";
            error.style.cssText = styleForErrorOrder;
            setTimeout(() => {
                inputTel.previousElementSibling.prepend(error);
            },200)
        }else{
            inputTel.style.cssText = "background-color:white";
            inputTel.classList.add("input-done");
        }
    })
}

btnApproveOrder.addEventListener("click", (event) => {
    let current = 0;
    allInputs.forEach((input) => {
        if(input.value === "" || input.style.backgroundColor === "rgba(245, 98, 108, 0.9)"){
            event.preventDefault();
            input.classList.add("nodispatchForForm");
            setTimeout(() => {
                input.classList.remove("nodispatchForForm");
            }, 600)
        }else{
            current++;
        }
    })
    if(current === 3){
        event.preventDefault();
        resetBasket();
        renderOkWindow();
    }
})

validName();
validMail();
validTel();