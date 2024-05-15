var obj = {

}
console.log('---------------------------------------');
function NewPerson(color) {
    var that = {

    }
    that.name = '张三'
    that.age = 18
    that.color = color

    return that;
}
let obj4 = NewPerson('black')
console.log(obj4)
console.log('------------------------------------------');
var num = new Number(123)
num.abc = 'abc'
console.log(num);
console.log(num * 2);
var num1 = 123
num1.abc = 'hello'
console.log(num1.abc);  // undefined
/**
 * 因为他创建事实上当成对象 new Number() 
 * 然后添加了一个abc属性值为abc
 * 但是为什么是最后返回一个undfined呢？
 * 因为引擎发现这是一个基本数据类型
 * 然后就做一个deleate操作
 * 这个隐式的过程就是包装类的过程-->new Number()
 */

var str = 'abc'
console.log(str * 2); // NaN 
console.log(str.length); // 3 这里的length是本身就内定了的，我们在访问这个属性的时候引擎不会去删除
str.length = 2
console.log(str.length); // 3  为什么不是2？
//相当于new了一个String 然后我们人为的添加一个属性length然后值为2 然后引擎会自动delete掉这个属性，这是一个包装类的执行过程
//然后重新访问它自带的length。

var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr);   //[1,2]