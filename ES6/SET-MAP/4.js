global.gc() //强制收垃圾

console.log(process.memoryUsage());

let obj = { name: '叽桑', age: new Array(5 * 1024 * 1024) }
let ws = new WeakSet()
ws.add(obj)

obj = null//可以回收了

global.gc()
console.log(process.memoryUsage());