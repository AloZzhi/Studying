/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
nums = [1, 2, 3, 8]
target = 10

var twoSum = function (nums, target) {
    var diff = {
        //
        9: 0,
        8: 1,
        7: 2,
        2: 3

    }
    //
    console.log(diff[10]);

    for (var i = 0; i < nums.length; i++) {
        if (diff[nums[i]] !== undefined) {  // 查找对象中是否存在值，是不需要循环的
            return [diff[nums[i]], i]
        }
        diff[target - nums[i]] = i
    }


};


result = twoSum(nums, target)
//console.log(result);
a = nums[0].toString()
console.log(a.length);
console.log(a);
console.log(a[0]);
nums.push(1)
console.log(nums);
