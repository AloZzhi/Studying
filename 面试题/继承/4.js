let parent = {
  name: 'JiSung',
  age: 12,
  like:[1,2]
}

let child = Object.create(parent);//凭空创建一个新对象，并让这个新对象继承到parent里的属性
let child2 = Object.create(parent);
child2.like.push(3)

console.log(child2.like);