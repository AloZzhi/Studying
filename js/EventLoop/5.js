console.log('script start');//已执行
async function async1() {
  await async2()
  console.log('async1 end');//1.你第一个进的微任务队列，你先执行，输出'async1 end'
}
async function async2() {//已执行
  console.log('async2 end');
}
async1()//有人进微任务队列喽
setTimeout(function () {
  console.log('setTimeout');//4.宏任务就你一个，触发打印'setTimeout'
}, 0)
new Promise(function (resolve, reject) {//已执行
  console.log('promise');
  resolve()
})
  .then(() => {
    console.log('then1');//2.打印'then1'
  })
  .then(() => {
    console.log('then2');//3.打印'then2'
  })
console.log('script end');//已执行

// console.log('script start');//第一个执行
// async function async1() {//跳过
//   await async2()
//   console.log('async1 end');
// }
// async function async2() {//跳过
//   console.log('async2 end');
// }
// async1()//执行 里面有async2，等async2执行出'async2 end'，
// //由于 await 会将后续代码阻塞进微任务队列，
// //所以 console.log('async1 end')会进入微任务队列而不是直接执行

// setTimeout(function () {
//   console.log('setTimeout');
// }, 0)//进宏任务队列

// new Promise(function (resolve, reject) {
//   console.log('promise');//输出'promise'
//   resolve()
// })
//   .then(() => {
//     console.log('then1');//进微任务队列
//   })
//   .then(() => {
//     console.log('then2');//进微任务队列
//   })
// console.log('script end');//输出'script end'