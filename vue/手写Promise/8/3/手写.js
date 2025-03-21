class Commitment {
  static PENDING = '待定';
  static FULFILLED = '成功';
  static REJECTED = '拒绝';
  constructor(func) {
    this.status = Commitment.PENDING
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    try {
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  resolve() {
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.FULFILLED
        this.result = result
        this.resolveCallbacks.forEach(callback => {
          callback(result)
        })
      }
    });
  }

  reject() {
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.REJECTED
        this.result = result
        this.rejectCallbacks.forEach(callback => {
          callback(result)
        })
      }
    });
  }

  then(onFulfilled, onRejected) {
    return new Commitment((resolve, reject) => {
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
      onRejected = typeof onRejected === 'function' ? onRejected : () => { }
      if (this.status === Commitment.PENDING) {
        this.resolveCallbacks.push(onFulfilled)
        this.rejectCallbacks.push(onRejected)
      }
      if (this.status === Commitment.FULFILLED) {
        setTimeout(() => {
          onFulfilled(this.result)
        });
      }

      if (this.status === Commitment.REJECTED) {
        setTimeout(() => {
          onRejected(this.result)
        });
      }
    })
  }
}