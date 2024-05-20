== 运算符用于比较两个值是否相等。它会在比较之前尝试进行类型转换，使得两个值的类型相同，然后再进行比较。这种类型转换可能会导致一些意外的结果，因为它会尝试将不同类型的值转换为相同类型再进行比较。

=== 运算符也被称为严格相等运算符，它不会进行类型转换。它只有在两个值的类型相同且值也相等的情况下才会返回 true，否则返回 false。使用 === 运算符可以避免一些类型转换导致的意外行为，因此在大多数情况下推荐使用严格相等运算符。

js中两个独立的对象一定不等

引用类型直接放入栈会导致爆栈

# 显示转换（原始值转原始值）
  1. 原始值转布尔
    Boolean(1)=>true
    Boolean(0)=>false
    Boolean(-1)=>true
    Boolean(NaN)=>false
    Boolean('')=>false
    Boolean('abc')=>true
    Boolean(false)=>false
    Boolean(undefined)=>false
    Boolean(null)=>false


  2. 原始值转数字
    Number('hello')=>NaN
    Number(true)=>1
    Number(' ')=>0
    Number(undefined)=>NaN
    Number(null)=>0

    +'123'=>123

  3. 原始值转字符串
    String(123)=>123
    String(true)=>'true'
    String(undefined)=>'undefined'
    String(null)=>'null'


  4.原始值转对象
    new Xxx() 

# 对象转原始值（通常隐式转换）
- 所有对象转原始值都会调用toString()    但版本不同

1. {}.toString()=>'[object 和 class 和 ]' 组成的字符串
2. [].toString()=>由数组内部元素以逗号拼接的字符串
3. xx.toString()=>字符串字面量


- valueOf()   也可以将对象转为原始类型
1. 包装类对象




  1. 任何对象转布尔都是true
  2. 对象转字符串  
      1>ToString(x)
      2>ToPrimitive(x)
  3. 对象转数字    
      1>ToNumber(x)
      2>ToPrimitive(x)-----转原始类型 



# ToPrimitive()
ToPrimitive(obj,Number)==>String(obj)
1. 如果收到的是原始值，直接返回值
2. 否则，调用toString 方法，如何得到原始值，返回
3. 否则，调用valueOf方法，如何得到原始值，返回
4. 报错

- 对象转布尔一定是true

#   - 一元运算符 +

# 二元操作符 +
v1 + v2:
1. lprim = ToPrimitive(v1)
2. lprim = ToPrimitive(v2)
3. 如果lprim或者rprim 是字符串，那么就ToString(lprim)或者ToString(rprim)再拼接
4. 否则.ToNumber(lprim)+.ToNumber(rprim)




# []+{}  +:四则运算符往Number转
在JavaScript中，`[]`表示一个空数组，`{}`表示一个空对象。当将它们进行加法运算时，会发生类型转换。

首先，将空数组`[]`转换为字符串，结果为`""`（空字符串）。
然后，将空对象`{}`转换为字符串，结果为`"[object Object]"`。
最后，将两个字符串进行拼接，结果为`"" + "[object Object]"`，即`"[object Object]"`。

所以，`[]+{}`的结果是`"[object Object]"`。


# == 11.9.3
