var a = 2
var obj = {
    a: 1,
    foo: foo
}

var obj2 = {
    a: 3,
    obj: obj
}

function foo() {
    console.log(this.a);
}

obj2.obj.foo()