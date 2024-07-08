(function (doc, win) {
  let docEl = doc.documentElement //根节点
  let recalc = function () {
    console.log(123);

    let clientWidth = docEl.clientWidth//设备宽度
    if (!clientWidth) return
    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
  }

  doc.addEventListener('DOMContentLoaded', recalc)

})(document, window)