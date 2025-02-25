function add(x, y) {
  return x + y
}

function curryAdd(x) {
  return function (y) {
    return x + y
  }
}

curryAdd(1)(5)
