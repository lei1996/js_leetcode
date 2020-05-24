// 5396. 连续字符
// 给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。

// 请你返回字符串的能量。

// 示例 1：

// 输入：s = "leetcode"
// 输出：2
// 解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。
// 示例 2：

// 输入：s = "abbcccddddeeeeedcba"
// 输出：5
// 解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
// 示例 3：

// 输入：s = "triplepillooooow"
// 输出：5
// 示例 4：

// 输入：s = "hooraaaaaaaaaaay"
// 输出：11
// 示例 5：

// 输入：s = "tourist"
// 输出：1

// 提示：

// 1 <= s.length <= 500
// s 只包含小写英文字母。

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let left = 0;
  let right = s.length;
  let lastText = '';
  let ans = 0;
  let result = 0;
  while (left < right) {
    if (lastText != '' && lastText === s[left]) {
      ans++;
    } else {
      ans = 1;
      lastText = s[left];
    }
    result = Math.max(result, ans);
    left++;
  }
  return result;
};

console.log(maxPower(s = "leetcode"));
console.log(maxPower(s = "abbcccddddeeeeedcba"));
console.log(maxPower(s = "triplepillooooow"));
console.log(maxPower(s = "hooraaaaaaaaaaay"));
console.log(maxPower(s = "tourist"));
