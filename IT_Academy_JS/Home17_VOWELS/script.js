const vowels = (str) => {
str = str.split("");
let lowRuVowels = ["ё","у","е","ы","а","о","э","я","и","ю"];
let upRuVowels = lowRuVowels.map((elem) => {
    return elem.toUpperCase();
});
let allRuVowels = [lowRuVowels,upRuVowels].reduce((firstArr,secondArr) => {
    return firstArr.concat(secondArr);
});
let current = 0;
    str.forEach((elem) => {
        allRuVowels.filter((word) => {
            if(word === elem){
                current++;
            }
        });
    });
    return current;
}
console.log(vowels("Это моя функция"));
