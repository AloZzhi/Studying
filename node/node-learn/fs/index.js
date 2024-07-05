const fs = require('fs');

// const fileContent = fs.readFileSync('./text.txt', 'utf-8')//同步语法
// console.log(fileContent);

fs.writeFileSync('./readme.md', '菲律宾香蕉脆片')

console.log(fs.statSync('./text.txt'));