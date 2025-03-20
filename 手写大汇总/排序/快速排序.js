function quickSort(arr) {
  if (arr.length <= 1) return arr
  const pivotIndex = Math.floor(Math.random() * arr.length)
  const pivot = arr[pivotIndex]

  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([8, 43, 2, 354, 32, 5, 5, 5, 5, 5, 5]));



//1.忘了arr.length<=1的情况