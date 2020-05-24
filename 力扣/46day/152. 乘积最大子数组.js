// 152. 乘积最大子数组
// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

//

// 示例 1:

// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
// 示例 2:

// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length <= 1) return nums[0];
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let max = 0;
    if (i === nums.length - 1) {
      max = nums[i];
    } else {
      max = Math.max(nums[i] * nums[i + 1], nums[i]);
    }
    result = Math.max(result, max);
  }
  return result;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2,0,-1]));
console.log(maxProduct([-2]));
console.log(maxProduct([0, 2]));
