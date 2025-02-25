function bubble(array) {
  // checkArray(array)
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1])
        swap(array, j, j + 1)
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
