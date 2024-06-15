var nums = [2, 7, 11, 15], target = 9;

var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var res = target - nums[i]
    var index = nums.indexOf(res, i + 1)
    if (index !== -1) {
      return [i.index]
    }
  }
};
console.log(twoSum(nums, target));