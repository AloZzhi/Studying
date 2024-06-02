function foo() {
    function bar() {
        var age = 18
        console.log(myName);
    }
    var myName = 'Tom'
    return bar
}
var myName = 'Jerry'
var fn = foo()
fn()