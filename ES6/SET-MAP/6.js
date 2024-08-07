const m = new Map();
m.set('abc', 313)
m.set(205, 'JiSung')
m.set(undefined, 'nah')
m.set(1, 'a').set(2, 'b').set(3, 'c')
// console.log(m);


m.forEach(function (value, key, map) {
  console.log("Key:%s,Value:%s", key, value);
})