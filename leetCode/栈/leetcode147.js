var MinStack = function () {
    this.stack = [];
};
/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
};
/**
 * @return {number}
 */

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    let min = Number.MAX_SAFE_INTEGER;
    for (const item of this.stack) {
        if (item < min) {
            min = item;
        }
    }
    return min;
};

const minStack = new MinStack();

minStack.push(1);

minStack.push(2);
minStack.push(3);
minStack.getMin(); //找到栈里面的最小值
minStack.pop();
minStack.top(); //获取栈顶元素