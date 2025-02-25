Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function') {
    return new TypeError('not function')
  }
  context = context || window
  context.fn = this
  const result = args ? context.fn(...args) : context.fn()
  delete context.fn
  return result
}


Function.prototype.myApply2 = function (context2, ...args) {
  context2 = context2 || window
  if (typeof this !== 'function') {
    return new TypeError('not function')
  }
  context2.fn = this
  const res = args ? context2.fn(...args) : context2()
  delete context2.fn()
  return res
} 