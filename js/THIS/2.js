function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = 'Hello, I am ' + identify.call(this);
    console.log(greeting);
}

var me = {
    name: 'xiaoxiao'
}

speak.call(me);