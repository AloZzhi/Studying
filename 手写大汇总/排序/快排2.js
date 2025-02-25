function quickSort(arr){
  if(arr.length<=1) return arr
  let pivotIndex = Math.floor(arr.length/2)
  let pivot = arr.splice(pivotIndex,1)[0];
  let left =[],right=[],equal=[]

  for(let i=0;i<arr.length;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else if(arr[i]>pivot){
      right.push(arr[i])
    }else{
      equal.push(arr[i])
    }
  }
  return [...quickSort(left),pivot,...equal,...quickSort(right)]
}

let arr = [7,6,5,4,3,2,6,1]
console.log(quickSort(arr));
