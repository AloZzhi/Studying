import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

import { generate } from './lib/generator.js'
import { createRandomPicker } from './lib/random.js'

// fs.readFile('./curpus/data.json', (err, data) => {
//   if (!err) {
//     console.log(data.toString('utf-8'));
//   } else {
//     console.log(err);
//   }
// })

function loadCorpus(src) {
  const url = import.meta.url  // 读取当前脚本的绝对路径
  const path = resolve(dirname(fileURLToPath(url)), src)
  const data = fs.readFileSync(path, { encoding: 'utf8' })
  return JSON.parse(data)
}
const corpus = loadCorpus('curpus/data.json')

const pickTitle = createRandomPicker(corpus.title)
const title = pickTitle()

// console.log(title);

const article = generate(title, { corpus })
// console.log(article);


fs.writeFileSync(`./output/${title}.txt`, article.join('\n'));








