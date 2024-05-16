let obj = {
    myName: '涛哥',
    age: 18,
    bar: function () { // 在对象内部方法中使用对象内部的属性
        console.log(this.myName);
    }
}

obj.bar();

function foo() {
    let name = '大姚'
    console.log(name);
}

foo()