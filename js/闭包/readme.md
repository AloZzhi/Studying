# 词法作用域
由函数声明的位置来决定，跟函数在哪里调用没有关系

# 闭包
在JavaScript中，根据词法作用域的规则，内部函数可以访问定义它的作用域中的变量，当内部函数被拿到外部函数之外调用时，即使外部函数已经执行完毕，但是内部函数对外部函数中的变量依然存在引用，那么这些被引用的变量会以一个集合的方式保存下来，这个集合就叫做闭包。当然在这个闭包中outer指针也依旧会被保留下来。


 