// Parent.prototype.getName = function () {
//   return this.name
// }
// function Parent() {
//   this.name = 'JiSung'
//   this.like = [1, 2, 3]
// }
// function Child() {
//   Parent.call(this)
//   this.type = 'children'
// }
// Child.prototype = new Parent()

// let s1 = new Child()
// console.log(s1.getName());


function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.sayName = function() {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name); // 继承属性
  this.age = age;
}

// 继承方法
Child.prototype = new Parent();
Child.prototype.constructor = Child; // 修正构造函数指针

var child1 = new Child('JiSung', 10);
child1.sayName(); 
console.log(child1.colors); 
