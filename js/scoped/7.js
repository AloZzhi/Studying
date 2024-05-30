// function foo(str, a) {
//   eval(str)//var b =3
//   console.log(a, b);
// }
// var b = 2
// foo('var b =3', 1)



// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// with (obj) {
//   a = 10,
//     b = 20,
//     c = 30
// }
// console.log(obj);

function foo() {
  with (obj) {
    a = 2
  }
}

var o1 = {
  a: 3
}
var o2 = {
  b: 3
}

// foo(o1)
// console.log(o1);

foo(o2)
console.log(o2);