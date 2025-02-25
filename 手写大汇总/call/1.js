Function.prototype.myCall = function(context, ...args){
  context = context || window
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.myCall2 =function(context2,...args){
  context2 = context2||window
  context2.fn=this
  const res = context2.fn(...arg)
  delete context2.fn
  return res
}