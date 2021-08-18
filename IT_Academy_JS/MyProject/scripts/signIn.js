let formSignIn = document.querySelector(".box-login-and-registration .login form");
let inputLoginSignIn = document.querySelector(".login #userLoginForSignIn");
let inputPasswordSignIn = document.querySelector(".login #userPasswordForSignIn");
let btnSbmtForSignIn = document.querySelector(".box-login-and-registration .login form button");
let allInputSignIn = document.querySelectorAll(".box-login-and-registration .login form input");

let createError = () => {
    let styleForError = `display:flex;flex-direction:column;align-items:center; width:95%;height:170px;position:absolute;top:95px;left:50%;transform:translate(-50%);
    border:solid black 1px;padding:5px;background-color:rgba(245, 245, 245, 1);`;
        let error = document.createElement("div");
        let textError = document.createElement("p");
        let okBtn = document.createElement("button");
        okBtn.classList.add("okBtn")
        okBtn.innerHTML = "OK";
        textError.style.cssText = "margin:20px 0"
        textError.innerHTML = "Вы ввели неправильный логин или пароль.Попробуйте ещё раз"
        error.style.cssText = styleForError;
        error.append(textError,okBtn);
        formSignIn.append(error);
}

let testProfile = () => {
    let activeUser;
    let current = 0;
    let currentUsers = 0;
    for(let key in localStorage){
        if(key.includes("user")){
            currentUsers++;
            let objData = JSON.parse(localStorage.getItem(key));
            if(objData.userLogin === inputLoginSignIn.value && objData.userPassword === inputPasswordSignIn.value){
                activeUser = objData;
                localStorage.setItem("activeUser",JSON.stringify(activeUser));
                localStorage.setItem("ids", 0);
            }else{
                current++;
            }
        }
    }
    if(currentUsers === current){
        alert("Вы ввели неправильный логин или пароль!");
    }
}

let validInputSignIn = () => { 
    formSignIn.addEventListener("submit", (event) => {
        let current = 0;
        allInputSignIn.forEach((elem) => {
            if(elem.value === ""){
                event.preventDefault();
                elem.classList.add("nodispatchForForm");
                btnSbmtForSignIn.addEventListener("mouseup",() => {
                    elem.classList.remove("nodispatchForForm");
                })
            }else{
                current++;
            }
        })
        if(current === allInputSignIn.length){
            testProfile();
        }
    })
}


validInputSignIn()
