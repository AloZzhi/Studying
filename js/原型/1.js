
// var obj = {}
// var arr = []
// var date = new Date()//得到日期格式


// //Person.prototype 函数的原型 {} 祖先

// Person.prototype.lastName = 'zhu'
// Person.prototype.say = function () {
//     console.log('hello');
// }
// function Person(a, b) {
//     this.name = 'tao'
// }

// let p1 = new Person() //隐式具有 lastName say

// // p1.say()

Car.prototype.name = 'su7'
Car.prototype.long = 5000
Car.prototype.height = 1400
function Car(color, owner) {
    // this.name = 'su7'
    // this.long = 5000
    // this.height = 1400
    this.color = color
    this.owner = owner
    this.name = 'su9'
}

let tian = new Car('black', 'tiantian')

// console.log(tian.name); //隐式具有，也就是继承了

// tian.name = 'xiaomi'
// console.log(tian);



// Car.prototype.name2 = 'su77'
// console.log(tian.name2);

// tian.name2 = '苏7'
// console.log(tian.name2);//可以看出如果附加上了一个同名的属性name2，那么原型里的name2我们就访问不到了


delete tian.long
console.log(tian.long)//5000

delete Car.prototype.long
console.log(tian.long)//undefined