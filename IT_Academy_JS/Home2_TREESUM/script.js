function treeSum (data){
    let result = 0;
    data = data.flat(Infinity);
    for(let i of data){
        result += i;
    }
    return result;
}
let arr = [ 5, 7,
[ 4, [2], 8 , [1,3], 2 ],
[ 9 , [] ],
1, 8
]

console.log(treeSum(arr));