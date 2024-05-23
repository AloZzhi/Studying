// // let obj = {
// //   a: 1,
// //   b: 2,
// //   c: 3
// // }

// // for (let key in obj) {
// //   console.log(key);//拿到的是键名
// //   console.log(obj[key]);//得到值
// // }
// const a = {
//   name: '贝贝',
//   age: 8,
//   address: {
//     city: '北京',
//   }
// };

// // 使用 Object.assign() 进行浅拷贝
// let c = Object.assign({}, a);

// // 输出目标对象
// console.log(c);

// const arr = [1, 2, 3, 4, 5];

// 使用数组解构进行浅拷贝
// const copiedArray = [...originalArray];//'...'加数组名表示解构该数组，每个元素都独立开

// console.log(copiedArray); // 输出 [1, 2, 3, 4, 5]

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.toReversed();
console.log(arr2);// 输出: [5, 4, 3, 2, 1] 
let arr3 = arr2.reverse()
console.log(arr3);//输出：[ 1, 2, 3, 4, 5 ]