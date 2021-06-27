//Task 1

let compare = (firstArg,secondArg) =>{
    let [[...keysFirstArg],[...valuesFirstArg]] = [Object.keys(firstArg),Object.values(firstArg)];
    let [[...keysSecondArg],[...valuesSecondArg]] = [Object.keys(secondArg),Object.values(secondArg)];
    keysCompare = keysFirstArg.every(function(elem,index){
        return elem === keysSecondArg[index]
    })
    valuesCompare = valuesFirstArg.every(function(elem,index){
        return elem === valuesSecondArg[index];
    })
    return Boolean(keysCompare && valuesCompare);
}

console.log(compare({
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
    },
    {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
    }))

//Task 2

let transform = (num) =>{
    num = num.toString();
    let arr = [];
    for(let i = 0;i < num.length;i++){
        if(num[i] !== "0"){
            let zeros = "";
            for(let z = 0;z < num.length-1 - i;z++){
                zeros += 0;
            }
            arr.push(num[i]+= zeros)
        }
    }
    let result = arr.join(" + ")
    
    return result;

}
console.log(transform(1312));