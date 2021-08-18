let renderQuestionDlt = () => {
    let askBox = document.querySelector(".ask-delete");
    let checkPassDlt = document.querySelector(".checkPass");
    let dltAcc = document.querySelector("#dltAcc span");
    let questionDlt = document.querySelector(".main-profile__question");
    dltAcc.addEventListener("click", () => {
        if(questionDlt.classList.contains("profileQuestionNone")){
            questionDlt.classList.add("profileQuestionShow");
            questionDlt.classList.remove("profileQuestionNone");
        }
        if(checkPassDlt.classList.contains("checkPassShow")){
            checkPassDlt.classList.add("checkPassNone");
            checkPassDlt.classList.remove("checkPassShow");
        }
        if(askBox.classList.contains("ask-deleteNone")){
            askBox.classList.add("ask-deleteShow");
            askBox.classList.remove("ask-deleteNone");
        }
    })
}

let acceptDlt = () => {
    let checkPassDlt = document.querySelector(".checkPass");
    let askBox = document.querySelector(".ask-delete");
    let yesDlt = document.querySelector("#yesDlt");
    yesDlt.addEventListener("click", () => {
        askBox.classList.add("ask-deleteNone");
        askBox.classList.remove("ask-deleteShow");
        checkPassDlt.classList.add("checkPassShow");
        checkPassDlt.classList.remove("checkPassNone");
    })
}


let refusetDlt = () => {
    let questionDlt = document.querySelector(".main-profile__question");
    let noDlt = document.querySelector("#noDlt");
    noDlt.addEventListener("click", () => {
        questionDlt.classList.add("profileQuestionNone");
        questionDlt.classList.remove("profileQuestionShow");
    })
}

let notApproveDlt = () => {
    let checkFirstPass = document.querySelector("#checkFirstPass");
    let checkPassSecond = document.querySelector("#checkPassSecond")
    let questionDlt = document.querySelector(".main-profile__question");
    let notApproveDlt = document.querySelector("#notApproveDlt");
    notApproveDlt.addEventListener("click", () => {
        questionDlt.classList.add("profileQuestionNone");
        questionDlt.classList.remove("profileQuestionShow");
        checkFirstPass.value = "";
        checkPassSecond.value = "";
    })
}

let deleteLocalAcc = () => {
    let activeProfile = JSON.parse(localStorage.getItem("activeUser"));
    let valuesActiveProfile = Object.values(activeProfile);
    let arrAllProfiles = [];
    let allLocalKeys = Object.keys(localStorage);
    allLocalKeys.forEach((key) => {
        if(key.includes("user")){
            arrAllProfiles.push(key);
        }
    })
    arrAllProfiles.forEach((profile) => {
        let current = 0;
        let checkDataProfile = JSON.parse(localStorage.getItem(profile));
        let valuesDataProfile = Object.values(checkDataProfile);
        for(let i = 0; i < valuesActiveProfile.length; i++){
            if(valuesDataProfile[i] === valuesActiveProfile[i]){
                current++;
            }
        }
        if(current === valuesActiveProfile.length){
            localStorage.removeItem(profile);
            localStorage.removeItem("activeUser");
            document.location.href = "index.html";
        }
    })
}

let renderError = () => {
    let questionDlt = document.querySelector(".main-profile__question");
    let checkPassDlt = document.querySelector(".checkPass");
    let error = `
    <div id="errorBox">
        <p id="error">Вы ввели неправильный пароль!</p>
        <button id="okError">Ok</button>
    </div>
    `
    if(checkPassDlt.classList.contains("checkPassShow")){
        checkPassDlt.classList.add("checkPassNone");
        checkPassDlt.classList.remove("checkPassShow");
        questionDlt.innerHTML += error;
        let okError = document.querySelector("#okError");
        okError.addEventListener("click", () => {
            document.location.href = "main-profile.html";
        })
    }
}

let checkPassForDlt = () => {
    let approveDlt = document.querySelector("#approveDlt");
    let checkFirstPass = document.querySelector("#checkFirstPass");
    let checkPassSecond = document.querySelector("#checkPassSecond");
    let checkData = JSON.parse(localStorage.getItem("activeUser"));
    approveDlt.addEventListener("click", () => {
        if(checkFirstPass.value === checkData.userPassword &&  checkPassSecond.value === checkData.userPassword){
            deleteLocalAcc();
        }else{
            renderError();
        }
    })
}
let dltAcc = () => {
    renderQuestionDlt();
    refusetDlt();
    acceptDlt();
    checkPassForDlt();
    notApproveDlt();
}

dltAcc();