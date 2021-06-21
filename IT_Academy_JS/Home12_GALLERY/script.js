let mainDiv = document.querySelector(".container");
mainDiv.addEventListener("click",function(event){
    let prevActiveImg = document.querySelector(".active-image");
    let mainImg = document.querySelector(".container > .photo > img");
    let parent = document.querySelector(".photo")
    let Img = event.target;
    if (Img.tagName === "IMG"){
        if(prevActiveImg){
            prevActiveImg.classList.remove("active-image");
        }
        mainImg.setAttribute("src",Img.src);
        Img.parentElement.classList.add("active-image");
    } if(Img.parentElement === parent){
        Img.parentElement.classList.add("active-image");
        Img.parentElement.classList.remove("active-image");
    }
})

