let data = null
function a() {
  setTimeout(() => {//ajax
    data = { name: '闵玧其' }
    b()//直接调用
  }, 1000)
}

function b() {
  console.log(data.name + '好帅');
}

a()
