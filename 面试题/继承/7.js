class Parent {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
    this.age = 20;
  }
  getAge() {//子类扩展的方法
    return this.age
  }
}

let c = new Child('JiSung');
console.log(c.getName());
console.log(c.getAge()); 