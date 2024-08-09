// function insertionSort(arr){
//   var len = arr.length;
//   var prei,cur
//   for(var i =1;i<len;i++){
//     prei = i-1;
//     cur = arr[i]
//     while(prei>0 && arr[prei]<cur){
//       arr[prei+1] = arr[prei]
//       prei--;
//     }
//     arr[prei+1] = cur
//   }
//   return arr
// }


//定义长度
//变量（一个是前一个元素的下标，一个是当前的值）
//当i<长度时  ，给定变量值
//当pre的下标有意义时，如果pre的值更小，则后移
//否则pre的后面就是当前值

var len = arr.length
var prei,cur

for(var i = 1 ;i<len;i++){
  prei = i-1;
  cur = arr[i]
  while (prei>0&&arr[peri]<cur) {
    app[prei+1]=arr[prei]
   prei--;
  }
  arr[prei+1] = cur
    
}