// var  arr1 = ['a','b']
// var  arr2 = ['c']
// var arr3 = ['d','e']
// console.log([...arr1,...arr2,...arr3]);



// const arr1 = ['a','b',['J','S']];
// const arr2 = ['c'];
// const arr3 = [...arr1,...arr2]
// arr1[2][0] = 'T'
// console.log(arr3);



// const [first,second,...rest] = [1,2,3,4,5]

// console.log(first);
// console.log(second);
// console.log(rest);



// const [...butLast,last]=[1,2,3,4,5]

// const [first,...middle,last] = [1,2,3,4,5]


// console.log([...'hello']);

// let arrayLike={
//   '0':'a',
//   '1':'b',
//   '2':'c',
//   length:3
// }

// let arr2 = Array.from(arrayLike)

// console.log(arr2);


// let arr = Array.from([1,2,3],(x)=>x+1000)
// console.log(arr);

// let a =Array.of('j','u','e','j','i','n')
// console.log( a);



// let arr2 = [1, 2, 3, 4, 5];

// // 将索引为1到3的元素复制到索引为2的位置
// arr2.copyWithin(2, 1, 3);

// console.log(arr2);


// [1, 4, 3, 20, 66, 32].find(function (value, index, arr) {
//   return value > 9
// })


function f(v) {
  return v > this.age
}
let person = { name: 'John', age: 20 }
[11,21,31,41].find(f,person)

