function myNew(fn, ...args) {
  if (typeof fn !== 'function') {
    return new Error('请输入一个函数')
  }
  let obj = {}
  obj = Object.create(fn.prototype)
  const result = fn.apply(obj, args)
  const flag = result && (typeof result === 'object' || typeof result === 'function')
  return flag ? result : obj
}


function myNew(fn, ...args) {
  if (typeof fn !== 'fucntion') {
    return new Error('请输入一个函数')
  }
  let obj = {}
  obj = Object.create(fn.prototype)
  const res = fn.apply(obj, args)
  const flag = res && (typeof res === 'object' || typeof res === 'function')
  return flag ? res : obj
}