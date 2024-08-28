const obj = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null
}

const flattenRes = flattenObj(obj)

console.log(flattenRes);

function flattenObj(obj) {
  let res = {}

  const help = (target, oldKey) => {
    for (let key in target) {
      let newKey;   

      if (oldKey) {  // 'b'
        if (Array.isArray(target)) {
          newKey = `${oldKey}[${key}]`  // 'b[0]'
        } else {
          newKey = `${oldKey}.${key}`  // 'd.e'
        }
      } else {
        if (Array.isArray(target)) {
          newKey = `[${key}]`
        } else {
          newKey = key
        }
      }

      
      if (Object.prototype.toString.call(target[key]) === '[object Object]' || Array.isArray(target[key])) {
        help(target[key], newKey)  

      } else if (target[key] !== null && target[key] !== undefined) {
        res[newKey] = target[key]
      }

    }
  }

  help(obj, '')


  return res
}
