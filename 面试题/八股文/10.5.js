Parent.prototype.say = function () {
    console.log('你好');
}
function Parent() {
    this.name = '朱涛'
    this.age = 50
};
Child.prototype = Object.create(Parent.prototype) // 创建空对象上的隐式原型
Child.prototype.constructor = Child
function Child(name, age) {
    Parent.call(this, age)
    this.name = name
};

const c = new Child('xiao', 18);
// console.log(c.name);
// console.log(c.age);
// c.say()
// 判断该函数是由哪个函数创造的
console.log(c.constructor);




