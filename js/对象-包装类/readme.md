# 对象
访问对象上不存在的属性，得到undefined，而不是报错

# 创建对象有哪些方式
1. 字面量创建对象var obj = {}创建对象字面量、也叫做对象直接量
2. 构造函数创建对象var obj2 = new Object() 构造函数首字母约定俗成要大写
3. 调用自定义的构造函数创建对象var obj3 = new Person()
function Person(){
    this.name = '张三',
    this.age = 18,
}
let obj4 = new Person()
console.log(obj4)
那么思考一下new做了一个什么事情？如果没有new直接obj4 = Person()  返回一个undefined
事实上new帮我们在Person(){
    中创建了一个this对象
    var this = {}
    我们自己写的this.name = name,
    this.age = age,
    this.say = function(){}
    往他的this中添加属性，然后最后他返回this
    return this
}
因此我们就可以自己写一个类似new的方法，但是构造时不需要写new关键字 （一般不用）


# 包装类

原始值是不能拥有属性和方法的，属性和方法是对象独有的