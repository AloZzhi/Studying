// 手搓call实现原理 Function.prototype.myCall
// 1. 只有函数才能调用myCall，因为call是在函数Function的原型上定义的
Function.prototype.myCall = function (context, ...args) {
    // 1. 判断是否为函数类型
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    // 2. 如果没有传入参数，则指向window，传入参数则指向传入的参数
    context = context || window;
    // 3. 将当前函数（即this）赋值给上下文对象context的这个新属性，这样函数内部的this就会指向context
    // 这里用Symbol是为了避免属性名冲突
    const key = Symbol('fn');
    context[key] = this;
    // 4. 调用这个新属性对应的函数，并传入所有参数
    let res = context[key](...args);
    // 5. 删除临时属性，防止不必要的内存占用
    delete context[key];
    return res
}

// 手写一个apply   区别在于这里传入的是数组
Function.prototype.myApply = function (context, args) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window;
    const key = Symbol('fn');
    context[key] = this;

    let res = context[key](...args);
    delete context[key];
    return res
}
// 手写一个bind 重点
Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window;
    const self = this;
    return function Fn(...args2) {
        if (this.__proto__ === Fn.prototype) {
            return new self(...args, ...args2)
        }
        return self.apply(context, [...args, ...args2])
    }
}