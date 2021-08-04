let renderUsers = async () => {
    for(let i = 0;i < 12; i++){
    let res = await fetch("https://randomuser.me/api/");
    let data = await res.json();
    let fullName = data.results[0].name
    let img = data.results[0].picture.large;
    let body = document.body;
    body.innerHTML += `
        <div class="main-box">
        <div class="box">
            <div class="box-for-img">
                <img src="${img}">
            </div>
            <p>My name is</p>
            <p class="name">${fullName.title} ${fullName.first} ${fullName.last}</p>
        </div>
        </div>
         `
    }
}
renderUsers();

window.addEventListener("scroll",() => {
    let elemsNum = document.body.children.length-2;
    let current = document.documentElement.scrollHeight - 937;
    if(current === window.pageYOffset && (elemsNum % 12 === 0)){
        renderUsers();
    }
})
