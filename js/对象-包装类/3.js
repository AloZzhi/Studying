// // var obj1 = {name: 'longlong', age: 18, sex: 'boy'}
// // var obj2 = {name: 'longlong', age: 18, sex: 'boy'}
// // var obj3 = {name: 'longlong', age: 18, sex: 'boy'}



// // 构造函数
// function People(name, age, sex) {
//   // var this = {
//   //   name: 'xxx',
//   //   age: '',
//   //   sex: ''
//   // }

//   this.name = name
//   this.age = age
//   this.sex = sex

//   // return this
// }

// let p1 = new People('longlong', 18, 'boy')   // 实例对象

// // 构造函数被new时的过程

// console.log(p1);



function Person(name, age) {
    var that = {}
    that.name = name
    that.age = age
    return that
}

let p1 = Person('tao', 18)
let p2 = Person('sheng', 19)

console.log(p1);