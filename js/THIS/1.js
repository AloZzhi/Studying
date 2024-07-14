let obj = {
    myName: '喜羊羊',
    age: 12,
    bar: function () { // 在对象内部方法中使用对象内部的属性
        console.log(this.myName);
    }
}

obj.bar();

// function foo() {
//     let name = '大姚'
//     console.log(name);
// }

// foo()