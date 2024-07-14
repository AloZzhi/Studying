var obj = {
    a: 1
}

function foo(x, y) {      /// new Function()   Function.prototype.call = function
    console.log(this.a, x + y);
}

// foo.call(obj, 2, 3)

foo.apply(obj, [1, 2])

// var bar = foo.bind(obj, 3, 4)
// bar(2)