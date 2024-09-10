let arr = [2, 4, 7, 1, 3, 5]
//二分法
function quickSort(arr) {
  if (arr.length < 2) return arr

  let middleIndex = Math.floor(arr.length / 2)
  let middle = arr.splice(middleIndex,1)[0]

  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), middle, ...quickSort(right)]
  
}
console.log(quickSort(arr));


