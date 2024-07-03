const fs = require('fs');

// const fileContent = fs.readFileSync('./text.txt', 'utf-8')//同步语法
// console.log(fileContent);

// fs.writeFileSync('./readme.md', '你好你好')


console.log(fs.statSync('./text.txt'));