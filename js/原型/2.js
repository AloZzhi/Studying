

Car.prototype.name = 'su7'
Car.prototype.lang = 5000
Car.prototype.height = 1400


function Car(color, owner) {
  this.color = color
  this.owner = owner
}

let tian = new Car('black', 'tiantian')
let xuan = new Car('red', 'xuanxuan')

console.log(tian.name); // 构造器用来记录这个实例对象是由谁创建的

function Car() {

}
var car = new Car();
console.log(car.constructor); // 构造器用来记录这个实例对象是由谁创建的

