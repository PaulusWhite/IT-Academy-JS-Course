let inputSearch = document.querySelector("#search");
let loup = document.querySelector(".fa-search");
let allPosts = document.querySelector(".main-content__allposts");
let mainDivForContent = document.querySelector(".main-content");

let hideSelectSort = () => {
    let selectSort = document.querySelector("#select");
    selectSort.disabled = "true";
}

let removeError = () => {
    if(mainDivForContent.firstElementChild.classList.contains("wrong-search-error")){
        mainDivForContent.firstElementChild.remove();
    }
}
let resetFilters = () => {
    let resetBtn = document.querySelector("#resetFilters");
    let posts = document.querySelectorAll(".main-content__post");
    let allPosts = document.querySelector(".main-content__allposts");
    let renderBtn = document.querySelector("#render");
    let selectSort = document.querySelector("#select");
    resetBtn.addEventListener("click", () => {
        removeError();
        selectSort.removeAttribute("disabled");
        let current = 0;
        sortByDefault();
        posts.forEach((post, index) => {
            if(index < 15){
                post.style.display = "flex";
                current++;
            }
        })
        if(current !== allPosts.children.length){
            renderBtn.style.display = "inline-block";
        }
    })
}
let changeCursorLoup = () => {
    inputSearch.addEventListener("input", () => {
        if(inputSearch.value !== ""){
            loup.style.cursor = "pointer";
        }else{
            loup.style.cursor = "text";
        } 
    })
}

let showAllPosts = () => {
    let posts = document.querySelectorAll(".main-content__post");
    posts.forEach((post) => {
        post.style.display = "flex";
    })
}
let renderErrorWrongSearch = () => {
    let wrongSearchError = document.createElement("div");
    wrongSearchError.innerHTML = `
    <p>По запросу "${inputSearch.value}" ничего не найдено</p>
    <p>Пожалуйста,убедитесь,что запрос введён корректно или переформулируйте его</p>
    `
    wrongSearchError.classList.add("wrong-search-error");
    mainDivForContent.prepend(wrongSearchError);
}

let currentNonePosts = 0;

let searchByNameAuthor = () => {
    let allAuthors = document.querySelectorAll(".main-content__post-preview .main-content__author");
    allAuthors.forEach((author) => {
        let arrSearch = inputSearch.value.split(" ");
        let current = 0;
        let arrAuthor = author.textContent.split(" ");
        let arrAuthorLowerWords = arrAuthor.map((wordName) => {
            return wordName.toLowerCase();
        })
        for(let i = 0; i< arrAuthorLowerWords.length; i++){
            for(let j = i+1; j < arrAuthorLowerWords.length; j++){
                if(arrAuthorLowerWords[i] === arrAuthorLowerWords[j]){
                     delete arrAuthorLowerWords[arrAuthorLowerWords.indexOf(arrAuthorLowerWords[j])]
                }
            }
        }
        arrAuthorLowerWords.forEach((wordName) => {
            wordName = wordName.toLowerCase();
            arrSearch.forEach((word) => {
                word = word.toLowerCase();
                if(word === wordName){
                    current++;
                }
            })
        })
        if(current !== arrSearch.length){
            author.parentElement.parentElement.style.display = "none";
            currentNonePosts++;
        }else{
            author.parentElement.parentElement.style.display = "flex"
        }
    })
    renderBtn.style.display = "none"; // from getLocalData
}

let searchByNameBook = () => {
    let allNamesBook = document.querySelectorAll(".main-content__post-preview .main-content__name");
    allNamesBook.forEach((book) => {
        let arrSearch = inputSearch.value.split(" ");
        let current = 0;
        let arrBook = book.textContent.split(" ");
        let arrBookLowerWords = arrBook.map((wordName) => {
            return wordName.toLowerCase();
        })
        for(let i = 0; i< arrBookLowerWords.length; i++){
            for(let j = i+1; j < arrBookLowerWords.length; j++){
                if(arrBookLowerWords[i] === arrBookLowerWords[j]){
                        delete arrBookLowerWords[arrBookLowerWords.indexOf(arrBookLowerWords[j])]
                }
            }
        }
        arrBookLowerWords.forEach((wordName) => {
                wordName = wordName.toLowerCase();
                arrSearch.forEach((word) => {
                    word = word.toLowerCase();
                    if(word === wordName){
                        current++;
                     }
                })
            })
        if(current !== arrSearch.length){
            book.parentElement.parentElement.style.display = "none";
            currentNonePosts++;
        }else{
            book.parentElement.parentElement.style.display = "flex"
        }
    })
        renderBtn.style.display = "none"; // from getLocalData
}

let eventSearch = () => {
    if(inputSearch.value !==""){
        if(mainDivForContent.firstElementChild.classList.contains("wrong-search-error")){
            mainDivForContent.firstElementChild.remove();
        }
        showAllPosts();
        searchByNameAuthor();
        if(currentNonePosts === allPosts.children.length){
            currentNonePosts = 0;
            searchByNameBook();
            if(currentNonePosts === allPosts.children.length){
                currentNonePosts = 0;
                renderErrorWrongSearch();
            }else{
                currentNonePosts = 0;
            }
        }else{
            currentNonePosts = 0;
        }
    }
    inputSearch.value = "";
    loup.style.cursor = "text";
}

let search = () => {
    changeCursorLoup();
    loup.addEventListener("click", () => {
        eventSearch();
        hideSelectSort();
    })
}

inputSearch.addEventListener("focus", () => {
    window.addEventListener("keydown", (event) => {
        if(event.code === "Enter"){
            eventSearch();
            hideSelectSort();
        }
    })
})