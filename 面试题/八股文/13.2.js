// // 断点赋值计算
// function* foo(x) {
//     let y = 2 * (yield (x + 1))
//     let z = yield (y / 3)
//     return (x + y + z)
// }

// let it = foo(5) // 返回了一个迭代器
// console.log(it);
// console.log(it.next());
// console.log(it.next(12));
// console.log(it.next(13));

// 处理异步接口请求
function* fetch() {
    yield ajax(URL, () => { }) 
    yield ajax(URL1, () => { })
    yield ajax(URL2, () => { })
}
let it = fetch()
let res1 = it.next()
let res2 = it.next()
let res3 = it.next()



