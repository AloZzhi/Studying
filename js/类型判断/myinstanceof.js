// //instanceof的底层逻辑
// function myinstanceof(L, R) {
//   while (L !== null) {
//     if (L._proto_ === R.prototype) {
//       return true;
//     }
//     L = L._proto_
//   }
//   return false
// }
// console.log(myinstanceof([1], Array));//ture
// console.log(myinstanceof({}, Array));//false
// console.log(myinstanceof([], Object));//ture




function myInstanceof(L, R) {
  // 获取L的原型
  let proto = L.__proto__;
  // 获取R的prototype对象
  let prototype = R.prototype;
  // 判断对象是否是某个构造函数的实例
  while (proto !== null) {
    if (proto === prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
}


console.log(myInstanceof([1], Array));//ture
console.log(myInstanceof({}, Array));//false
console.log(myInstanceof([], Object));//ture