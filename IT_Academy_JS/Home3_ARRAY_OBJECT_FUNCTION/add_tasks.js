// 1.Создайте функцию, которая возвращает сумму пропущенных чисел из заданного массива.


//sumMissingNumbers([4, 3, 8, 1, 2]) ➞ 18
// 5 + 6 + 7 = 18

//sumMissingNumbers([17, 16, 15, 10, 11, 12]) ➞ 27
// 13 + 14 = 27

//sumMissingNumbers([1, 2, 3, 4, 5]) ➞ 0
// Нет пропущенных номеров (т.е. все числа в [1, 5] присутствуют в списке)

//Числовой диапазон, который следует учитывать при поиске пропущенных чисел в массиве, - это последовательность последовательных чисел между минимальным и максимальным из чисел (включительно).


// function sumMissingNumbers(data){
//   let min = -Infinity;
//   let max = +Infinity;
//   for(let i = 0;i < data.length;i++){
//     if(data[i] > min){
//       min = data[i]
//     }
//     if(data[i] < max){
//       max = data[i];
//     }
//   }
//   let maxNum = min;
//   let minNum = max;
//   let result = 0;
//   for(let i = minNum; i < maxNum; i++){

    

//   }
//   return result;
// }
// let arrFirst = [17, 16, 15, 10, 11, 12];
// console.log(sumMissingNumbers(arrFirst));


// 2. Создайте функцию, которая принимает массив строк и возвращает массив только со строками, в которых есть числа. Если нет строк, содержащих числа, вернуть пустой массив.

/* numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"] 

Строки могут содержать пробелы или символы любого типа.
Попробуйте решить это без регулярного выражения.

*/

function numInStr(data){
  let arr =[]
  for(let i of data){
    if(/\d/.test(i)){
      arr.push(i);
    }
  }
  return arr;
}
let arrSecond =["1a", "a", "2b", "b"];
console.log(numInStr(arrSecond));




/* 
3.Создайте функцию, которая принимает массив объектов даты и возвращает «самую длинную полосу» (т. Е. Количество последовательных дней подряд).



longestStreak([
  {
    "date": "2021-04-18"
  },
  {
    "date": "2021-04-19"
  },
  {
    "date": "2021-04-20"
  },
  {
    "date": "2021-04-26"
  },
  {
    "date": "2021-04-27"
  },
  {
    "date": "2021-04-30"
  }
]) ➞ 3


Пустой массив должен возвращать 0.

*/

function longestStreak(data){
  let result = 0;
  let subArr = [];

  for(let i of data){
    for(key in i){
      subArr.push(eval(i[key]));
    }
  }
  for(let i = 0;i < subArr.length;i++){
    if(subArr[i] == subArr[i+1] + 1){
      result++;
    }
  }

  return result;
}
let arrLast = [
  {
    "date": "2021-04-18"
  },
  {
    "date": "2021-04-19"
  },
  {
    "date": "2021-04-20"
  },
  {
    "date": "2021-04-26"
  },
  {
    "date": "2021-04-27"
  },
  {
    "date": "2021-04-30"
  }
]
console.log(longestStreak(arrLast))
