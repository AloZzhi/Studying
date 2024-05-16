// 获取白底容器
// 在白色容器上监听鼠标的移动事件
// 获取到鼠标移动的距离
// 根据鼠标移动的距离来设计彩色容器的高度
var speed = document.querySelector('.speed')
var video = document.querySelector('.video')

speed.addEventListener('click', function (e) {
    var y = e.pageY - speed.getBoundingClientRect().top
    var percent = y / speed.offsetHeight
    var height = Math.round(percent * 100) + '%'

    // 用js修改speed-bar容器的height
    var speedBar = document.querySelector('.speed-bar')
    speedBar.style.height = height
    // 修改倍速文字
    var min = 0.5
    var max = 4
    var playSpeed = percent * (max - min) + min
    speedBar.textContent = playSpeed.toFixed(2) + 'x'

    // 更改视频播放速度

    video.playbackRate = playSpeed

})

var input1 = document.querySelector('.input1')
var input2 = document.querySelector('.input2')
input2.addEventListener('click', function (e) {
    url = input1.value
    // 测试是否取到用户传的url
    //console.log(url);
    video.src = url;

})

console.log(speed);