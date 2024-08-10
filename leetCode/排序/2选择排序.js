// function selectionSort(arr){
//   var let = arr.length;
//   var minIndex,temp;
//   for(var i=0;i<len-1;i++){
//     minIndex = i
//     for(var j =i+1;j<len;j++){
//       if(arr[j]<arr[minIndex]){
//        minIndex = j

//       }
//     }
//     temp = arr[i]
//     arr[i] = arr [minIndex]
//     arr[minIndex] =temp
//   }
//   return arr
// }




//定义长度
//变量（一个是最小元素的下标，一个是临时的值）
//两层循环，第一层定义最小值元素下标为i
//第二层循环，min和j（i+1）对应的值比，找最小值，换下标


var len= arr.length
var minIndex,temp
for(var i=0;i<len-1;i++){
  minIndex =i;
  for(var j=i+1;j<len;j++){
    if(arr[j]<arr[minIndex]){
      minIndex = j;
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}