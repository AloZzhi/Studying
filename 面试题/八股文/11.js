let p = new Proxy(target, handler)

let obj = {
    name: 'zhu',
    age: 18,
    like: 'coding'
}


obj.age = 20

function girlFriend() {
    console.log('ok');

}
