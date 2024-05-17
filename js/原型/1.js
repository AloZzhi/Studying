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