function nextTick(fn) {
  return new Promise((resolve, reject) => {
    //DOM更新完成了吗
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(()=>{
        let res =  fn()
        if(res instanceof Promise){
          res.then(resolve)
        }else{
          resolve()
        }
      })
      observer.observer(document.getElementById('app'), { attributes: true, childList: true, subtree: true })
    }
    // fn()
    // resolve()
  })
}

// window.onload =()=>{
//   //页面加载完成
// }