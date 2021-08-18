let allBoxesForChange = document.querySelectorAll("#windowChange div");
let activeProfile = JSON.parse(localStorage.getItem("activeUser"));
let valuesActiveProfile = Object.values(activeProfile);

let settingsFromHeaderMenu = () => {
let settingsMenu = document.querySelector("#subSettings");
    if(localStorage.getItem("flagSettings") === "true"){
        if(settingsMenu.classList.contains("subSettingsNone")){
            settingsMenu.classList.add("subSettingsShow");
            settingsMenu.classList.remove("subSettingsNone");
        }else{
            settingsMenu.classList.add("subSettingsNone");
            settingsMenu.classList.remove("subSettingsShow");
        }
        localStorage.setItem("flagSettings", false);
    }
}
settingsFromHeaderMenu();

let resetInputsValue = () => {
    let allInuts = document.querySelectorAll("#windowChange input");
    allInuts.forEach((input) => {
        input.value = "";
    })
}

let validNewLogin = () => {
    let newLoginInput = document.querySelector("#newLogin");
    newLoginInput.addEventListener("blur", () => {
        if(/[\W\s]/.test(newLoginInput.value) && !(/[А-я]/.test(newLoginInput.value)) ||
        (/^(\d)/.test(newLoginInput.value))){
            newLoginInput.style.cssText = "background-color:rgba(245, 98, 108, 0.9);transition:0.1s";
        }else{
            newLoginInput.style.cssText = "background-color:white";
        }
    })
}
let validNewPassword = () => {
    let newPasswordInput = document.querySelector("#newPassword");
    newPasswordInput.addEventListener("blur", () => {
        if(/\s/.test(newPasswordInput.value)){
            newPasswordInput.style.cssText = "background-color:rgba(245, 98, 108, 0.9);transition:0.1s";
        }else{
            newPasswordInput.style.cssText = "background-color:white";
        }
    })
}
let validNewMail = () => {
    let newPasswordEmail = document.querySelector("#newMail");
    newPasswordEmail.addEventListener("blur", () => {
        if(!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(newPasswordEmail.value))) {
            newPasswordEmail.style.cssText = "background-color:rgba(245, 98, 108, 0.9);transition:0.1s";
        }else{
            newPasswordEmail.style.cssText = "background-color:white";
        }
    })
}

let isEmptyInputs = () => {
    let inputs = document.querySelectorAll("#windowChange input");
    inputs.forEach((input) => {
        if(input.value === ""){
            input.classList.add("nodispatch-for-settings");
            setTimeout(() => {
                input.classList.remove("nodispatch-for-settings");
            },600)
        }
    })
}

let hiddenAllSettingsBox = () => {
    allBoxesForChange.forEach((box) => {
        if(box.classList.contains("boxChangeShow")){
            box.classList.add("boxChangeNone");
            box.classList.remove("boxChangeShow");
        }
    })
}

let editSettingsProfile = () => {
    let settingsBtn = document.querySelector("#settingsInAcc span");
    let settingsMenu = document.querySelector("#subSettings");
    settingsBtn.addEventListener("click", () => {
        resetInputsValue();
        if(settingsMenu.classList.contains("subSettingsNone")){
            settingsMenu.classList.add("subSettingsShow");
            settingsMenu.classList.remove("subSettingsNone");
        }else{
            settingsMenu.classList.add("subSettingsNone");
            settingsMenu.classList.remove("subSettingsShow");
        }
        hiddenAllSettingsBox();
    })
}

let editLoginData = () => {
    let changeDataBtn = document.querySelector("#boxChangeLogin button");
    let checkLoginInput = document.querySelector("#checkLogin");
    let newLoginInput = document.querySelector("#newLogin");
    validNewLogin();
    changeDataBtn.addEventListener("click", () => {
        isEmptyInputs();
        if(newLoginInput.value !== "" && newLoginInput.style.backgroundColor !== "rgba(245, 98, 108, 0.9)"){
            let arrAllProfiles = [];
            if(checkLoginInput.value === activeProfile.userLogin){
                let localKeys = Object.keys(localStorage);
                localKeys.forEach((key) => {
                    if(key.includes("user")){
                        arrAllProfiles.push(key);
                    }
                })
                arrAllProfiles.forEach((profile) => {
                    let current = 0;
                    let checkDataProfile = JSON.parse(localStorage.getItem(profile));
                    let valuesDataProfile = Object.values(checkDataProfile);
                    for(let i = 0;i < valuesActiveProfile.length; i++){
                        if(valuesDataProfile[i] === valuesActiveProfile[i]){
                            current++;
                        }
                    }
                    if(current === valuesActiveProfile.length){
                        checkDataProfile.userLogin = newLoginInput.value;
                        localStorage.setItem(profile,JSON.stringify(checkDataProfile));
                        localStorage.setItem("activeUser",JSON.stringify(checkDataProfile));
                        signIn();
                        window.location.reload();
                    }
                })
            }else{
                alert("Вы ввели неверную действующий логин")
                checkLoginInput.value = "";
                newLoginInput.value = "";
            }
        }
    })
}

