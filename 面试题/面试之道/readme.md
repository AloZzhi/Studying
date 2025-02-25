# 类型
- 原始类型 number string boolean null undefined symbol bigint
- 引用类型 object function array Date Map Set RegExp

1.toString()

0.111111111 + 0.2 = 

'7654321425367586545423' +  '0000000065431098765432'

# typeof vs instanceof   

# Object.prototype.toString.call(1)  // [object Number] ?

1. 对象上的 toString()   返回 '[object x类型]'格式的字符串
2. 数组上的 toString()   返回 数组元素以逗号拼接的字符串
3. 其他类型的 toString()  返回 字符串字面量


# 类型转换
- 显示转换   Number('1')
- 隐式转换   + - * / ==  !=  !  > < >= <=  if while 

1. 原始类型 -》 原始类型
2. 引用类型 -》 原始类型   
  1. 转字符串 :  X + ''
  2. 转数字
  3. 转布尔值: if while  !

- {} ==> 数字      ||     {} ==> 字符串    ToString({})
  1. ToNumber({})  // ToNumber只能处理原始类型
  2. 当ToNumber遇到引用类型内部执行 ToPrimitive({}， number)  

- ToPrimitive({}， number)  
 1. 先调用valueOf()  如果返回原始类型  则结束
 2. 调用toString()  如果返回原始类型  则结束
 3. 抛出错误

- ToPrimitive({}， string) 
 1. 先调用toString()  如果返回原始类型  则结束
 2. 调用valueOf()  如果返回原始类型  则结束
 3. 抛出错误


# this
 - 默认绑定：函数被独立调用, this指向window
 - 隐式绑定：函数被某个对象调用, this指向该对象
 - 隐士丢失：函数被一连串的对象调用，this指向最进调用的对象
 - 显示绑定：call apply bind 
   - call apply bind 区别：
      call， bind 接受参数是零散的
      apply 接受参数是数组
      bind 会返回一个新的函数 新函数也可以接受参数
          1. 当新的函数被 new 调用时，返回的是 调用 bind的那个函数的实力对象


# == vs ===
 1. == 会进行隐式转换
 2. === 不会进行隐式转换

# 闭包
根据词法作用的规则，内部函数总是可以访问其外部函数中的变量的。
在函数执行完毕后，它的执行上下文对象要被销毁

当函数 A 内部声明了一个函数 B，函数 B 被拿到 A 的外部调用，为了同时满足以上两个规则，函数 A 的执行执行上下文被销毁后会遗留下来一个对象空间，用于存放函数 B 有权访问的所有变量。这个对象空间被称为闭包。


# 拷贝
  - 浅拷贝：拷贝得到的新对象会受原对象的影响 
    - 1. Object.assign()
    - 2. Object.create()
    - 3. 展开运算符 ...
    - 4. 数组的 slice()  concat()

  - 深拷贝：拷贝得到的新对象不会受原对象的影响
   1. JSON.parse(JSON.stringify(obj))
   2. 递归拷贝
   3. structuredClone()
   4. new MessageChannel()



# 原型
 1. 显示原型 prototype
 2. 隐式原型 __proto__

  - 原型的作用：
    让所有的实例对象都有一个公有的属性和方法

  - 原型链：
   因为对象中都有自己的__proto__,v8在查找属性和方法时，会先去对象的__proto__属性中查找，找不到就会去对象的__proto__中查找，还找不到就会顺着一直查找，直到找到null为止
    Object.create(null) //创建了一个没有原型的对象


 - new的实现
 1. 创建一个新对象
 2. 新对象的__proto__赋为构造函数的prototype
 3. 构造函数内部的this指向新对象
 4. 执行构造函数内部的代码
 5. 当构造函数中有返回值，且返回值类型为引用类型时，new会返回构造函数的执行结果，否则返回这个新对象


 # var let const 区别

 1. var 没有块级作用域 let const +{} 有块级作用域
 2. var 会声明提升 let const 不行
 3. var 可重复声明 let const 不行
 4. const 声明的变量不能重新赋值 不能声明了不赋值
 5. var 声明的变量会挂载在window上，let const 不会

  - 暂时性死区
  当时用let或const声明变量形成了块级作用域时，在变量声明前访问该变量会报错，即便块级作用域也声明了相同的变量，也无法访问这个变量

 # 继承
  - 让子类能访问到父类的属性和方法
1. 原型链继承：子类无法给父类传参
2. 构造函数继承：无法继承父类原型
3. 组合继承：父类构造函数执行了两次
4. 原型式继承：
5. 寄生式继承：