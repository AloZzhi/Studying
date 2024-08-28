const arr = [1, [2, 3, [4]]]

// console.log(arr.flat(2));


// function flatArr(arr) {
//   let res = []
//   for (let item of arr) {
//     if (!Array.isArray(item)) {
//       res.push(item)
//     } else {
//       res = res.concat(flatArr(item))
//     }
//   }
//   return res
// }
// console.log(flatArr(arr));


// function flatArr (arr){
//   let res = arr.toString()
//   return res
// }
// console.log(flatArr(arr));


function flatArr (arr){
let str = String(arr)
return str.split(',')
//再把类型转为Number
}
console.log(flatArr(arr));