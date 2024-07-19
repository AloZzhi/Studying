const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1500, 'foo');
});
Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // 输出: [3, 42, 'foo']
  })
  .catch(reason => {
    console.log(reason); // 如果有任何一个Promise被拒绝，这里会输出拒绝的原因
  });

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(reject, 50, 'Failed to load resource 1');
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'Loaded resource 2');
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 20, 'Failed to load resource 3');
// });

// Promise.any([promise1, promise2, promise3])
//   .then(value => {
//     console.log(value); // 输出: 'Loaded resource 2'
//   })
//   .catch(error => {
//     console.log(error); // 如果所有 Promise 都被拒绝，这里会输出 AggregateError
//   });