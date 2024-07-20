function A() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('异步a');
      resolve()
    }, 1000)
  })
}

function B() {
  console.log('同步b');
}

// A().then(B)


function* gen() {
  let a = yield A()
  console.log(a, '---');
  yield B()
}
let g = gen()    // new Generator()

g.next()
// 如果我能控制第二个next的执行是发生在第一个next所带来
// 的异步函数执行完毕后，才调用，我就能执行限执行异步在执行同步
setTimeout(() => {
  g.next()  
}, 2000)




// function* countUpTo(max) {
//   for (let i = 1; i <= max; i++) {
//     yield i;
//   }
// }
// const counter = countUpTo(3);
// // 第一次调用next()，从1开始
// console.log(counter.next()); // { value: 1, done: false }
// // 第二次调用next()，输出2
// console.log(counter.next()); // { value: 2, done: false }
// // 最后一次调用next()，输出3
// console.log(counter.next()); // { value: 3, done: false }
// // 再次调用next()，Generator函数已经结束
// console.log(counter.next()); // { value: undefined, done: true }