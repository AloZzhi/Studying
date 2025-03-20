class Parent {
    constructor() {// 构造函数
        this.name = 'zhu'
        this.age = 18
    };
    say() {
        console.log('你好');

    }
}
class Child extends Parent {
    constructor() {
        super()
        this.sex = 'nan'
    }

}

const C = new Child()
console.log(C);
C.say()
