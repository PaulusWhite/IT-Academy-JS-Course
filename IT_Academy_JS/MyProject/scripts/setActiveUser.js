let showSubMenu = () => {
    let showSubMenuBtn = document.querySelector(".nav__user");
    let subMenu = document.querySelector("#submenu");
    showSubMenuBtn.addEventListener("click", () => {
        if(subMenu.classList.contains("submenuNone")){
            subMenu.classList.remove("submenuNone");
            subMenu.classList.add("submenuShow");
        }else{
            subMenu.classList.add("submenuNone");
            subMenu.classList.remove("submenuShow");
        }
    })
}

let hoddenMenu = () => {
    let subMenu = document.querySelector("#submenu");
    document.addEventListener("click", (event) => {
        if(subMenu.classList.contains("submenuShow")){
            if(!event.target.closest("#submenu") && !event.target.closest(".nav__user")){
                subMenu.classList.add("submenuNone");
                subMenu.classList.remove("submenuShow");
            }
        }
    })
}
let hiddenAfterScroll = () => {
    let subMenu = document.querySelector("#submenu");
    window.addEventListener("scroll",() => {
        let currentScroll = window.pageYOffset;   
        if(currentScroll > 200){
            if(subMenu.classList.contains("submenuShow")){
                setTimeout(() => {
                    subMenu.classList.remove("submenuShow");
                    subMenu.classList.add("submenuNone");
                },400)
            }
        }
    })
}
let runProfileInfo = () => {
    let myProfileBtn = document.querySelector("#myProfile");
    myProfileBtn.addEventListener("click", () => {
        document.location.href = "main-profile.html";
    })
}
let runProfileSettings = () => {
    let settingsBtn = document.querySelector("#settings");
    settingsBtn.addEventListener("click", () => {
        localStorage.setItem("flagSettings" ,true);
        document.location.href = "main-profile.html";

    })
}

let hoverCornerOverSub = () => {
    let myProfile = document.querySelector("#myProfile");
    let coverOverSub = document.querySelector(".coverOverSub");
    myProfile.addEventListener("mouseover", () => {
        coverOverSub.style.backgroundColor = "#138741";
    })
    myProfile.addEventListener("mouseout", () => {
        coverOverSub.style.backgroundColor = "white";
    })
}

let exit = () => {
    let exitBtn = document.querySelector("#exit");
    exitBtn.addEventListener("click", () => {
        localStorage.removeItem("activeUser");
        document.location.href = "index.html";
    })

}
let signIn = () => {
    let activUser = Object.keys(localStorage);
    let headActiveLogin = document.querySelector(".nav__login ");
    if(!(activUser.indexOf("activeUser") === -1)){
        let user = JSON.parse(localStorage.getItem("activeUser"));
        let userLogin = user.userLogin;
        headActiveLogin.innerHTML = `
        <p class="nav__user">${userLogin}<img src="img/user.png"><span class="cover"></span></p>
            <div id="submenu" class="submenuNone">
                <span class="coverOverSub"></span>
                <p id="myProfile">Мой профиль</p>

                <p id="settings">Настройки</p>
                <p id="exit">Выйти из аккаунта</p>
            </div>
        `;
        hoverCornerOverSub();
        exit();
        showSubMenu();
        hoddenMenu();
        runProfileInfo();
        runProfileSettings();
        hiddenAfterScroll();
    }
}
signIn();
