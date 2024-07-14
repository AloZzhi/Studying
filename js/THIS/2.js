function identify() {
    return this.name.toUpperCase();//英文字符转为大写
}

function speak() {
    var greeting = 'Hello, I am ' + identify.call(this);
    console.log(greeting);
}

var me = {
    name: 'gg bond'
}

speak.call(me);


// function identify(context) {
//     return context.name.toUpperCase();//英文字符转为大写
// }

// function speak(context) {
//     var greeting = 'Hello, I am ' + identify(context);
//     console.log(greeting);
// }

// var me = {
//     name: 'gg bond'
// }

// speak(me);