const arr = [1, 2, 3]  //push pop unshift shift splice

const stack = [1, 2, 3]//push pop 或 unshift shift 

const queue = [1, 2, 3]//push shift 或 unshift pop

const queue1 = []

queue1.push('a')
queue1.push('b')
queue1.push('c')


// for (let i = 0; i < queue1.length; i++) {
//     const top = queue1.shift()
//     console.log(top);
// }


while (queue1.length) {
    const top = queue1.shift()
    console.log(top);

}