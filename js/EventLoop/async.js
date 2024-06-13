let data = null

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      data = [1, 2, 3]
      resolve()
    }, 1000)
  })

}
function another() {
  console.log(data);
}



async function foo() {
  await getData()
  another()
}
foo()