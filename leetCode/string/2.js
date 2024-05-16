let str = 'aba' //回文字符串

//判断是不是回文
function isPalindrome(str) {
    let arr = str.split('').reverse();
    arr = arr.join('');
    return arr;
}

if (str == isPalindrome(str)) {
    console.log('ok');
}
