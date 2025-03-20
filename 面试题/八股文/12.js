let arr = [1, 2, 3, 4, 5, 6]
// const res = arr.reduce((prev, cur, index, arr) => {
//     return prev + cur
// }, 0)
// console.log(res);
try {
    arr.forEach((item, index, arr) => {
        if (item === 3) {
            // return
            throw new Error('终止循环')
        }
        console.log(item);
    })
} catch (error) {
    console.log('终止循环');
}







