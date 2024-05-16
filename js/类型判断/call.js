var obj = {
  a: 1
}
function foo() {
  console.log(this.a);
}

foo.mycall(obj)


Function.prototype.mycall = function (context) {
  //调用我的是不是函数体
  if (typeof this !== 'function') {
    return new TypeError(this + 'is not a function')
  }
  //this里面的this => context
  const fn = Symbol('key')
  context[fn] = this//让对象拥有该函数 {Symbol('key'):foo}
  context[fn]()//触发了隐式绑定
  delete context[fn]

}
foo.mycall(obj)
console.log(obj);
