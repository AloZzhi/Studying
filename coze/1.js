function add(arr, target) {
  let res = 0
  for (let i = 0; i <= arr.length; i++) {
    res = target - arr[i]
    for (let j = i + 1; j <= arr.length ; j++) {
      if (arr[j] === res) {
        return [i,j]
      }
    }
  }
}

let arr1 = [5, 7, 8, 2, 9]
console.log(add(arr1, 10));
