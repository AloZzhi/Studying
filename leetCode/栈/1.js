// map 和 forEach的区别就是map有返回值

// const arr = new Array(4).fill(9)
// // console.log(arr);



// const newArr = arr.map(function (item, index, arr) {
//     console.log(item, index, arr);
//     return item + 1
// });

// console.log(newArr);


const arr = [
    [1, 2, 3, 4, 5],
    [11, 22, 33, 44, 55],
    [10, 20, 30, 40, 50],
    [100, 200, 300, 400, 500],
]

for (let i = 0; i < arr.length; i++) {
    const itemArr = arr[i]
    for (let j = 0; j < itemArr.length; j++) {
        itemArr[j] = String(itemArr[j])
    }
}

console.log(arr);