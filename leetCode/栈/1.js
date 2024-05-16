// map 和 forEach的区别就是map有返回值

const arr = new Array(8)
// console.log(arr);

arr.forEach(function (item, index, arr) {

    console.log(item, index, arr);
});