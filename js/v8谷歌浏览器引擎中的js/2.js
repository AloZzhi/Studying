var a = 2



function add(b, c) {

    return b + c
}

function addAll(b, c) {
    var d = 10
    var result = add(b, c)
    return a + result + d

}

addAll(3, 6)

// eval 全局 函数体 形成执行上下文对象   