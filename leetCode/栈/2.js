const arr = [1, 2]

arr.push(3)
arr.unshift(0)
console.log(arr);
arr.pop()
arr.shift()
console.log(arr);
// 数组中增加元素 第一参数是位置，第二个是要删几个 第三个参数是插入的元素
arr.splice(1, 0, 'hello')
console.log(arr);
arr.splice(1, 1)
console.log(arr);
console.log('--------------------------------------------------------');
const arr1 = [1, 2, 3]
// 栈
const stack = []