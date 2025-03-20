let arr = [1, 2, 3]

// const res = arr.map((item,index,arr)=>{
//   return item*2
// })

arr.forEach((item, index, arr) => {
  arr[index] = item * 2
})
console.log(arr);


for(item of arr){
  if(item===3){
    break
  }
  console.log(item);
  
}