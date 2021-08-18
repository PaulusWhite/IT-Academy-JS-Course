let activeProfileData = JSON.parse(localStorage.getItem("activeUser"));
let profileLogin = document.querySelector("#profileLogin");
let profileName = document.querySelector("#profileName span");
let profileLastName = document.querySelector("#profileLastName span");
let profileEmail = document.querySelector("#profileEmail span");

let renderInfo = () => {
    profileLogin.innerHTML = activeProfileData.userLogin;
    profileName.innerHTML = activeProfileData.userName;
    profileLastName.innerHTML = activeProfileData.userLastName;
    profileEmail.innerHTML = activeProfileData.userEmail;
}

renderInfo();
