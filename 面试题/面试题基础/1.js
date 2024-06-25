// function test(person) {
//   person.age = 26
//   person = {
//     name: 'Tom',
//     age: 30
//   }
//   return person
// }
// const p1 = {
//   name: 'John',
//   age: 25
// }
// const p2 = test(p1)
// console.log(p1);//john 26
// console.log(p2);//tom 30


function foo(x,y){
  x={
    n:1
  }
  y.n=2
}
const obj={
  n:1,
  bar:{
    n:1
  }
}

foo(obj,obj.bar)
console.log(obj);