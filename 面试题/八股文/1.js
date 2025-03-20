// set map

// let arr = [1, 2, 3, 4, 1, 2]
// // 除重手段
// let set = new Set(arr)
// console.log(set); // {} 特殊的数组，里面的值是唯一的，被{}包裹
// console.log([...set]);

// 字节面试题：除重
// let arr2 = [
//     { id: 1, name: 'ss' },
//     { id: 2, name: 'ls' },
//     { id: 3, name: 'ws' },
//     { id: 1, name: 'ss' }
// ]
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
// let h = 'nihao'  
// obj[h] = 123
// console.log(obj);
let m = new Map()
m.set('a', 1)
m.set(2, 2)
m.set([], 1)
console.log(m);

