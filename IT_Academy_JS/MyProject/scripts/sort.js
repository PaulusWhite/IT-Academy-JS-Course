let sortByCheapPrices = () => {
    let allPosts = document.querySelectorAll(".main-content__post");
    let allPrices = document.querySelectorAll(".main-content__allposts .main-content__price p");
    let arr = [];
    allPrices.forEach((price) => {
        let idValue = +price.parentElement.nextElementSibling.textContent;
        let priceValue = parseFloat(price.textContent);
        let obj = {
            idKey:idValue,
            priceKey:priceValue,
        }
        arr.push(obj);
    })
    arr = arr.sort((a,b) => {
        if(a.priceKey > b.priceKey){
            return 1;
        }
        if(a.priceKey < b.priceKey) {
            return -1;
        }
    })
    allPosts.forEach( async (post,index) => {
        let res = await fetch("http://localhost:3000/posts")
        let json = await res.json();
        json.forEach((subPost) => {
            let id = parseFloat(subPost.id);
            if(id === arr[index].idKey){
                post.innerHTML = `
                <div class="main-content__box-for-img"><img src="img/books/${subPost.img}.png"></div>
                    <div class="main-content__post-preview">
                        <p class="main-content__name">${subPost.nameBook}</p>
                        <p class="main-content__author">${subPost.author}</p>
                        <p class="main-content__date-edition">Год издания:<span>${subPost.yearOfEdition}</span></p>
                        <div class="main-content__price">
                            <p>${subPost.price}</p>
                            <button class="button">В корзину</button>
                        </div>
                        <span id="idPost">${subPost.id}</span>
                    </div>
                `
            }
        })
        postHoverEffect();
        addItemsBasket();
    })
}

let sortByExpensivePrices = () => {
    let allPosts = document.querySelectorAll(".main-content__post");
    let allPrices = document.querySelectorAll(".main-content__allposts .main-content__price p");
    let arr = [];
    allPrices.forEach((price) => {
        let idValue = +price.parentElement.nextElementSibling.textContent;
        let priceValue = parseFloat(price.textContent);
        let obj = {
            idKey:idValue,
            priceKey:priceValue,
        }
        arr.push(obj);
    })
    arr = arr.sort((a,b) => {
        if(a.priceKey > b.priceKey){
            return 1;
        }
        if(a.priceKey < b.priceKey) {
            return -1;
        }
    })
    arr = arr.reverse();
    allPosts.forEach( async (post,index) => {
        let res = await fetch("http://localhost:3000/posts")
        let json = await res.json();
        json.forEach((subPost) => {
            let id = parseFloat(subPost.id);
            if(id === arr[index].idKey){
                post.innerHTML = `
                <div class="main-content__box-for-img"><img src="img/books/${subPost.img}.png"></div>
                    <div class="main-content__post-preview">
                        <p class="main-content__name">${subPost.nameBook}</p>
                        <p class="main-content__author">${subPost.author}</p>
                        <p class="main-content__date-edition">Год издания:<span>${subPost.yearOfEdition}</span></p>
                        <div class="main-content__price">
                            <p>${subPost.price}</p>
                            <button class="button">В корзину</button>
                        </div>
                        <span id="idPost">${subPost.id}</span>
                    </div>
                `
            }
        })
        postHoverEffect();
        addItemsBasket();
    })
}

let sortByDefault = async () => {
    let allPosts = document.querySelectorAll(".main-content__post");
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    allPosts.forEach((post,index) => {
        post.innerHTML = `
        <div class="main-content__box-for-img"><img src="img/books/${data[index].img}.png"></div>
            <div class="main-content__post-preview">
                <p class="main-content__name">${data[index].nameBook}</p>
                <p class="main-content__author">${data[index].author}</p>
                <p class="main-content__date-edition">Год издания:<span>${data[index].yearOfEdition}</span></p>
                <div class="main-content__price">
                            <p>${data[index].price}</p>
                            <button class="button">В корзину</button>
                        </div>
                <span id="idPost">${data[index].id}</span>
            </div>
        `
    })
    postHoverEffect();
    addItemsBasket();
}

let sortByYearOfEdition = () => {
    let allPosts = document.querySelectorAll(".main-content__post");
    let allDatesPublishing = document.querySelectorAll(".main-content__allposts .main-content__post-preview .main-content__date-edition span");
    let arr = [];
    allDatesPublishing.forEach((year) => {
        let idValue = +year.parentElement.parentElement.lastElementChild.textContent;
        let yearValue = parseFloat(year.textContent);
        let obj = {
            idKey:idValue,
            yearKey:yearValue,
        }
        arr.push(obj);
    })
    arr = arr.sort((a,b) => {
        if(a.yearKey > b.yearKey){
            return 1;
        }
        if(a.yearKey < b.yearKey) {
            return -1;
        }
    })
    allPosts.forEach( async (post,index) => {
        let res = await fetch("http://localhost:3000/posts")
        let json = await res.json();
        json.forEach((subPost) => {
            let id = parseFloat(subPost.id);
            if(id === arr[index].idKey){
                post.innerHTML = `
                <div class="main-content__box-for-img"><img src="img/books/${subPost.img}.png"></div>
                    <div class="main-content__post-preview">
                        <p class="main-content__name">${subPost.nameBook}</p>
                        <p class="main-content__author">${subPost.author}</p>
                        <p class="main-content__date-edition">Год издания:<span>${subPost.yearOfEdition}</span></p>
                        <div class="main-content__price">
                            <p>${subPost.price}</p>
                            <button class="button">В корзину</button>
                        </div>
                        <span id="idPost">${subPost.id}</span>
                    </div>
                `
            }
        })
        postHoverEffect();
        addItemsBasket();
    })
}
let sort = () => {
    let sortBtn = document.getElementById("select");
    if(sortBtn){
        sortBtn.addEventListener("input",() => {
            if(sortBtn.value === "cheap"){
                sortByCheapPrices();
            }
            if(sortBtn.value === "expensive"){
                sortByExpensivePrices();
            }
            if(sortBtn.value === "default"){
                sortByDefault();
            }
            if(sortBtn.value === "years"){
                sortByYearOfEdition();
            }
        })
    }
}