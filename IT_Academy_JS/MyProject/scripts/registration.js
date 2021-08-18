let formReg = document.querySelector(".box-login-and-registration .registration form");

let postDataToServer = async () => {
    let arrLSKeys = Object.keys(localStorage);
    let counter = 0;
    arrLSKeys.forEach((usKey) => {
        if(usKey.includes("user")){
            counter++;
        }
    })
    let newUser = `user${counter+1}`;

    let  postData = async () => {
        let user = {
        "userLogin": inputLoginForReg.value, // loginRegistrationValid.js
        "userEmail": inputEmailForReg.value, // loginRegistrationValid.js
        "userName": inputNameForReg.value, // loginRegistrationValid.js
        "userLastName": inputLastNameForReg.value,  // loginRegistrationValid.js
        "userPassword": inputPasswordForReg.value
        }
        localStorage.setItem(`${newUser}`,JSON.stringify(user));
        localStorage.setItem("activeUser",JSON.stringify(user));
        signIn()
    }

    formReg.addEventListener("submit",(event) => {
        let current = 0;
        let allInputReg = document.querySelectorAll(".box-login-and-registration .registration form input");
        allInputReg.forEach((elem) => {
            if(elem.value === "" || elem.style.backgroundColor === "rgba(245, 98, 108, 0.9)"){
                event.preventDefault();
                elem.classList.add("nodispatchForForm");
                btnSbmtForReg.addEventListener("mouseup",() => {
                    elem.classList.remove("nodispatchForForm");
                })
            }else{
                current++;
            }
        })
        if(current === allInputReg.length){
            postData();
        }
    })
}
postDataToServer();