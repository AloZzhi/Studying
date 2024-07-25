// const images = document.querySelectorAll('img')//获取所有img标签

// window.addEventListener('scroll',(e)=>{//判断每张图片的位置是否出现在可视区域
//   images.forEach(image=>{
//     const imageTop = image.getBoundingClientRect().top//每次遍历的时候，获取每张图片到顶部的距离
//     //判断
//     if(imageTop<window.innerHeight){//图片距视图顶部距离小于窗口显示区高度
//       //获取刚刚取得的自定义属性
//       const data_src = image.getAttribute('data-src')
//       //将自定义属性赋值给原本的src属性
//       image.setAttribute('src',data_src)
//     }
//     console.log('scroll触发');
//   })

// })


const images = document.querySelectorAll('img')//获取所有img标
const callback =(entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){//如果观察到了图片
      const image = entry.target;
      const data_src = image.getAttribute('data-src')//获取相应图片节点
      image.setAttribute('src',data_src)//修改为常规的src属性
      observer.unobserve(image)//取消观察
      console.log('触发');
    }
  })
};
const observer = new IntersectionObserver(callback)

images.forEach(image=>{//observer观察每一个img节点
  observer.observe(image)
})

observer.observe(DOM节点)
observer.unobserve(DOM节点)

