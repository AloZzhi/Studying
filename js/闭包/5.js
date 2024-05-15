// let count = 0

// function add(){
//     count++
//     return count
// }

function add() {
    let count = 0;
    function fn() {
        count++
        return count;
    }
    return fn;
}
var res = add();
console.log(res());
console.log(res());
console.log(res());

// 封装函数 实现累加，用到了全局变量=堆屎山  
