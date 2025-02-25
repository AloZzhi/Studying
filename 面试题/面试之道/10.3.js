Parent.prototype.say = function(){

}

function Child(){

}

Child.prototype = new Parent()

function Child (name,age) {
    Parent.call(this,name)
    this.name=name
}