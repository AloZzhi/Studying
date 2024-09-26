function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (map.get(obj)) return map.get(obj)

  const newObj = Array.isArray(obj) ? [] : {}

  map.set(obj, newObj)

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key], map) : obj[key]
    }
  }

  return newObj
}

const obj = { a: 1, b: 2, c: { d: 3 } }
const arr = [1, 2, 3, [2, { a: 1, b: [2, [3, { c: 3 }]] }]]
const objNull = null
const newObj = deepClone(obj)
const newArr = deepClone(arr)
const newObjNull = deepClone(objNull)
console.log(newObj)
console.log(newArr)
console.log(newObjNull)