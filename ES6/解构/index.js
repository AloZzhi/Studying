// let arr = ['a', 'b', ['c', 'd']]//二维数组
// // let a = arr[0]
// // let b = arr[1]
// // let c = arr[2]
// // let d = arr[3]
// let [a, b, [c, d]] = arr

// console.log(a, b, c, d);

// let arr = [1, 2, 3, 4, 5]
// let [a, b, ...c] = arr//...c剩余的全部变量
// console.log(c);

// let obj ={
//   a:1,
//   b:2,
//   c:{
//     n:3
//   }
// }

// let {a,b,c:{n}} =obj

// // console.log(a,b,c,c.n);
// let user = {
//   username :'晏总',
//   age:18
// }

let{username:username,age:age} = user
console.log(username,age);

// let b = 2
// let ogj ={
//   a:1,
//   b
// }











let  str = 'Hello'
let [a,b,c,...d] = str //rest
console.log(a,b,c,...d);