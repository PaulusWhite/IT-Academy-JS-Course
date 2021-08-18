let logo = document.querySelector("header .logo");
let footerForm = document.querySelector("footer form")
let joinBtnFooterForm = document.querySelector("footer form .input-and-btn button");
let inputFooterEmail = document.querySelector("footer form #email");
let header = document.querySelector("header");
let crumbMain = document.querySelector("#crumb-main");

let runIndex = () => {
    logo.addEventListener("click", () => {
        document.location.href ="index.html"
    })
}
runIndex();


let checkFooterForm = () => {
    footerForm.addEventListener("submit",(event) => {
        if(inputFooterEmail.value === ""){
            event.preventDefault();
            inputFooterEmail.classList.add("nodispatch");
            joinBtnFooterForm.addEventListener("mouseup", () => {
                inputFooterEmail.classList.remove("nodispatch");
            })
        }
    })
}

let changeBtnFooterForm = () => {
    joinBtnFooterForm.addEventListener("mouseover", () => {
        joinBtnFooterForm.style.cssText = "background:#8a491c;border-color:#8a491c;transition: .4s;"
    })
    joinBtnFooterForm.addEventListener("mouseout", () => {
        joinBtnFooterForm.style.cssText = "background:black;border-color:white;transition:.3s;"
    })
}

let changeInputFooterForm = () => {
    inputFooterEmail.addEventListener("input", () => {
        inputFooterEmail.style.cssText = "border-color:white;border-radius:2px;box-shadow:0 0 10px 3px rgba(255, 255, 255, 1);transition:.1s"
    })
    inputFooterEmail.addEventListener("blur", () => {
        inputFooterEmail.style.cssText = "border-color:#e50000;transition:.2s;"
    })
}

let changeHeaderScroll = () => {
    if(window.pageYOffset === 0){
        header.style.cssText = "top:0;transition:0s;"
    }
    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;
        if(currentScroll > 200){
                header.style.cssText = `top:-${header.offsetHeight}px;`
        }
        else{
            header.style.cssText = "top:0;"
        }
    })
}

let postHoverEffect = () => {
    let posts = document.querySelectorAll(".main-content__post");
    let btnsBuy = document.querySelectorAll(".main-content__price button");
    posts.forEach((post) => {
        post.addEventListener("mouseover", () => {
            post.style.boxShadow = "0 0 10px 5px rgb(173, 173, 173)";
        })
        post.addEventListener("mouseout", () => {
            post.style.boxShadow = "none";
        })
    })
    btnsBuy.forEach((btn) => {
        btn.addEventListener("mouseover", () => {
            if(!btn.classList.contains("basket")){
                btn.style.cssText = "background:#8a491c;border-color:#8a491c;"
            }
        })
        btn.addEventListener("mouseout", () => {
            btn.style.cssText = "background:#black;border-color:white;"
        })
    })
}

let runPage = () => {
    let posts = document.querySelectorAll(".main-content__post");
    posts.forEach((post) => {
        post.addEventListener("click", (event) => {
            if(event.target.tagName !== "BUTTON"){
                let id = post.lastElementChild.lastElementChild.textContent;
                localStorage.setItem("bookId", id);
                document.location.href = "productPage.html";
            }
        })
    })
}

checkFooterForm();
changeBtnFooterForm();
changeInputFooterForm();
changeHeaderScroll();



