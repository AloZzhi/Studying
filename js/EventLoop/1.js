let a = 1
console.log(a);//1

setTimeout(function () {
  let b = 2
  console.log(b);
  a++
  setTimeout(function () {
    b++
  }, 2000)
  console.log(b);

}, 1000)

console.log(a);//1   promise


function bar() {
  console.log('bar');
}
bar()