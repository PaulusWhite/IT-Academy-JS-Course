//
//Task1. Напишите функцию, которая имеет два параметра: товары и стоимость. Верните все товары, которые превышают стоимость.
/* 
expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
➞ { "a": 3000, "c": 1050 }

expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
➞ { "Gucci Fur": 24600 }

expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)
➞ {} */

const expensiveOrders = (goods,price) => {
  let result = []
  for(let key in goods){
    if(goods[key] > price){
      result.push({[key]:goods[key]})
    }
  }
  return result;
}
console.log(expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000));






//Task2. Напишите функцию, которая принимает закодированную строку и возвращает объект в соответствии со следующим примером:

/* parseCode("John000Doe000123") ➞ {
    firstName: "John",
    lastName: "Doe",
    id: "123"
  }
  
  parseCode("michael0smith004331") ➞ {
    firstName: "michael",
    lastName: "smith",
    id: "4331"
  }
  
  parseCode("Thomas00LEE0000043") ➞ {
    firstName: "Thomas",
    lastName: "LEE",
    id: "43"
  } */

  

//   Строка всегда будет в одном формате: имя, фамилия и идентификатор с нулями между ними.
//   Номера id не будут содержать нулей.
//   Попробуйте решить эту задачу без регулярных выражений.

const parseCode = (code) => {
  let index = []; // массив индексов нулей
  let arrName = []; // массив для будущей склейки имени
  let arrLastName = []; // массив для будущей склейки фамилии
  let arrId = []; // массив для будущей склейки id
  for(let i = 0; i < code.length;i++){ // узнаю индксы нулей и кидаю их в массив index
    if(code[i] === "0"){
      index.push(i);
    }
  }
  for(let i = 0;i < index[0];i++){ // кидаю в массив имени буквы до первого нуля
    arrName.push(code[i]);
  }
  for(let i = index[0];i < index[index.length-1];i++){ // кидаю в массив фамилии буквы ,которые нахожу среди нулей
    if(code[i] !== "0"){
      arrLastName.push(code[i]);
    }
  }
  for(let i = index[index.length-1];i < code.length;i++){ // кидаю в массив id буквы ,которые идут после всех нулей
    if(code[i] !== "0"){
      arrId.push(code[i]);
    }
  }
  let obj = { // все преобразую в результат
    firstName:arrName.join(""),
    lastName:arrLastName.join(""),
    id:arrId.join(""),
  }
  return obj;
}
console.log(parseCode("michael0smith004331"));