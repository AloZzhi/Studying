let parent = {
  name: 'JiSung',
  age: 22
}

let child = Object.create(parent);
let child2 = Object.create(parent);

child2.like.push(3)

console.log(child2.like);