let editPasswordData = () => {
    let changeDataBtn = document.querySelector("#boxChangePassword button");
    let checkPasswordInput = document.querySelector("#checkPassword");
    let checkPasswordSecondInput = document.querySelector("#checkPasswordSecond");
    let newPasswordInput = document.querySelector("#newPassword");
    validNewPassword();
    changeDataBtn.addEventListener("click", () => {
        isEmptyInputs();
        if(newPasswordInput.value !== "" && newPasswordInput.style.backgroundColor !== "rgba(245, 98, 108, 0.9)"){
            let arrAllProfiles = [];
            if(checkPasswordInput.value === checkPasswordSecondInput.value && 
               checkPasswordSecondInput.value === activeProfile.userPassword){
                let localKeys = Object.keys(localStorage);
                localKeys.forEach((key) => {
                    if(key.includes("user")){
                        arrAllProfiles.push(key);
                    }
                })
                arrAllProfiles.forEach((profile) => {
                    let current = 0;
                    let checkDataProfile = JSON.parse(localStorage.getItem(profile));
                    let valuesDataProfile = Object.values(checkDataProfile);
                    for(let i = 0;i < valuesActiveProfile.length; i++){
                        if(valuesDataProfile[i] === valuesActiveProfile[i]){
                            current++;
                        }
                    }
                    if(current === valuesActiveProfile.length){
                        checkDataProfile.userPassword = newPasswordInput.value;
                        localStorage.setItem(profile,JSON.stringify(checkDataProfile));
                        localStorage.setItem("activeUser",JSON.stringify(checkDataProfile));
                        signIn();
                        window.location.reload();
                    }
                })
            }else{
                alert("Вы ввели неверный действующий логин")
                checkPasswordInput.value = "";
                checkPasswordSecondInput.value = "";
                newPasswordInput.value = "";
            }
        }
    })
}

let editMailData = () => {
    let changeDataBtn = document.querySelector("#boxChangeMail button");   
    let checkMailInput = document.querySelector("#checkMail");
    let newMailInput = document.querySelector("#newMail");
    validNewMail();
    changeDataBtn.addEventListener("click", () => {
        isEmptyInputs();
        if(newMailInput.value !== "" && newMailInput.style.backgroundColor !== "rgba(245, 98, 108, 0.9)"){
            let arrAllProfiles = [];
            if(checkMailInput.value === activeProfile.userEmail){
                let localKeys = Object.keys(localStorage)
                localKeys.forEach((key) => {
                    if(key.includes("user")){
                        arrAllProfiles.push(key);
                    }
                })
                arrAllProfiles.forEach((profile) => {
                    let current = 0;
                    let checkDataProfile = JSON.parse(localStorage.getItem(profile));
                    let valuesDataProfile = Object.values(checkDataProfile);
                    for(let i = 0;i < valuesActiveProfile.length; i++){
                        if(valuesDataProfile[i] === valuesActiveProfile[i]){
                            current++;
                        }
                    }
                    if(current === valuesActiveProfile.length){
                        checkDataProfile.userEmail = newMailInput.value;
                        localStorage.setItem(profile,JSON.stringify(checkDataProfile));
                        localStorage.setItem("activeUser",JSON.stringify(checkDataProfile));
                        signIn();
                        window.location.reload();
                    }
                })
            }else{
                alert("Вы ввели неверный действующую почту")
                checkMailInput.value = "";
                newMailInput.value = "";
            }
        }
    })
}

let changeLogin = () => {
    let changeBtn = document.querySelector("#changeLogin");
    changeBtn.addEventListener("click", () => {
        resetInputsValue();
        allBoxesForChange.forEach((box) => {
            if(box.id === "boxChangeLogin"){
                if(box.classList.contains("boxChangeNone")){
                    box.classList.add("boxChangeShow");
                    box.classList.remove("boxChangeNone");
                }
            }else{
                if(box.classList.contains("boxChangeShow")){
                    box.classList.add("boxChangeNone");
                    box.classList.remove("boxChangeShow");
                }
            }
        })
        editLoginData();
    })
}

let changePassword = () => {
    let changeBtn = document.querySelector("#changePassword");
    changeBtn.addEventListener("click", () => {
        resetInputsValue();
        allBoxesForChange.forEach((box) => {
            if(box.id === "boxChangePassword"){
                if(box.classList.contains("boxChangeNone")){
                    box.classList.add("boxChangeShow");
                    box.classList.remove("boxChangeNone");
                }
            }else{
                if(box.classList.contains("boxChangeShow")){
                    box.classList.add("boxChangeNone");
                    box.classList.remove("boxChangeShow");
                }
            }
        })
        editPasswordData();
    })  
}

let changeMail = () => {
    let changeBtn = document.querySelector("#changeMail");
    changeBtn.addEventListener("click", () => {
        resetInputsValue();
        allBoxesForChange.forEach((box) => {
            if(box.id === "boxChangeMail"){
                if(box.classList.contains("boxChangeNone")){
                    box.classList.add("boxChangeShow");
                    box.classList.remove("boxChangeNone");
                }
            }else{
                if(box.classList.contains("boxChangeShow")){
                    box.classList.add("boxChangeNone");
                    box.classList.remove("boxChangeShow");
                }
            }
        })
        editMailData();
    })  
}

editSettingsProfile();
changeLogin();
changePassword();
changeMail();