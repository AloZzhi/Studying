class Commitment {
  static PENDING = '待定';
  static FULFILLED = '成功';
  static REJECTED = '拒绝';
  constructor(func) {
    this.status = Commitment.PENDING;
    this.result = null;
    this.resolveCallbacks =[];
    this.rejectCallbacks =[];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(result) {
   setTimeout(()=>{
    if (this.status === Commitment.PENDING) {
      this.status = Commitment.FULFILLED;
      this.result = result;
      this.resolveCallbacks.forEach(callback=>{
        callback(result)
      })
    }
   })
  }
  reject(result) {
    setTimeout(()=>{
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.REJECTED;
        this.result = result;
        this.rejectCallbacks.forEach(callback=>{
          callback(result)
        })
      }
    })
  }
  then(onFULFILLED, onREJECTED) {
    return new Commitment((resolve,reject)=>{
      onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => { };
      onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => { };
      if(this.status===Commitment.PENDING){
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
  result =>{console.log(result);},
  result =>{console.log(result.message);}
).then(
  result =>{console.log(result);},
  result =>{console.log(result.message);}
)
