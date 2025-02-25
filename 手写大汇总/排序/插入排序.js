function insertionSort(array) {
  checkArray(array);
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

function checkArray(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input is not an array');
  }
  if (array.length === 0) {
    throw new Error('Array is empty');
  }
}

// 测试示例
console.log(insertionSort([5, 82, 3, 54, 12, 3, 87])); // 输出: [3, 3, 5, 12, 54, 82, 87]