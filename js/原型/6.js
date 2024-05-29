GrandFather.prototype.say = function () {
  console.log('hahaha');
}

function GrandFather() {
  this.age = 60
  this.like = 'drink'
}

Father.prototype = new GrandFather()
function Father() {
  this.age = 45
  this.fortune = {
    card: 'visa'
  }
}
Son.prototype = new Father()//{age:40,fortune:{xxx}}
function Son() {
  this.age = 18
}

let son = new Son()
//console.log(son.age);//18
//console.log((son.fortune));//{ card: 'visa' }
//console.log((son.like));//drink
console.log(son.say());//hahaha

