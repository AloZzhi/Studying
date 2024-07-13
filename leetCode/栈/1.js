// map 和 forEach的区别就是map有返回值

const arr = new Array(4).fill(9)
// console.log(arr);



const newArr = arr.map(function (item, index, arr) {
    console.log(item, index, arr);
    return item + 1
});

console.log(newArr);