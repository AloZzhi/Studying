function quickSort(){
  if(Array.length<=1){
    return arr
  }
}

const pivot = arr[arr.lenth-1]

const left = []
const right = []

for(let i=0;i<arr.length-1;i++){
  if(arr[i]<pivot){
    left.push(arr[i])
  }else{
    right.push(arr[i])
  }
}

return [...quickSort(left),pivot,...quickSort(right)]