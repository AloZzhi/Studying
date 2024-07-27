// var obj = {
//   a: 1
// }

// function foo() {
//   console.log(this.a);
// }

// Function.prototype.mycall = function(context) {
//   // 调用我的那个哥们是不是函数体
//   if (typeof this !== 'function') {
//     return new TypeError(this+ 'is not a function')
//   }

//   // this里面的this => context
//   const fn = Symbol('key')
//   context[fn] = this  // 让对象拥有该函数  context={Symbol('key'): foo}
//   context[fn]()  // 触发了隐式绑定
//   delete context[fn]

// }


// foo.mycall(obj)
// console.log(obj);


Function.prototype.mycall = function(context, ...args) {
  // 确认调用的对象是否是函数
  if (typeof this !== 'function') {
    throw new TypeError(this + ' is not a function');
  }

  // 确保 context 不为 null 或 undefined，如果是，则设置为全局对象（在浏览器中为 window）
  context = context || globalThis;

  // 创建一个唯一的符号属性，以防止覆盖已有属性
  const fn = Symbol('key');
  // 将函数（this）作为属性添加到传入的对象（context）
  context[fn] = this;  
  // 调用该函数，并传递额外的参数
  const result = context[fn](...args);
  // 删除刚才添加的属性
  delete context[fn];
  // 返回函数的返回值
  return result;
}

// 测试代码
var obj = {
  a: 1
}

function foo(b, c) {
  console.log(this.a, b, c);
}

foo.mycall(obj, 2, 3);  // 输出：1 2 3
// console.log(obj);  // 输出：{ a: 1 }