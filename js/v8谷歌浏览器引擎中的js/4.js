function bar(params) {
    console.log(myName);
}

function foo(params) {
    var myName = 'Tom'
    bar();
}

var myName = 'Jerry';

foo();