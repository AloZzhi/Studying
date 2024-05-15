// 获取到用户屏幕的宽度，决定了一行能放下几张图片
// 操作下一张图，放到上一行最矮的列下面

function imgLocation(parent, content) {
    var cparent = document.getElementById(parent);

    // 有多少张图片
    // var ccontent = document.querySelectorAll('.box');
    // var ccontent = document.querySelectorAll('#container .box');
    var ccontent = getChildElement(cparent, content);
    // console.log(ccontent.length);

    // 获取每一个box的宽度
    var imgWidth = ccontent[0].offsetWidth;

    // 屏幕一行能放下几个图片  5.6 取整放5张
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);

    //设置container的宽度
    cparent.style.width = `%{imgWidth *num}px`;

    // 要操作的是哪一张？num+1，取到每一列的高度
    var BoxHeightArr = [];
    for (let i = 0; i < ccontent.length; i++) {
        if (i < num) {
            // 第一行
            BoxHeightArr[i] = ccontent[i].offsetHeight;
        } else {
            // 需要操作的部分,下一行了
            var minHeight = Math.min.apply(null, BoxHeightArr);
            var minIndex = BoxHeightArr.indexOf(minHeight);

            //摆放图片的位置
            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minHeight + 'px';
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px';

            // 更新这一列的高度
            BoxHeightArr[minIndex] += ccontent[i].offsetHeight;

            console.log(minIndex);
        }
    }

    // console.log(BoxHeightArr);

}

function getChildElement(parent, child) {
    // 获取parent中所有的child
    var childArr = [];
    // 返回的是数组结构
    var allChild = parent.getElementsByTagName('*');
    // 跳出所有Child中的box
    for (let i = 0; i < allChild.length; i++) {
        if (allChild[i].className == child) {
            childArr.push(allChild[i]);
        }
    }
    return childArr;

}

imgLocation('container', 'box');