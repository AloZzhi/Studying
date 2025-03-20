// function A() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('a');
//             resolve('a')
//         }, 1000)
//     })
// }
// function B() {
//     console.log('b');
// }

// A().then(() => {
//     B()
// })

class MyPromise {
    constructor(executor) {
        this.status = 'pending'  // 状态
        this.value = null  // 成功的结果
        this.reason = null  // 失败的原因
        this.onFulfilledCallbacks = []  // 存放成功的回调函数
        this.onRejectedCallbacks = []  // 存放失败的回调函数

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.value = value
                this.status = 'fulfilled'
                this.onFulfilledCallbacks.forEach(fn => fn(value))
            }
        }
        const reject = (reason) => {
            if (this.status === 'pending') {
                this.reason = reason
                this.status = 'rejected'
                this.onRejectedCallbacks.forEach(fn => fn(reason))
            }
        }

        executor(resolve, reject)
    }
    
}