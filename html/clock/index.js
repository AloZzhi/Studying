// 获取秒针
var secondHand = document.querySelector('.second-hand')
// 获取时针
var hourHand = document.querySelector('.hour-hand')
//获取分针
var minHand = document.querySelector('.min-hand')

function setTime() {
    var now = new Date();

    // 读取秒
    var seconds = now.getSeconds();
    var secondsDegress = (seconds / 60) * 360 + 90
    secondHand.style.transform = `rotate(${secondsDegress}deg)`
    // 读取分
    var mins = now.getMinutes();
    var minsDegress = mins * 6 + 90
    minHand.style.transform = `rotate(${minsDegress}deg)`
    //读取时
    var hours = now.getHours();
    console.log(hours);
    var hoursDegress = hours * 30 + 90 + (mins / 60) * 30
    hourHand.style.transform = `rotate(${hoursDegress}deg)`
}

// 设置秒针旋转的角度


setTime()
// 定时器
setInterval(setTime, 1000)

