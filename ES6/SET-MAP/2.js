//WeakSet 的成员只能是对象和 Symbol 值
const ws = new WeakSet()
ws.add(Symbol())
ws.add({})
console.log(ws);
//如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中

