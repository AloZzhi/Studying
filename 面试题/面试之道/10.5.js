Parent.prototype.say = function(){
function Parent(age){
  this.age=age
}
}

function Child(){

}

Child.prototype = new Parent()

function Child (name,age) {
    this.name=name
}

const c = new Child('child')