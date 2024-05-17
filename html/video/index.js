//获取白底容器
//在白底容器上监听鼠标的移动事件
//获取到鼠标移动的距离
//根据鼠标移动的距离来设计彩色容器的高度
var speed = document.querySelector('.speed')
var speedBar = document.querySelector('.speed-bar')
var video = document.querySelector('.video')

//js监听事件
speed.addEventListener('mousemove', function (e) {
    //console.log(speed.getBoundingClientRect())

    var y = e.pageY - speed.getBoundingClientRect().top
    var percent = y / speed.offsetHeight
    var height = Math.round(percent * 100) + '%'
    // console.log(height);
    //用js修改speed-bar容器的高度
    speedBar.style.height = height
    var min = 0.4
    var max = 4
    var playSpeed = percent * (max - min) + min
    speedBar.textContent = playSpeed.toFixed(2) + 'x'

    video.playbackRate = playSpeed

})