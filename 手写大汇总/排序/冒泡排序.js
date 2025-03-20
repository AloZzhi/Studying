function bubble(array) {
  // checkArray(array)
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]]

    }
  }
  return array
}
function swap(array, left, right) {
  let rightValue = array[right]
  array[right] = array[left]
  array[left] = rightValue
}

console.log(bubble([5, 82, 3, 54, 12, 3, 87])); // 输出: [3, 3, 5, 12, 54, 82, 87]


function bubbleSort(arr) {

  for (let i = 0; i <= length - 1; i++) {
    let swapper = false
    for (let j = 0; j <= length - 1 - i; j++) {
      swapper = false
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapper = true

      }
    }
    if (!swapper) break

  }
  return arr
}
