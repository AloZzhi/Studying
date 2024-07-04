import { randomInt, createRandomPicker } from './random.js'

// 替换文本
function sentence(pick, replacer) {
  let ret = pick()  // 得到一个句子
  for (const key in replacer) {
    ret = ret.replace(
      new RegExp(`{{${key}}}`, 'g'),
      typeof replacer[key] === 'function' ? replacer[key]() : replacer[key]
    )
  }
  return ret
}


export function generate(title, { corpus, min = 500, max = 800 }) {
  const articleLenth = randomInt(min, max)
  const { famous, bosh_before, bosh, conclude, said } = corpus
  const [pickFamous, pickBoshBefore, pickBosh, pickConclude, pickSaid]
    = [famous, bosh_before, bosh, conclude, said].map(createRandomPicker)

  const article = []
  let totalLength = 0

  while (totalLength < articleLenth) {  // 生成文章
    let section = ''
    const sectionLength = randomInt(100, 300)
    while (section.length < sectionLength) {  // 生成段落
      const n = randomInt(0, 100)
      if (n < 20) {
        section += sentence(pickFamous, { said: pickSaid, conclude: pickConclude })
      } else if (n < 50) {
        section += sentence(pickBoshBefore, { title }) + sentence(pickBosh, { title })
      } else {
        section += sentence(pickBosh, { title })
      }
    }
    totalLength += section.length
    article.push(section)
  }
  return article
}



