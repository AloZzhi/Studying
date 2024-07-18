class MyPromise {
  constructor(executor) {
    // this.state = 'pending'
    // this.value = undefined   //临时保存resolve||reject的参数
    // this.reason = undefined
    // this.onFulfilledCallbacks = [] //装then的回调
    // this.onRejectedCallbacks = [] //装catch中的回调

    // const resolve = (value) => {
    //   if (this.state = 'pending') {
    //     this.state = 'fufilled'
    //     this.value = value
    //     this.onFulfilledCallbacks.forEach(cb => cb(value))
    //   }

    // }

    const reject = () => {

    }


    // .then(onFulfilled,onRejected){
    //   onFulfilled = 
    // }
  }
}

new MyPromise((resolve, reject) => {
  resolve()
})
  .then(res => {

  })