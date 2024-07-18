function foo() {
  setTimeout(() => {
    console.log('foo');
  }, 1000)

}

function bar() {
  console.log('bar');
}

foo()
bar()