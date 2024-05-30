// function foo(a) {
//   console.log(a + b);
// }
// var b = 2
// foo(1)//3

// function foo(a) {
//   console.log(a + b);
// }
// function bar() {
//   var b = 2
// }
// bar()
// foo(1)// b is not defined




function foo(a) {
  var b = 2
  function bar(c) {
    console.log(a + b + c);
  }
  bar(3)
}

foo(1)// 6