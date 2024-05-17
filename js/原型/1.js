
var obj = {}
var arr = []
var date = new Date()//得到日期格式


//Person.prototype 函数的原型 {} 祖先

Person.prototype.lastName = 'zhu'
Person.prototype.say = function () {
    console.log('hello');
}
function Person(a, b) {
    this.name = 'tao'
}

let p1 = new Person() //隐式具有 lastName say

p1.say()

Car.prototype.name = 'su7'
Car.prototype.lang = 5000
Car.prototype.height = 1400
function Car(color, owner) {
    // this.name = 'su7'
    // this.lang = 5000
    // this.height = 1400
    this.color = color
    this.owner = owner
}

let tian = new Car('black', 'tiantian')
console.log(tian);
console.log(tian.name); //隐式具有，也就是继承了

tian.name = 'xiaomi'
console.log(tian.name);
console.log(tian);

