let s = '123' //String
let n = 123 //number
let f = true //boolean
let u = undefined //undefined
let nu = null //null
let sy = Symbol(123) // Symbol创建一个独一无二的值
let big = 1234n //Bigint 大整型 超过2的53次方

let obj = {}
let arr = []
let fn = function () { }//函数体也是一个对象
let date = new Date();//特殊类型,特殊对象

//typerof()将输入的转为二进制的值 null被转为二进制时全都是0 而前三位是0的时候会被判为object
//准
// console.log(typeof (s));//string
// console.log(typeof (n));//number
// console.log(typeof (f));//boolean
// console.log(typeof (u));//undefined
// console.log(typeof (sy));//symbol
// console.log(typeof (big));//bigint
// //另类
// console.log(typeof (nu));//object

console.log(typeof (obj));//object
console.log(typeof (arr));//object
console.log(typeof (date));//object

console.log(typeof (fn));//function