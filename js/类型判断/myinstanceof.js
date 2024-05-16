//instanceof的底层逻辑
function myinstanceof(L, R) {
  while (L !== null) {
    if (L._proto_ === R.prototype) {
      return true;
    }
    L = L._proto_
  }
  return false
}
console.log(myinstanceof([1], Array));//ture
console.log(myinstanceof({}, Array));//false
console.log(myinstanceof([], Object));//ture