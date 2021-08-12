let allArticles = document.querySelector("#list");
allArticles.addEventListener("click", async () => {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    let arr = [];
     document.body.innerHTML = `
        <h1>Оглавление</h1>
        <div class="box-for-articles"></div>
     `
    data.forEach((post) => {
        arr.push(post.title);
        arr.sort();
    })
    let boxForArticles = document.querySelector(".box-for-articles");
    arr.forEach((title, index) => {
        boxForArticles.innerHTML += `
        <a href="#">${title}</a>
        `
        if(!arr[index-1]){
            let p = document.createElement("p");
            p.innerHTML = `${title[0]}`;
            boxForArticles.prepend(p);
        }
        if(arr[index+1]){
            if(title[0] !== arr[index+1][0]){
               let p = document.createElement("p");
               p.innerHTML = `${arr[index+1][0]}`;
               boxForArticles.append(p);
            }
        }
    })
    func()
})
let func = async () => {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    let allLinks = document.querySelectorAll("a");
    allLinks.forEach((link) => {
        link.addEventListener("click", () => {
            document.body.style = "display:flex"
            document.body.innerHTML = `
            <div class="nav"></div>
            <div class="article">
                <p class="name"></p>
                <p class="text"></p>
            </div>
            `
            data.forEach((article) => {
                if(article.title === link.textContent){
                    document.querySelector(".article .name").innerHTML = `${article.title}`
                    document.querySelector(".article .text").innerHTML = `${article.text}`
                }
                document.querySelector(".nav").innerHTML += `
                <a href="#">${article.title}</a>
                `
            })
        })
    })
    func();
}
