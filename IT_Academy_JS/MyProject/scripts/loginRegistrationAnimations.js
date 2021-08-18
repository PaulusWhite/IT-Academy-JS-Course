let reg = document.querySelector(".registration p span");
let login = document.querySelector(".login p span");
let divForRegistration = document.querySelector(".registration");
let divForLogin = document.querySelector(".login");
let logOrRegBtn = document.querySelector("header .nav__login p");
let divForLogReg = document.querySelector(".box-login-and-registration");
let background = document.createElement("div");
let heightDocument = document.documentElement.clientHeight;
let allInputLogForm = document.querySelectorAll(".box-login-and-registration input");

let getLoginDiv = () => {
    background.style.cssText =`position:fixed;height:100%;width:100%;top:-${heightDocument}px;left:0;z-index:1;`;
    logOrRegBtn.addEventListener("click",() => {
        setTimeout( () => {
            divForLogReg.style.display = "inline-block";
            divForLogReg.style.opacity = "1";
        },330)
        document.body.append(background);
        background.classList.add("scrollBgLogin");
        document.body.style.overflow = "hidden";
        
    })
}

let hideLoginDiv = () => {
    window.addEventListener("mousedown",(event) =>  {
        let offsentPrnt = event.target.offsetParent;
        let targetError = event.target.className;
        if(divForLogReg.style.opacity === "1"){
            if(offsentPrnt !== divForLogReg && offsentPrnt !== divForRegistration && offsentPrnt !== divForLogin && targetError !== "error"){
                document.body.style.overflow = "visible";
                divForLogReg.style.opacity = "0";
                setTimeout( () => {
                    divForLogReg.style.display = "none";
                },330)
                background.classList.remove("scrollBgLogin");
                allInputLogForm.forEach((elem) => {
                    elem.value = "";
                    elem.style.background = "rgba(14, 14, 14, 0.8)";
                })
            } 
        }
    })
}

let changeWayLogin = () => {
    divForLogin.style.display = "none";
    reg.addEventListener("click",() => {
        divForLogin.style.display = "flex";
        divForRegistration.style.cssText = "transform:rotateY(90deg);"
        setTimeout(()=>{
            divForRegistration.style.display = "none";
            divForLogin.style.transform = "rotateY(0deg)";
            allInputLogForm.forEach((elem) => {
                elem.value = "";
                elem.style.backgroundColor = "rgba(14, 14, 14, 0.8)";
            })
        },500);
    })
    login.addEventListener("click",() => {
        divForRegistration.style.display = "flex";
        divForLogin.style.cssText = "rotateY(90deg);"
        setTimeout(()=>{
            divForLogin.style.display = "none";
            divForRegistration.style.transform = "rotateY(0deg)";
            allInputLogForm.forEach((elem) => {
                elem.value = "";
                elem.style.backgroundColor = "rgba(14, 14, 14, 0.8)";
            })
        },500);
    })
}

getLoginDiv();
hideLoginDiv();
changeWayLogin();