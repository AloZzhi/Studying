# 类型



# 引用类型


# 类型判断
## typeof --- 可以判断出了null之外的所有原始类型
  1. 可以判断除nu11之外的所有原始类型
  2. 除了function其他所有的引用类型都会被判断成obiect
  3. typeof是通过将值转换为二进制后判断前三位是否为8,是,则为object

## instanceof --- 只能判断引用类型（因为它是根据原型链来判断的）
  1. 只能判断引用类型 不能判断原始类型
  2. 通过原型链判断数据类型
  3. 函数对象有原型 原始对象没有原型

## Object.prototype.tostring(this)
js中每一种类型都有自己的toString函数，这些toString可以分为3类
1. 对象上的toString：返回一个 '[object xxx]' 结构的字符串
2. 数组上的toString：返回数组类元素以逗号拼接得到的字符串
3. 其他：返回字符串字面量

- 对象的toString
toString(x),v8会读取到x的内部属性[[class]],这个属性记录的就是x所属的构造函数
toString最终会返回由"[object"+ class +"]" 拼接得到的字符串

- call
.call()，你可以确保函数中的 this 指向正确的对象，从而避免常见的作用域问题