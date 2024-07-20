// class MyPromise {
//   constructor(executor) {
//     this.state = 'pending'
//     this.value = undefined   //临时保存resolve
//     this.reason = undefined //reject的参数
//     this.onFulfilledCallbacks = [] //装then的回调
//     this.onRejectedCallbacks = [] //装catch中的回调

//     const resolve = (value) => {
//       if (this.state == 'pending') {
//         this.state = 'fufilled'
//         this.value = value
//         this.onFulfilledCallbacks.forEach(cb => cb(value))
//       }
//     }

//     const reject = (value) => {
//       if (this.state == 'pending') {
//         this.state = 'rejected'
//         this.value = value
//         this.onRejectedCallbacks.forEach(cb => cb(value))
//       }
//     }

//     executor(resolve, reject)

//   }

//   then(onFulfilled, onRejected) {
//     onFulfilled = typeof this.onFulfilled === 'function' ? onFulfilled : value => value;
//     onRejected = typeof this.onRejected === 'function' ? onRejected : reason => { throw reason };


//     return new MyPromise((resolve, reject) => {
//       if (this.state === 'fulfilled') {
//         setTimeout(() => {//模拟异步，但是模拟不了微任务
//           try {
//             const res = onFulfilled(this.value)
//             resolve(res)
//           } catch (errpr) {
//             reject(error)
//           }
//         })
//       }
//       if (this.state === 'rejected') {
//         setTimeout(() => {//模拟异步，但是模拟不了微任务
//           try {
//             const res = onRejected(this.reason)
//             resolve(res)
//           } catch (errpr) {
//             reject(error)
//           }
//         })
//       }

//       if (this.state === 'pending') {
//         //将自己的回调存进onFulfilledCallbacks
//         this.onFulfilledCallbacks.push((value) => {
//           setTimeout(() => {
//             onFulfilled(value)
//           });
//         })

//         this.onRejectedCallbacks.push((reason) => {
//           setTimeout(() => {
//             onFulfilled(reason)
//           });
//         })
//       }
//     })
//   }
// }

// new MyPromise((resolve, reject) => {
//   resolve()
// })
//   .then(res => {

//   })



/**
 * 1. new Promise时，需要传递一个 executor 执行器，执行器立刻执行
 * 2. executor 接受两个参数，分别是 resolve 和 reject
 * 3. promise 只能从 pending 到 rejected, 或者从 pending 到 fulfilled
 * 4. promise 的状态一旦确认，就不会再改变
 * 5. promise 都有 then 方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 
 *      和 promise 失败的回调 onRejected
 * 6. 如果调用 then 时，promise已经成功，则执行 onFulfilled，并将promise的值作为参数传递进去。
 *      如果promise已经失败，那么执行 onRejected, 并将 promise 失败的原因作为参数传递进去。
 *      如果promise的状态是pending，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次将对应的函数执行(发布订阅)
 * 7. then 的参数 onFulfilled 和 onRejected 可以缺省
 * 8. promise 可以then多次，promise 的then 方法返回一个 promise
 * 9. 如果 then 返回的是一个结果，那么就会把这个结果作为参数，传递给下一个then的成功的回调(onFulfilled)
 * 10. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个then的失败的回调(onRejected)
 * 11.如果 then 返回的是一个promise,那么需要等这个promise，那么会等这个promise执行完，promise如果成功，
 *   就走下一个then的成功，如果失败，就走下一个then的失败
 */
class MyPromise {
  constructor(executor) {
    // 初始化状态和值
    this.status = 'pending'; // 当前Promise的状态：pending, fulfilled, 或 rejected
    this.value = null;       // fulfilled时的值
    this.reason = null;      // rejected时的原因
    this.onFulfilledCallbacks = []; // 存储所有成功回调
    this.onRejectedCallbacks = [];  // 存储所有失败回调

    // 解析Promise，改变其状态到fulfilled
    const resolve = value => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        // 执行所有成功回调
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    };

    // 拒绝Promise，改变其状态到rejected
    const reject = reason => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        // 执行所有失败回调
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };

    // 尝试执行executor，如果抛出错误，自动调用reject
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // then方法，用于链式调用和处理结果
  then(onFulfilled, onRejected) {
    // 默认处理，如果回调函数不存在，则直接返回值或抛出原因
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };

    // 返回新的Promise，允许链式调用
    return new MyPromise((resolve, reject) => {
      // 根据当前状态，决定执行哪个回调
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            // 调用onFulfilled并处理其结果
            const x = onFulfilled(this.value);
            this.resolvePromise(x, resolve, reject);
          } catch (error) {
            // 如果onFulfilled抛出错误，直接拒绝新的Promise
            reject(error);
          }
        }, 0);
      } else if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            // 调用onRejected并处理其结果
            const x = onRejected(this.reason);
            this.resolvePromise(x, resolve, reject);
          } catch (error) {
            // 如果onRejected抛出错误，直接拒绝新的Promise
            reject(error);
          }
        }, 0);
      } else {
        // 如果状态是pending，将回调存储起来，等待状态改变
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              this.resolvePromise(x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              this.resolvePromise(x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
  }

  // 辅助函数，用于处理then方法中返回的值x
  resolvePromise(promise2, x, resolve, reject) {
    // 检查循环引用
    if (promise2 === x) {
      return reject(new TypeError('Chaining cycle'));
    }

    // 检查x的类型
    if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
      let called = false; // 标记x.then是否已经被调用

      try {
        let then = x.then;
        if (typeof then === 'function') {
          // 如果x是一个Promise，调用其then方法
          then.call(x, y => {
            if (called) return;
            called = true;
            this.resolvePromise(promise2, y, resolve, reject);
          }, r => {
            if (called) return;
            called = true;
            reject(r);
          });
        } else {
          // 如果x不是一个Promise，直接解析
          if (called) return;
          called = true;
          resolve(x);
        }
      } catch (error) {
        // 捕获x.then抛出的错误
        if (called) return;
        called = true;
        reject(error);
      }
    } else {
      // 如果x不是对象或函数，直接解析
      resolve(x);
    }
  }
}

module.exports = MyPromise;



