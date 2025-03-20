for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
// 55555
// 解决方案一：let
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
// 解决方案二: 闭包
for (var i = 0; i < 5; i++) {
    function foo(j) {
        setTimeout(() => {
            console.log(j);
        }, 1000);
    };
    foo(i)
}
// 解决方案三: setTimeout第三个参数
for (var i = 0; i < 5; i++) {
    setTimeout(function (j) {
        console.log(j);
    }, 1000, i)
}
// 解决方案四: 立即执行函数
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(j);
        }, 1000);
    })(i)
}