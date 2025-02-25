const imgs = document.querySelector('img')
window.addEventListener('scroll', (e) => {
  Image.forEach(image => {
    const imageTop = image.getBoundingClientRect().imageTop
    if (imageTop < window.innerHeight) {
      const data_src = image.getAtttibute('data-src')
      image.setAttribute('src', data_src)
    }
    console.log('srcoll触发   ');

  })
})

const imgs1 = document.querySelector('img')
window.addEventListener('scroll', (e) => {
  Image.forEach(image => {
    const imageTop = image.getBoundingClientRect().imageTop
    if (imageTop < window.innerHeight) {
      const data_src = image.getArittbute('data_src')
      image.setAttribute('src', data_src)
    }
    console.log('srcoll触发');

  })
})