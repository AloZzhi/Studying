// const arr = [1, 2, 3, 4, 4, 3, 2, 1]

// const arr2 = new Array(5)

// const s = new Set()
// s.add(1)
// s.add(2)
// s.add(2)//{1,2}没有重复值

//console.log(s);




// const s = new Set([1, 2, 3, 3])//具有迭代器iterable属性的结构
// console.log(s);//{1,2,3}类数组

//读取值，不能读取值
// console.log(s.values());//还是{1,2,3}

//但是能判断是否含有值
//console.log(s.has(1));//true
// console.log(s.size);//3
//删除
// s.delete(2)
// s.clear()

// const arr = [1, 2, 3, 4, 4, 3, 2, 1]
// //去除重复项
// const arr2 = [...new Set(arr)]//解构
// console.log(arr2);


// const str = 'abcabc'
// console.log([...new Set(str)].join(''));//


//遍历
const s = new Set([1, 2, 3, 3])

// for (let i = 0; i < s.size; i++) {
//   console.log(s[i]);//三个undefined
// }

//console.log(s.keys());
// console.log(s.value());//取值
// console.log(s.entries());//键值对

// for (const item of s.entries()) {//专门用来遍历具有iterable属性的结构
//   console.log(item);

// }


s.forEach((val, key) => {
  console.log(val, key);
})