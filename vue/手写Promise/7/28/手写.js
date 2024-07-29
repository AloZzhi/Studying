class Commitment {
  static PENDING = '待定';
  static FULFILLED = '成功';
  static REJECTED = '拒绝'
  constructor(func) {
    this.static = Commitment.PENDING;
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error)

    }
  }
  resolve(result) {
    setTimeout(() => {
      if (this.static = Commitment.PENDING) {
        this.static = Commitment.FULFILLED;
        this.result = result
        this.rejectCallbacks.forEach(callback => {
          callback(this.result)
        })
      }
    })
  }

  reject(result) {
    setTimeout(() => {
      if (this.static = Commitment.PENDING) {
        this.static = Commitment.REJECTED;
        this.result = result
        this.rejectCallbacks.forEach(callback => {
          callback(this.result)
        })
      }
    })

  }
then(onFULFILLED, onREJECTED) {
  return new Commitment((resolve,reject)=>{
    onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => { };
    onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => { };
  
    if (this.status === Commitment.PENDING) {
      this.resolveCallbacks.push(onFULFILLED);
      this.rejectCallbacks.push(onREJECTED)
    }
    if (this.status === Commitment.FULFILLED) {
      setTimeout(() => {
        onFULFILLED(this.result)
      })
    }
    if (this.status === Commitment.REJECTED) {
      setTimeout(() => {
        onREJECTED(this.result)
      })
    }
  })
}
}

let commitment = new Commitment((resolve, reject) => {
  resolve('这次一定')
})
commitment.then(
  result => { console.log(result) },
  result => { console.log(result.message); }
)