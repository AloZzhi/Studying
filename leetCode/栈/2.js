const arr = [1, 2]

arr.push(3)//尾部增加（会直接修改原来数组）
arr.unshift(0)//头部增加
console.log(arr);
arr.pop()//移除尾部
arr.shift()//移除头部
console.log(arr);
// 数组中增加元素 第一参数是位置，第二个是要删几个 第三个参数是插入的元素
arr.splice(1, 0, 'hello')
console.log(arr);
arr.splice(1, 1)
console.log(arr);
// console.log('--------------------------------------------------------');
// const arr1 = [1, 2, 3]
// // 栈
// const stack = []