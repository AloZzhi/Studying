// //浅拷贝  影子
// let a = {
//   name: '猫猫'
// }
// let h = Object.create(a)//可凭空创建一个对象  -----让新对象继承到原对象  复制体会跟着改变
// h.name //猫猫
// a.name = '副歌'
// console.log(h.name);//副歌          



// let a = {
//   name: '猫猫',
//   like: {
//     n: 'running'
//   }
// }
// let b = {
//   age: 18
// }
// let c = Object.assign(a, b)
// console.log(c, a);//a,c一样的，把b拼到a里

//let c = Object.assign({}, a)

// a.like.n = 'swimming'

// console.log(c);//变swimming了  还是浅拷贝

// //深拷贝 克隆

let arr = [1, 2, 3, { a: 10 }]
let newArr = [].concat(arr)//返回一个新数组  ---将arr中的元素合并到[]中去并返回一个新数组

// arr.splice(1, 1)//(下标，删几位) ----截掉
// arr.slice(1, 3)//左闭右开，包1除3 （下标，截到哪一位/可不写） ---截出来，不影响原数组

// arr[3].a = 100//a:100    还是浅拷贝

console.log(newArr);//不受影响

// console.log(...arr);//解构 1 2 3 {a:10}      浅拷贝

