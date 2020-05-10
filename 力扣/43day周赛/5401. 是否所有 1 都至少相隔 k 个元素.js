// 5401. 是否所有 1 都至少相隔 k 个元素
// 给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 True ；否则，返回 False 。

// 示例 1：

// 输入：nums = [1,0,0,0,1,0,0,1], k = 2
// 输出：true
// 解释：每个 1 都至少相隔 2 个元素。
// 示例 2：

// 输入：nums = [1,0,0,1,0,1], k = 2
// 输出：false
// 解释：第二个 1 和第三个 1 之间只隔了 1 个元素。
// 示例 3：

// 输入：nums = [1,1,1,1,1], k = 0
// 输出：true
// 示例 4：

// 输入：nums = [0,1,0,1], k = 1
// 输出：true
//  

// 提示：

// 1 <= nums.length <= 10^5
// 0 <= k <= nums.length
// nums[i] 的值为 0 或 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            arr.push(i);
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] - arr[i - 1] < k + 1) return false;
    }
    return true;
};
var kLengthApart1 = function (nums, k) {
    let first = false;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        count++;
        if (nums[i] === 1) {
            if (first && count - 1 < k) return false;
            first = true;
            count = 0;
        }
    }
    return true;
};

// console.log(kLengthApart1(nums = [1, 0, 0, 0, 1, 0, 0, 1], k = 2));
console.log(kLengthApart1(nums = [1,0,0,1,0,1], k = 2));
