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