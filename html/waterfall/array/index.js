var arr = ['a', 1, 'b', 'hello'];
// console.log(arr.indexOf(1, 0));
// arr.push(true)
// // 删除头部
// arr.shift()

// // 删除数组中任意位置元素splice 从哪里开始删，删几个
// arr.splice(1, 2)

// 数组任意位置增加值 删除长度为0/null
// arr.splice(3, 0, true)
// arr.splice(3, null, true)



// arr.forEach(function (item, i, arr) {
//     arr[i] += 2;
// })

// 从右往左走找，返回下标，没有返回-1
var index = arr.lastIndexOf('b');
// 找，返回有或者没有，不返回下标
var has = arr.includes('b');
console.log(has);
console.log(index);

console.log(arr);