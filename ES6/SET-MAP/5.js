// const n = 123
// const el = document.getElementById


// const obj = {
//   a: 1,  //a是字符串类型
//   [n]: 2,
//   [el]: 2
// }


const m = new Map()
const o = { age: 18 }
m.set(o, [1, 2, 3])
console.log(m.get(o));//任意对象做key

// m.delete(o)
console.log(m.has(o));
console.log(m.size);
console.log(m.values());
console.log(m.entries());

