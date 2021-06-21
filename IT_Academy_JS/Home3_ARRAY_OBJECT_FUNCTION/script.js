// 1.Напишите функцию, которая возвращает сумму элементов больше 5 в данном массиве.
// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77
// sumFive([1, 2, 3, 4]) ➞ 0
// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252
// Используйте для суммы все элементы больше 5, но не элементы которые равны 5 и меньше.

// function sumFive(data){
//     let result = 0;
//     for(let i of data){
//         if(i > 5){
//             result += i;
//         }
//     }
//     return result;
// }
// let arrForFirst = [1,5,20,30,4,9,18];
// console.log(sumFive(arrForFirst));



// 2.Напишите функцию, преобразующую объект в массив ключей и значений.
// objectToArray({
// D: 1,
// B: 2,
// C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
// likes: 2,
// dislikes: 3,
// followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

// function objectToArray(data){
//     let arr = [];
//     for(key in data){
//         arr.push([key,data[key]]);
//     }
//     return arr;
// }
// let obj = {
//     D:1,
//     B:2,
//     C:3,
//     likes:2,
//     dislikes:3,
//     followers:10,
// }
// console.log(objectToArray(obj));



// 3.Массивы могут включать в себя разные типы данных. Ваша задача  - просуммировать все числовые элементы в данном массиве. 
// Создайте функцию, которая принимает массив и возвращает сумму всех чисел в массиве.
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3
// numbersSum([true, false, "123", "75"]) ➞ 0
// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15

// function numberSum(data){
//     let result = 0;
//     for(let i of data){
//         if(typeof(i) === "number"){
//             result+= i;
//         }
//     }
//     return result;
// }
// let arrForThird = [1, 2, "13", "4", "645"];
// console.log(numberSum(arrForThird));



// 4. Создайте функцию, которая принимает объект и возвращает ключи и значения в виде отдельных массивов.
// Возвращает ключи, отсортированные в алфавитном порядке, и их соответствующие значения в том же порядке.
// keysAndValues({ a: 1, b: 2, c: 3 })➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })➞ [["key1", "key2", "key3"], [true, false, undefined]]

function keysAndValues(data){
    let arr = [ [] ,[] ];
    for(key in data){
        arr[0].push(key);
        arr[1].push(data[key]);
    }
    arr[0] = arr[0].sort()
    arr[1] = arr[1].sort()
    return arr;
}
let objForLast = {
    c: "Google",
    b: "Microsoft",
    a: "Apple", 
}
console.log(keysAndValues(objForLast));