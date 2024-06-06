function likes(names) {
  // /\w \d/
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name} , {name} and {name} like this',
    '{name}, {name} and others {n} like this'
  ]

  var idx = Math.min(names.length, 4);
  return templates[idx].replace(/{name}/g, function (val) {
    console.log(val, '-------------')
    return val === '{name}' ? names.shift() : names.length//前面两个已经弹出去了
  })
}

console.log(likes(['闵玧其', '朴志晟', '崔杋圭', '金道英', '郑在玹'])); 