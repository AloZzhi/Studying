# 大厂有表现力的代码

- 组成合唱团  敏锐的逻辑能力
    - choir 数组
    - duck 对象用对象字面量来表达
    - 加入合唱团应该写成一个方法 直觉  封装能力
        joinChoir() 
            封装成函数 animal && typeof animal.duckSing == 'function'
    - 鸭子模型  深入的语言能力
        JS弱类型
        JS里不是传统的面向对象(class Duck)
        基于原型式的面向对象()
    - JS才是最面向对象的面向对象
        除了简单数据类型，一切都是对象
        - 如何区分不同类型的对象？
            Object.prototype.toString.call(choir)
                '[object Array]' 数组是对象的一种子类型