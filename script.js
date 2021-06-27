let box1 = document.querySelector(".box1");
// let box2 = document.querySelector(".box2");
// let box3 = document.querySelector(".box3");

// // box1.addEventListener("click",function(event){
// //     alert("Box1");
// // })
// box2.addEventListener("click",function(event){
//     alert("Box2");
// })
// box3.addEventListener("click",function(event){
//     alert("Box3");
//     console.log(event.currentTarget)
// })
// let elem = document.querySelector(".box1");
// console.log(elem.dataset.test)
let btn = document.querySelector("button");

// function func(){
//     window.scrollTo(0,0);
// }
// func();

let arr = [2,2,3,4,5,6,7]
// arr.forEach(function(elem){
//     console.log(elem+4)
// })

// let arrSecond = arr.map(function(elem){
//     return elem+1;
// })
// console.log(arrSecond)

btn.addEventListener("click",function(event){
    event.preventDefault();
    console.log(event)
})