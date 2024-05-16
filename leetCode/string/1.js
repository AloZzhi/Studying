let str = 'hello world'

let len = str.length
//函数也有length 函数的length表示参数的个数

console.log(len);

// 字符串也有下标的概念
console.log(str.charAt(6));  //w
console.log(str[6]); //w   这两种写法没有区别，当年并没有打造charAt方法，都是借鉴数组中的方法



let newStr = str + 'Tom' //字符串拼接
//数组增加删除内容 splice

//字符串没有splice方法，那么怎么办呢？ -->字符串先转换成数组然后再用splice方法达成目的后再转回来
let strArr = newStr.split('')
strArr.splice(1, 1)
console.log(strArr);
//现在字符串成功转换成数组然后删除指定元素了，接下来需要把数组转回字符串
// 自己手搓一个就遍历拼接，但是有自带的join方法
//console.log(strArr.join(''));

// 手搓
function spliceStr(str, index) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (i !== index) {
            newStr += str[i];
        }
    }
    return newStr;
}
//console.log(spliceStr(str, 1));
str1 = 'hello world'
// 取出字符串中的一个范围 切片 不影响原字符串
str1.slice(1, 3)


console.log('---------------');

console.log(isPa('aba'));
function isPa(s) {
    let newStr = s.split('').reverse().join('');
    return s === newStr ? true : false;

}

var s = "abc"
var sArr = s.split('')
newStr = sArr.splice(1, 1);
if (isPa(s)) {
    return true;
} else {
    let low = 0;
    let high = s.length - 1;
    while (low <= high) {
        if (s[low] == s[high]) {
            low++;
            high--;
        } else {
            let sArr = s.split('');
            // 1.删左边
            sArr.splice(low + 1, 1);

            let newsArr = sArr.join('')

            if (isPa(newsArr)) {

                return true;
            } else {

                // 2.删右边
                let rightsArr = s.split('');

                rightsArr.splice(high - 1, 1);

                let rightNewArr = rightsArr.join('');

                if (isPa(rightNewArr)) {

                    return true;
                } else {

                    return false;
                }
            }

        }
    }

}