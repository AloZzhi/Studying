// 组合继承
Parent.prototype.say = function () {
    console.log('你好');

}
function Parent() {
    this.age = age
};
Child.prototype = new Parent();
function Child(name, age) {
    Parent.call(this, age)
    this.name = name
};

const c = new Child('xiao', 18);
console.log(c.name);
console.log(c.age);
c.say()



