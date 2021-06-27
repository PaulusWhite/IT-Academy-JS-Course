
/**Task5 */

var searchList = [
    'Мишка',
    'Осьминожка',
    'Акула',
    'Авокадо',
    'Моль Молли',
    'Альпака',
    'Пингвиненок',
    'Моль',
    'Пачакун',
    'Ленивец'
]
let input = document.querySelector(".container .row input");
let allLi = document.querySelectorAll("#list li");

input.addEventListener("input",function(){
    let arr = searchList.filter(function(elem){
        let current = 0;
        for(let i = 0;i < input.value.length;i++){
            if(input.value[i] === elem[i]){
                current++;
            }
        }
        if(current === input.value.length && current !== 0){
            return elem;
        }
    })
    for(let li of allLi){
        if(arr.length === 0){
            li.style.visibility = "visible"; 
        }else{
            li.style.visibility = "hidden";
        }
        for(let elem of arr){
            if(li.innerHTML === elem){
                li.style.visibility = "visible";
            }
        }
    }
})

