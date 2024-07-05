// 获取到用户屏幕的宽度，决定了一行能放下几张图片
// 操作下一张图，放到上一行最矮的列下面

function imgLocation(parent, content) {
    var cparent = document.getElementById(parent);//parent在这里相当于'container'

    // 有多少张图片
    // var ccontent = document.querySelectorAll('.box');//把类名为box全部获取，但可能别的类名也为box所以这里不采用
    // var ccontent = document.querySelectorAll('#container .box');//取到的是container的box
    var ccontent = getChildElement(cparent, content);
    // console.log(ccontent.length);

    // 获取每一个box的宽度
    var imgWidth = ccontent[0].offsetWidth;//获取容器的宽度，任何标签的自带的属性

    // 屏幕一行能放下几个图片  5.6 取整放5张
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);

    //设置container的宽度
    cparent.style.width = `{imgWidth *num}px`;

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
//辅助函数getChildElement()
function getChildElement(parent, child) {
    // 获取parent中所有的child
    var childArr = [];
    // 返回的是数组结构
    var allChild = parent.getElementsByTagName('*');//parent里的所有的标签
    // 挑出所有Child中的box
    for (let i = 0; i < allChild.length; i++) {
        if (allChild[i].className == child) {//判断类名是否含有形参child
            childArr.push(allChild[i]);//尾部增加进去
        }
    }
    return childArr;

}

imgLocation('container', 'box');