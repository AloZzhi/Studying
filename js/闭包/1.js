function bar() {
    console.log(myName);
}
function foo() {
    var myName = 'Tom'
    bar()
}

var myName = 'Jerry'
foo()
/**
 * 调用栈中创建全局上下文执行对象（变量、词法环境）里面有bar=x001指向堆里面（非原始数据类型存放地）foo myName
 * myName最开始是undefined，全局预编译结束，全局执行，myName=Jerry 调用foo
 * 对foo进行预编译，创建AO对象（foo的执行上下文对象）有变量词法环境，myName=undefined，foo里面代码开始执行，
 * myName=Tom，foo变量环境中还有一个outer指针，值指向全局上下文执行对象，为什么指向全局？
 * outer指向谁取决于foo函数所在的词法作用域在哪里（foo声明在哪里），foo在全局作用域中，所以outer指向全局上下文执行对象
 * 这个指向过程就是作用域链，bar开始调用，创建bar执行上下文，入栈，有变量、词法环境，
 * 变量环境中没有声明东西，但是有outer指针，指向全局上下文对象。
 * 然后开始找myName，自己bar中没有找到，然后顺着outer往全局找，找到了jerry因此打印jerry
 * 
 */