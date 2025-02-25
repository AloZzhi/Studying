arr = [8, 43, 2, 354, 32, 5,5]
function quickSort(arr) {
  if(arr.length<=1) return arr
  let piovtIndex = Math.floor(arr.length/2)
  let piovt = arr.splice(piovtIndex,1)[0]
  let right=[],left=[],equal=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]>piovt){
      right.push(arr[i])
    }else if(arr[i]>arr.length){
      left.push(arr[i])
    }else{
      equal.push(arr[i])
    }
  }
  return [...quickSort(left),piovt,...equal,...quickSort(right)]
}
console.log(quickSort(arr));

