// 3. 无重复字符的最长子串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 * 双指针 版本
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let result = 1;
  let left = 0;
  for (let i = 1; i < s.length; i++) {
    let count = 1;
    for (let j = left; j < i; j++) {
      if (s[i] === s[j]) {
        // 移动偏移量下标
        left = j + 1;
        count = 1;
      } else {
        count++;
      }
    }
    result = Math.max(result, count);
  }
  return result;
};
var lengthOfLongestSubstring1 = function (s) {
  if (s.length <= 1) return s.length;
  const dp = [1];
  const map = new Map().set(s[0], 1);
  for (let i = 1; i < s.length; i++) {
    let count = (map.get(s[i]) || 0) + 1;
    if(count === 1) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = 1;
    }
    map.set(s[i], count);
  }
  console.log(dp);
  
};

console.log(lengthOfLongestSubstring1(
  "abcabcbb"
));
// console.log(lengthOfLongestSubstring1(
//   "bwf"
// ));
// console.log(lengthOfLongestSubstring1(
//   "pwwkew"
// ));
// console.log(lengthOfLongestSubstring1(
//   "bbbbb"
// ));
