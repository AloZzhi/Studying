let count = 0
function A() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            count = 100
            resolve()
        }, 1000)
    })
}

function B() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            count = 200
            resolve()
        }, 500)
    })
}
function C() {
    console.log(count);
}

A()
    .then(() => {
        return B() // 用B()返回的resolve()覆盖掉默认返回的promise对象。
    })
    .then(() => {
        return C()
    })
