let arr =[1,2,3,4,5]

// for(var i=0;i<arr.length;i++){
//   if(arr[i]>3){
//    return 
//   }
//   console.log(arr[i]);
  
// }
// console.log('done');

//forEach中的break相当于for循环里的continue
arr.forEach(item=>{
  if(item>3){
    return
  }
  console.log(item);
})

console.log('done');
