// function add(a, b) {
//   if (typeof (a) === 'number' && typeof b === 'number') {
//     //如何判断字符类型 typeof()
//     return a + b;
//   }
//   console.log('参数类型不对');
// }
// console.log(add('1', 2));


function isObject() {
  if (typeof (o) === 'object' && o !== null) {
    return true
  }
  return false
}

let res = isObject({ a: 1 })
console.log(res);