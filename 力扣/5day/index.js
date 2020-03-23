// 300. 最长上升子序列
// 给定一个无序的整数数组，找到其中最长上升子序列的长度。

// 示例:

// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//   if (!nums.length) return 0;
//   const min = Math.min(...nums);
//   const index = nums.findIndex(num => min === num);
//   if (index === nums.length - 1) return 1;
//   const map = new Map().set([min], 1);
//   for (let i = index + 1; i < nums.length; i++) {
//     const element = nums[i];
//     for (const m of map.keys()) {
//       if (element > min && element > m[m.length - 1]) {
//         map.set([...m, element], m.length + 1);
//       }
//     }
//   }
//   console.log(map);
//   return Math.max(...map.values());
// };
// var lengthOfLIS = function(nums) {
//   if (!nums.length) return 0;
//   const map = new Map();
//   for (let num of nums) {
//     for (const m of map.keys()) {
//       if (num > m[m.length - 1]) {
//         map.set([...m, num], m.length + 1);
//       }
//     }
//   }
//   console.log(map);
//   return Math.max(...map.values());
// };
var lengthOfLIS = function(nums) {
  if (nums.length <= 1) return nums.length;

  const dp = [1];
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      // j 始终比 i 小
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    result = Math.max(result, dp[i]);
  }
  return result;
};

// console.log(lengthOfLIS([11, 12, 13, 14, 15, 6, 7, 8, 101, 18]));
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));

// var lengthOfLIS = function(nums) {
//   if (!nums.length) return 0;
//   const min = Math.min(...nums);
//   const index = nums.findIndex(num => min === num);
//   if (index === nums.length - 1) return 1;
//   const map = new Map().set(min, [min]);
//   for (let i = index + 1; i < nums.length; i++) {
//     const element = nums[i];
//     for (const m of map.keys()) {
//       if (element > min && element > m) {
//         map.set(element, [...map.get(m), element]);
//       }
//     }
//     if (i === nums.length - 1) {
//       return map.get(element).length;
//     }
//   }
// };
