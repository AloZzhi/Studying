class Commitment {
  static pending = '待定'
  static fulfilled = '成功'
  static rejected = '拒绝'

  constructor(func) {
    this.status = Commitment.pending
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []

    try {
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(result) {
   setTimeout(() => {
    if (this.status === Commitment.pending) {
      this.status = Commitment.fulfilled
      this.result = result
      this.resolveCallbacks.forEach(callback=>{
        callback(this.result)
      })
    }
   });
  }

  reject(result) {
    setTimeout(() => {
      if (this.status === Commitment.pending) {
        this.status = Commitment.rejected
        this.result = result
        this.rejectCallbacks.forEach(callback=>{
          callback(result)
        })
      } 
    });
  }
  then(onFulfilled, onRejected) {
  return new Commitment((resolve,reject)=>{
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
    onRejected = typeof onRejected === 'function' ? onRejected : () => { }

    if (this.status === Commitment.pending) {
      this.resolveCallbacks.push(onFulfilled)
      this.rejectCallbacks.push(onRejected)
    }
    if (this.status === Commitment.fulfilled) {
      setTimeout(() => {
        onFulfilled(this.result)
      });
    }
    if (this.status === Commitment.rejected) {
      setTimeout(() => {
        onRejected(this.result)
      });
    }
  })
}
}

let commitment = new Commitment((resolve,reject)=>{
  resolve('这次一定')
})
commitment.then(
  result=>{console.log(result)},
  result=>{console.log(result.message)}
).then(
  result=>{console.log(result)},
  result=>{console.log(result.message)}

)