// const result = [1,2,3].reduce((pre,cur)=>pre+cur)


// const result = [11,3,4,5,2,4,5,7,6,3].reduce((pre,cur)=>Math.max(pre,cur))


// const result = [11,3,4,5,2,4,5,7,6,3].reduce((preList,cur)=>{
// if(preList.indexOf(cur)===-1){
//   preList.push(cur)
// }
// return preList
// },[])



// const dataList =[{
//   name:'a',
//   country:'A'
// },
// {
//   name:'b',
//   country:'A'
// },
// {
//   name:'c',
//   country:'B'
// },
// {
//   name:'d',
//   country:'C'
// }]

// const result = dataList.reduce((pre,cur)=>{
//   const {country} = cur
//   if(!pre[country]){
//     pre[country]=[]
//   }
//   pre[country].push(cur)
//   return pre
// },{})


const str = 'eqrwqrrfwyk'

const result = Array.from(str).reduce((pre, cur) => {
  return `${cur}${pre}`
}, '')



console.log(result);
