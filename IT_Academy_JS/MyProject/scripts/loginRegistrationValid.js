let inputLoginForReg = document.querySelector(".registration #userLoginForReg");
let inputEmailForReg = document.querySelector(".registration #userEmailForReg");
let inputNameForReg = document.querySelector(".registration #userNameForLogin");
let inputLastNameForReg = document.querySelector(".registration #userLastNameForLogin");
let inputPasswordForReg = document.querySelector(".registration #passwordForReg");
let btnSbmtForReg = document.querySelector(".box-login-and-registration .registration form button");
let allLabelFromForm = document.querySelectorAll(".box-login-and-registration .registration form label");

let resetAutocomplete = () => {
    let allInput = document.querySelectorAll("input");
    allInput.forEach((input) => {
        input.autocomplete = "off";
    })
}

let styleForError = "width:100%;position:absolute;top:45px;left:50%;transform:translate(-50%);border:solid black 1px;padding:5px;background-color:rgba(245, 245, 245, 0.9);";
document.addEventListener("click",() => {
    allLabelFromForm.forEach((elem) => {
        if(elem.children.length === 1){
            elem.firstElementChild.remove();
        }
    })
})

let validLoginForReg = () => {
    inputLoginForReg.addEventListener("blur",() => {
        if(/[А-я\s\W]/.test(inputLoginForReg.value) || /^\d/.test(inputLoginForReg.value)){
            inputLoginForReg.style.cssText = "background-color:rgba(245, 98, 108, 0.9);transition:0.1s";
            let error = document.createElement("span");
            error.classList.add("error")
            error.innerHTML = "Не может быть пробелов,кирилицы,небуквенных символов,первый символ не может быть цифрой!";
            error.style.cssText = styleForError;
            setTimeout(() => {
                inputLoginForReg.previousElementSibling.append(error)
            },200)
        }
        else{
            inputLoginForReg.style.cssText = "background-color:rgba(14, 14, 14, 0.8)";
            inputLoginForReg.classList.add("input-done");
        }
    })
}

let validEmailForReg = () => {
    inputEmailForReg.addEventListener("blur", () => {
        if(!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(inputEmailForReg.value))) {
            inputEmailForReg.style.cssText = "background-color:rgba(245, 98, 108, 0.9);transition:0.1s";
            let error = document.createElement("span");
            error.classList.add("error")
            error.innerHTML = "Введите корректный email!";
            error.style.cssText = styleForError;
            setTimeout(() => {
                inputEmailForReg.previousElementSibling.append(error)
            },200)
        }else{
            inputEmailForReg.style.cssText = "background-color:rgba(14, 14, 14, 0.8)";
            inputEmailForReg.classList.add("input-done"); 
        }
    })
}

let validNameForReg = () => {
    inputNameForReg.addEventListener("blur",() => {
        if(/[\W\d\s]/.test(inputNameForReg.value) && !(/[А-я]/.test(inputNameForReg.value))){
            inputNameForReg.style.cssText = "background-color:rgba(245, 98, 108, 0.9);transition:0.1s";
            let error = document.createElement("span");
            error.classList.add("error")
            error.innerHTML = "Не может быть пробелов,небуквенных символов,чисел!";
            error.style.cssText = styleForError;
            setTimeout(() => {
                inputNameForReg.previousElementSibling.append(error)
            },200)
        }else{
            inputNameForReg.style.cssText = "background-color:rgba(14, 14, 14, 0.8)";
            inputNameForReg.classList.add("input-done");
        }
    })
}

let validLastNameForReg = () => {
    inputLastNameForReg.addEventListener("blur",() => {
        if(/[\W\d\s]/.test(inputLastNameForReg.value) && !(/[-А-я]/.test(inputLastNameForReg.value))){
            inputLastNameForReg.style.cssText = "background-color:rgba(245, 98, 108, 0.9);transition:0.1s";
            let error = document.createElement("span");
            error.classList.add("error");
            error.innerHTML = "Не может быть пробелов,небуквенных символов,чисел!";
            error.style.cssText = styleForError;
            setTimeout(() => {
                inputLastNameForReg.previousElementSibling.append(error)
            },200)
        }else{
            inputLastNameForReg.style.cssText = "background-color:rgba(14, 14, 14, 0.8)";
            inputLastNameForReg.classList.add("input-done");
        }
    })
}

let validPasswordForReg = () => {
    inputPasswordForReg.addEventListener("blur",() => {
        if(/\s/.test(inputPasswordForReg.value)){
            inputPasswordForReg.style.cssText = "background-color:rgba(245, 98, 108, 0.9);transition:0.1s";
        }else{
            inputPasswordForReg.style.cssText = "background-color:rgba(14, 14, 14, 0.8)";
        }
    })
}

validLoginForReg();
validEmailForReg();
validNameForReg();
validLastNameForReg();
validPasswordForReg();
resetAutocomplete();
