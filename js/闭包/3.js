var arr = []

for (var i = 0; i < 10; i++) {

    arr[i] = function () {
        console.log(i);
    }
}


for (var j = 0; j < arr.length; j++) {
    arr[j]()
}
// 打印了10个10。---->for循环中的var i 改成let i