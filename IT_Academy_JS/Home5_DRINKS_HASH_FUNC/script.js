function HashStorageFunc(){
    let obj ={
    }
    this.arr = [];
    this.addValue = function(key,value){
        obj[key] = value;
    }
    this.getValue = function(key){
        if(obj[key]){
            return obj[key];
        }else{ 
            return "Такого напитка в хранилище нет!";
        }
    }
    this.deleteValue = function(key){
        if(obj[key]){
            delete obj[key];
            return true;
        }else if(!obj[key]){
            return false;
        }
    }
    this.getKeys = function(){
        this.arr = [];
        for(key in obj){
            this.arr.push(key);
        }
        return this.arr;
    }
}
let drinkStorage = new HashStorageFunc();
function getKey(){
    let key = prompt("Укажите название напитка");
    return key;
}
function getValue(){
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


