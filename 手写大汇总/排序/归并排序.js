function mergeSort(arr) {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
function merge(left, right) {
  const merged = []
  let i = 0; j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i])
      i++
    } else {
      merged.push(right[i])
      j++
    }
  }
  return merged.concat(left.slice(i)).concat(right.slice(j))
}

const arr = [8, 43, 2, 354, 32, 5, 5, 5, 5, 5];
console.log(mergeSort2(arr));

//1.忘了i++和