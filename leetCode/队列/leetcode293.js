//用了双指针，但是超时了。
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var maxSlidingWindow = function (nums, k) {
//     var a = 0;
//     var b = k - 1;
//     var arr = []
//     while (b < nums.length) {
//         var max = -Infinity
//         for (var i = a; i <= b; i++) {
//             if (max < nums[i])
//                 max = nums[i];
//         }
//         arr.push(max)
//         a++
//         b++
//     }
//     return arr;
// };



var maxSlidingWindow = function (nums, k) {
    const len = nums.length
    const res = []
    const queue = []//维护一个递减队列
    for (let i = 0; i < length; i++) {
        while (queue.length && nums[i] > queue[queue.length - 1]) {
            queue.pop()
        }
        queue.push(nums[i])
        while (queue.length && queue[0] <= i - k) {
            queue.shift()
        }

        if (i >= k - 1) {
            arr.push(nums[queue[0]])
        }
    }
    return res
}
