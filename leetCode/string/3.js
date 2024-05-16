var s = "deeee"


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
            sArr.splice(low, 1);

            let newsArr = sArr.join('')

            if (isPa(newsArr)) {
                return true;
            } else {

                // 2.删右边
                let rightsArr = s.split('');

                rightsArr.splice(high, 1);

                let rightNewArr = rightsArr.join('');

                if (isPa(rightNewArr)) {

                    return true;
                } else {
                    console.log('false');
                    return false;
                }
            }

        }
    }

}


function isPa(s) {
    let newStr = (s + '').split('').reverse().join('');
    return s === newStr ? true : false;

}

// validPalindrome(s)