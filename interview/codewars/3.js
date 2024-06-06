//like 系统
// [] "no one like this"
// ["Alo"]"Alo like this"
// ["Alo","Suga"]"Alo and Suga like this"
// ["Alo","Suga","JiSung"]"Alo, Suga and JiSung like this"
// ["Alo","Suga","JiSung","Bemogy"]"Alo, Suga and 2 others like this"

const likes = names => {
  switch (names.length) {
    case 0: return 'no one likes this'
    case 1: return names[0] + "likes this"
    case 2: return names[0] + "and" + names[1] + "like this"
    case 3: return names[0] + "," + names[1] + "and" + names[2] + "like this"
    case 4: return names[0] + "," + names[1] + "and" + (namse.length - 2) + 'others like this'
  }
}