var nums = [2, 7, 11, 15], target = 9;

var twoSum = function (nums, target) {
  var diff = {

  }
  for (var i = 0; i < nums.length; i++) {
    if (diff[nums[i]] !== undefined) {
      return [diff[nums[i]], i]
    }
    diff[target - nums[i]] = i
  }
}
//obj.a=========obj['a']