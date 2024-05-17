// Car.prototype.product = 'xiaomi'

// function Car() {
//   this.name = 'su7'
// }

// let car = new Car()

// car.name = '保时捷'
// car.product = 'huawei'

// car.nickname = '小红'
// Car.prototype.nickname = '小红'

// delete Car.prototype.product

// console.log(car.product);


function Bus() { }

Car.prototype = {
  constructor: Bus
}
function Car() {

}

let car = new Car()
console.log(car.constructor);//记录该对象是由谁创建的