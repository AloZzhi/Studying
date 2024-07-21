// Parent.prototype.getName = function () {
//   return this.name
// }
// function Parent() {
//   this.name = 'JiSung'
//   this.like = [1, 2, 3]
// }
// function Child() {
//   Parent.call(this)//把Parent里的this完全指向Child里的this
//   this.type = 'children'
// }
// Child.prototype = new Parent()//原型链继承

// let s1 = new Child()

// console.log(s1.getName());


function Person(name) {
  this.name = name;
  this.colors = ['red', 'blue']; // 可能导致问题的共享引用类型
}

function Student(name, grade) {
  Person.call(this, name); // 显示绑定继承属性
  this.grade = grade;
}

var student1 = new Student('Alice', 10);
var student2 = new Student('Bob', 11);

Person.prototype.sayHello = function() {
  console.log('Hello, my name is ' + this.name);
};

student1.sayHello(); // TypeError: student1.sayHello is not a function