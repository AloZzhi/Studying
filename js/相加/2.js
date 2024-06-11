// js 闭包完成一个add，可以分步接受参数，一次只接收一个
// add2 = add(2)
// add2(4) = 6

function add(a) {
  //第一个参数a
  return function (b) {
    return a + b;
  }
}
console.log(add(2)(4));


// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return function () {
//     let newSum = 0;
//     for (let j = 0; j < arguments.length; j++) {
//       newSum += arguments[j];
//     }
//     return sum + newSum;
//   }
// }