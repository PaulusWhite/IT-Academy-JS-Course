let renderUsers = () => {
    fetch("https://randomuser.me/api/")
    .then(
        (res) => {
            return res.json();
        }
    )
    .then((data) => {
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
    })
}

window.addEventListener("load",() => {
    for(let i = 0;i <12; i++){
        renderUsers()
    }
})

window.addEventListener("scroll",() => {
    let currentScroll = window.pageYOffset ;
    let allposts = document.querySelectorAll(".main-box");
    let elem = allposts[allposts.length-1].getBoundingClientRect().bottom
    if(currentScroll > (elem + pageYOffset - 1200)){
        renderUsers()
    }
})
