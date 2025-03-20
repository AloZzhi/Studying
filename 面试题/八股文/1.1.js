// 正则
// 实例化reg 使用正则的g全局查找abc的功能
let reg = new RegExp('abc', 'g')
// 测试该字符串中有没有abc
console.log(reg.test('abcdefg'));
