function a() {
  setTimeout(() => {
    console.log('a is ok');
    b()
  }, 1000)
}

function b() {
  console.log('b is ok');
}

a()

//回调嵌套过深导致回调地狱
//维护困难，排查问题困难
