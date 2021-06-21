function calc(num,length){
    let arr = [];
    let numFromArr = 0;
    for(i = 0; arr.length != length; i++){
        numFromArr++;
        if(numFromArr % num === 0){
            arr.push(numFromArr);
        }
    }
        return arr;
}
console.log(calc(7,5));