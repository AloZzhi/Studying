nums = [-1, 0, 1, 2, -1, -4]


var res = [];
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        for (let n = j + 1; n < nums.length; n++) {
            if (nums[i] + nums[j] == nums[n]) {
                var res1 = [];
                res1.push(i);
                res1.push(j);
                res1.push(n);
                res.push(res1);
            }
        }
    }
}
console.log(res);
console.log(res1);
if (res.length == 1) {
    return res[0];
} else {
    return res;
}