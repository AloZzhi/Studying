let person = {
  name: 'John',
};

// 使用 Object.create() 进行浅拷贝
let shallowCopy = Object.create(person);

// 修改浅拷贝对象的属性
person.name = 'Andy';

// 输出原始对象和浅拷贝对象
console.log(shallowCopy.name);//name为Andy