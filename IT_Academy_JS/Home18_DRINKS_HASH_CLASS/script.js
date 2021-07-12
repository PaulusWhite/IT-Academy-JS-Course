class HashStorageClass {
    constructor(){
        this.obj = {
        }
    }
    addValue(key,value){
        return this.obj[key] = value;
    }

    getValue(key){
        if(this.obj[key]){
            return this.obj[key];
        }else{
            return "Такого напитка в хранилище нет!";
        }
    }
    deleteValue(key){
        if(this.obj[key]){
            delete this.obj[key];
            return true;
        }else if(!this.obj[key]){
            return false;
        }
    }
    getKeys(){
        this.arr = [];
        for(let key in this.obj){
            this.arr.push(key);
        }
        return this.arr;
    }
}
let drinkStorage = new HashStorageClass();
let getKey = () => {
    let key = prompt("Укажите название напитка");
    return key;
}
let getValue = () => {
    let isAlco = confirm("Ваш напиток содержит алкоголь?");
    if(isAlco === true){
        isAlco = "Напиток содержит алкоголь";
    }else{
        isAlco = "Напиток безалкогольный";
    }
    let recipe = prompt("Укажите рецептуру приготовления вашего напитка");
    let value = "Алкоголь: " + isAlco + " \nРецептура приготовления: " + recipe;
    return value;
}

let addVl = document.getElementById("addValue");
let getVl = document.getElementById("getValue");
let deleteVl = document.getElementById("deleteValue");
let allVl = document.getElementById("getKeys");

addVl.addEventListener("click",() => {
    drinkStorage.addValue(getKey(),getValue());
})
getVl.addEventListener("click",() => {
    alert(drinkStorage.getValue(getKey()));
})
deleteVl.addEventListener("click",() => {
    alert(drinkStorage.deleteValue(getKey()));
})
allVl.addEventListener("click",() => {
    alert(drinkStorage.getKeys());
})