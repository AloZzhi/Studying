#typeof
1.可以判断除null之外的所有原始类型
2.除了function其他所有的引用类型都会被判断成object
3.typeof是通过将值转换为二进制后判断前三位是否为0,是,则为object


#instanceof
1.只能判断引用类型 不能判断原始类型
2.通过原型链判断数据类型
2.函数 对象 有原型 原始对象没有原型

#Object.prototype.toString(this)
1.
2.
3.将o作为 ToObject(this)的执行结果
4.定义一个class作为内部属性[[class]]的值 记录this值的类型
5.返回由 "[object"和class和 "]"组成的字符串
[[scope]]作用域属性

Object.prototype.toString(123)//Object new了一个number对象

Object.prototype.toString.call(123)//call显示绑定


Object.prototype.toString(a)
ToObject(a)

#Object.prototype.toString.call(xxx)

xxx.toString


#Array.isArray(x)//只能判断数组
