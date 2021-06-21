let screen = document.body;
let images = document.querySelectorAll("img");
let startZone = document.getElementById("startZone");
let offsetX;
let offsetY;

screen.addEventListener("dragover",function(event){
    event.preventDefault();
})
for(let img of images){
    img.addEventListener("mousedown",function(){
        img.style.cursor = "pointer";
    })
    img.addEventListener("mouseup",function(){
        img.style.cursor = "default";
    })
    img.addEventListener("mousemove",function(){
        img.style.transform = "scale(1.2)";
    })
    img.addEventListener("mouseout",function(){
        img.style.transform = "scale(1)";
    })
    img.addEventListener("dragstart",function(event){
        event.dataTransfer.setData("id",event.target.id);
        offsetX = event.offsetX;
        offsetY = event.offsetY;
    })
    img.addEventListener("dragend",function(event){
        img.style.position = "absolute";
        img.style.top = event.pageY - offsetY + "px";
        img.style.left = event.pageX - offsetX + "px";
    })
}

screen.addEventListener("drop",function(event){
    for(let img of images){
        let itemId = event.dataTransfer.getData("id");
        event.target.append(document.getElementById(itemId));
    }
})