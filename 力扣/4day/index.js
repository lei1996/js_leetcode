// 169. 多数元素
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 示例 1:

// 输入: [3,2,3]
// 输出: 3
// 示例 2:

// 输入: [2,2,1,1,1,2,2]
// 输出: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
// 自己写的
// var majorityElement = function(nums) {
//   const num = nums.length / 2;
//   const map = new Map();
//   for (const a of nums) {
//     if (map.has(a)) {
//       map.set(a, map.get(a) + 1);
//       continue;
//     }
//     map.set(a, 1);
//   }

//   for (let item of map.entries()) {
//     if (item[1] > num) return item[0]
//   }
// };

// 碎碎酱写的
// var majorityElement = function(nums) {
//   const map = new Map();
//   const half = nums.length >> 1;
//   for (const n of nums) {
//     // 如果map.get(n) 不存在 则为 0 + 1
//     const count = (map.get(n) || 0) + 1;
//     if (count > half) {
//       return n;
//     }
//     map.set(n, count);
//   }
//   return null;
// };

var majorityElement = function(nums) {
  // 先排序，然后找中位数
  nums.sort((a,b)=>a-b);
  console.log(nums);
  console.log(Math.floor(nums.length/2));
  return nums[Math.floor(nums.length/2)]
}

console.log(majorityElement([3, 2, 3, 5, 4, 3, 3]));
