let mainClock = document.querySelector(".main_clock");

function createClock(){
    let top = 60;
    let left = 304;
    for(let i = 1;i <=2;i++){
        let numClock = document.createElement("div");
        numClock.style.cssText = "width:60px;height:60px;border-radius:100%;background-color:green;position:absolute;transform:translate(-50%,-50%)";
        numClock.style.top = top + "px";
        numClock.style.left = left + "px";
        mainClock.append(numClock);
    }
}
createClock()