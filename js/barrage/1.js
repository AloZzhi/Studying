class MyClass {
  #privateCount
  constructor(initialCount) {
    this.count = initialCount; // 公有属性
    this.#privateCount = 0;    // 私有属性
  }

  // 类方法（在原型上）
  publicMethod() {
    console.log('Called public method');
  }

  // 静态方法
  static staticMethod() {
    console.log('Called static method');
  }

  // get
  get count() {
    return this.#privateCount;
  }

  // set
  set count(value) {
    if (value >= 0) {
      this.#privateCount = value;
    } else {
      console.log('Value must be non-negative.');
    }
  }
}

// 创建实例
const myInstance = new MyClass(10);

// 访问公有方法
myInstance.publicMethod();

// 访问静态方法
MyClass.staticMethod();

// 使用 get 和 set
console.log(myInstance.count); // 输出私有属性的值
myInstance.count = 20;         // 修改私有属性的值
console.log(myInstance.count); // 输出新的私有属性的值