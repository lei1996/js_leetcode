// 5402. 绝对差不超过限制的最长连续子数组
// 给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。

// 如果不存在满足条件的子数组，则返回 0 。

// 示例 1：

// 输入：nums = [8,2,4,7], limit = 4
// 输出：2 
// 解释：所有子数组如下：
// [8] 最大绝对差 |8-8| = 0 <= 4.
// [8,2] 最大绝对差 |8-2| = 6 > 4. 
// [8,2,4] 最大绝对差 |8-2| = 6 > 4.
// [8,2,4,7] 最大绝对差 |8-2| = 6 > 4.
// [2] 最大绝对差 |2-2| = 0 <= 4.
// [2,4] 最大绝对差 |2-4| = 2 <= 4.
// [2,4,7] 最大绝对差 |2-7| = 5 > 4.
// [4] 最大绝对差 |4-4| = 0 <= 4.
// [4,7] 最大绝对差 |4-7| = 3 <= 4.
// [7] 最大绝对差 |7-7| = 0 <= 4. 
// 因此，满足题意的最长子数组的长度为 2 。
// 示例 2：

// 输入：nums = [10,1,2,4,7,2], limit = 5
// 输出：4 
// 解释：满足题意的最长子数组是 [2,4,7,2]，其最大绝对差 |2-7| = 5 <= 5 。
// 示例 3：

// 输入：nums = [4,2,2,2,4,4,2,2], limit = 0
// 输出：3

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 * 超时
 */
// var longestSubarray = function (nums, limit) {
//     let result = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             const arr = nums.slice(i, j + 1);
//             const max = Math.max(...arr);
//             const min = Math.min(...arr);
//             if (Math.abs(max - min) <= limit) {
//                 result = Math.max(result, arr.length);
//             }
//         }
//     }
//     return result;
// };

var longestSubarray = function (nums, limit) {
    let start = 0, end = 1, res = 1,
        max = [nums[0]],
        min = [nums[0]];
    while(end < nums.length){
        while(max.length > 0 && max[max.length - 1] < nums[end]){
            max.pop();
        }
        while(min.length > 0 && min[min.length - 1] > nums[end]){
            min.pop();
        }
        max.push(nums[end]);
        min.push(nums[end]);
        while(max[0] - min[0] > limit){
            if(max[0] == nums[start]){
                max.shift();
            }
            if(min[0] == nums[start]){
                min.shift();
            }
            start++;
        }
        res = Math.max(res, end - start + 1);
        end++;
    }
    return res;
};

console.log(longestSubarray(nums = [8, 2, 4, 7], limit = 4));
// console.log(longestSubarray(nums = [8, 2, 4, 7], limit = 4));
// console.log(longestSubarray(nums = [4,2,2,2,4,4,2,2], limit = 0));
