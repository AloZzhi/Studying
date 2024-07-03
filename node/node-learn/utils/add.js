function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}


// module.exports.add = add
// module.exports.minus = minus

// module.exports={
//   add,
//   minus
// }

exports.add = add

export default {
  add,
  minus: minus
}