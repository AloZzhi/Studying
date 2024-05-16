// 阿里面试题
var str = 'abc'
str += 1
var test = typeof (str)
if (test.length == 6) {
    test.sign = 'typeof 的返回结果是String'
}
console.log(test.sign);