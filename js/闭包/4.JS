function foo() {

    function bar() {
        var age = 18
        console.log(myName);
    }
    var myName = 'Tom'

    return bar
}
var myName = 'jerry'
var fn = foo()
fn()
// 这里foo需要销毁，但是里面有东西需要留下来，这个留下来的东西叫做闭包 在这个例子中也就是foo closure。