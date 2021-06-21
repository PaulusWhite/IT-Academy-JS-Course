let mainClock = document.querySelector(".main_clock"); //Гланый блок для часов
let arrowForSeconds = document.querySelector(".boxForSeconds"); //Видимая стрелка для секунд
let arrowForMinutes = document.querySelector(".boxForMinutes"); //Видимая стрелка для минут
let arrowForHours = document.querySelector(".boxForHours"); //Видимая стрелка для часов
function createClock(){
    let rotateForNumClock = 0; //Счётчик свойства rotate для основного блока элемента циферблата
    let rotateForDivForNumber = 0; //Счётчик свойства rotate непосредственно для блока числа
    for(let i = 0;i <12;i++){
        let numClock = document.createElement("div"); //Создал основной блок элемента циферблата
        let divForNumber = document.createElement("div"); //Создал блок непосредственно для числа
        divForNumber.style.cssText = `;transform:translate(-50%,0)rotate(${rotateForDivForNumber}deg);`;
        divForNumber.textContent = i;
        numClock.style.cssText = `transform:rotate(${rotateForNumClock}deg);`;
        mainClock.appendChild(numClock).append(divForNumber);
        rotateForNumClock+=30;
        rotateForDivForNumber-=30;
    }
}
createClock();
let countClockForSec = -90;
let countClockForMinutes = -90;
let countClockForHours = -90;
setInterval(function(){
    arrowForSeconds.style.cssText = `transform: translate(-50%, -50%) rotate(${countClockForSec+6}deg);`;
    countClockForSec+=6;
},1000);
setInterval(function(){
    arrowForMinutes.style.cssText = `transform: translate(-50%, -50%) rotate(${countClockForMinutes+6}deg);`;
    countClockForMinutes+=6;
},1000*60);
setInterval(function(){
    arrowForHours.style.cssText = `transform: translate(-50%, -50%) rotate(${countClockForHours+1}deg);`;
    countClockForHours+=6;
},1000*3600)

