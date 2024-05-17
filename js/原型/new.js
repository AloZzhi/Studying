
Foo.prototype.b = 2
function Foo() {
  // var this = {
  //   a: 1
  // }
  // this._proto_=Foo.prototype

  this.a = 1
  //return this
}

let f = new Foo()

