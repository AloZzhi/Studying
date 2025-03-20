Parent.prototype.say = function () {
    console.log('你好');

}
function Parent() {
    this.name = '朱涛'
    this.age = 50
};
Child.prototype = new Parent();
function Child() {
    this.name = '肖'
};

const c = new Child();
console.log(c.name);
console.log(c.age);
c.say()



