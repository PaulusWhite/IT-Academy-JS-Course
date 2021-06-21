function calc(getNum){
    let arr = [];
    let num1;
    let num2;
    if(getNum > 0){
        if(getNum % 2 === 0){
            num1 = getNum/2;
            num2 = getNum/2;
        }else{
            num1 = getNum/2 - .5;
            num2 = getNum/2 + .5;
        }
    }else{
        if(getNum % 2 === 0){
            num1 = getNum/2;
            num2 = getNum/2;
        }else{
            num1 = getNum/2 + .5;
            num2 = getNum/2 - .5;
        }
    }
    arr.push(num1);
    arr.push(num2);
        return arr;
}
let numFromUser = prompt("Введите число,сумамрную пару которых хотите узнать");
numFromUser = Number(numFromUser);
if(Number.isInteger(numFromUser) === false || numFromUser === 0){
    do{
        numFromUser = prompt("Требуется ввести целое число");
        numFromUser = Number(numFromUser);
    }while(Number.isInteger(numFromUser) === false || numFromUser === 0);
}
alert(calc(numFromUser));
