//值类型
// let x:'hello'


//联合类型
// let x:string |number
// x=123
// x='hello'


// function color(color:'红'|'橙'|'黄'|'绿'){

// }
// color('红')
// color('橙')
// color('黄')


//交叉类型
let obj: { foo: string } & { bar: string }

obj = {
  foo: 'hello',
  bar: 'world'
}

type Age = number

let age: Age = 18

type World = 'world'
type Geeting = `hello ${World}`


type Common = string | number | boolean
let abc :Common = false

