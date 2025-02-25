Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    return new TypeError('not function!')
  }
  context = context === null || context === undefined ? globalThis : Object(context)
  const fn = this
  return function (...subArgs) {
    const allArgs = [...args, ...subArgs]
    return new.target ? new fn(...allArgs) : fn.apply(context, allArgs)

  }
}

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'fucntion') {
    return new TypeError('not function')
  }
  context = context === null || context === undefined ? globalThis : Object(context)
  const fn = this
  return function (...subArgs) {
    const allArgs = [...args, ...allArgs]
    return new.target ? new fn(...allArgs) : fn.apply(context, allArgs)
  }

}