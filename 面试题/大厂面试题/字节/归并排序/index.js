let array = [4, 1, 3, 9, 32, 4, 85, 3, 62]


function mergeSort(arr) {
  const len = arr.length
  if (len <= 1) {
    return arr
  }

  const mid = Math.floor(len / 2)

  const leftArr = mergeSort(arr.slice(0, mid))
  const rightArr = mergeSort(arr.slice(mid, len))

  arr = mergeArr(leftArr, rightArr)
  return arr

}

function mergeArr(arr1, arr2) {
  let i = 0, j = 0
  let res = []
  const len1 = arr1.length
  const len2 = arr2.length

  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  if (i < len1) {
    res = res.concat(arr1.slice(i))
  } else {
    res = res.concat(arr2.slice(j))
  }
  return res

}


console.log(mergeSort(array));
