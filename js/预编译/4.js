// GO:{
//   fn:function(){}//全局就只有一个fn
// }
function fn(a) {//a:undefined
  console.log(a);//function
  var a = 4399
  console.log(a);//4399
  function a() { }
  console.log(a);//4399
  var b = function () { }
  console.log(b);
  function c() { }
  var c = a
  console.log(c);
}
// AO: {
//   a: undefined-- > 1-- > function ()-- > 4399
//   b: undefined
//   c: undefined-- > function c() { }-- > 4399

// }
fn(1)