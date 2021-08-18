let renderBtn = document.querySelector("#render");
let current = 0;
let render = (amount = 15) => {
    let currentForHideBtnRender = 0;
    current+= amount;
    let posts = document.querySelector(".main-content__allposts");
    for(let i = 0; i < current; i++){
        if(posts.children[i]){
            posts.children[i].style.display = "flex";
            currentForHideBtnRender++;
        }
    }
    if(currentForHideBtnRender === posts.children.length){
        renderBtn.style.display = "none";
    }
}

let getData = async () => {
    let res = await fetch(`http://localhost:3000/posts`);
    let data = await res.json();
    let posts = document.querySelector(".main-content__allposts");
    data.forEach((post) => {
        posts.innerHTML += `
        <div class="main-content__post">
            <div class="main-content__box-for-img"><img src="img/books/${post.img}.png"></div>
            <div class="main-content__post-preview">
                <p class="main-content__name">${post.nameBook}</p>
                <p class="main-content__author">${post.author}</p>
                <p class="main-content__date-edition">Год издания:<span>${post.yearOfEdition}</span></p>
                <div class="main-content__price">
                            <p>${post.price}</p>
                            <button class="button">В корзину</button>
                        </div>
                <span id="idPost">${post.id}</span>
            </div>
        </div>
        `
    })
    search();
    resetFilters();
    postHoverEffect();
    sort();
    addItemsBasket();
    runPage();
    render();
}
getData();

renderBtn.addEventListener("click", () => {
    render(15);
})
