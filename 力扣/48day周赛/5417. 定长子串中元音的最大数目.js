// 5417. 定长子串中元音的最大数目
// 给你字符串 s 和整数 k 。

// 请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。

// 英文中的 元音字母 为（a, e, i, o, u）。

// 示例 1：

// 输入：s = "abciiidef", k = 3
// 输出：3
// 解释：子字符串 "iii" 包含 3 个元音字母。
// 示例 2：

// 输入：s = "aeiou", k = 2
// 输出：2
// 解释：任意长度为 2 的子字符串都包含 2 个元音字母。
// 示例 3：

// 输入：s = "leetcode", k = 3
// 输出：2
// 解释："lee"、"eet" 和 "ode" 都包含 2 个元音字母。
// 示例 4：

// 输入：s = "rhythms", k = 4
// 输出：0
// 解释：字符串 s 中不含任何元音字母。
// 示例 5：

// 输入：s = "tryhard", k = 4
// 输出：1

// 提示：

// 1 <= s.length <= 10^5
// s 由小写英文字母组成
// 1 <= k <= s.length

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var maxVowels = function (s, k) {
//   const arr = ["a", "e", "i", "o", "u"];
//   let result = 0;

//   for (let i = 0; i < s.length - k + 1; i++) {
//     let ans = 0;
//     for (let j = i; j < i + k; j++) {
//       ans += search(s[j]);
//     }
//     result = Math.max(result, ans);
//     if (result === k) return k;
//   }
//   return result;

//   function search(ch) {
//     for (const a of arr) {
//       if (ch === a) {
//         return 1;
//       }
//     }
//     return 0;
//   }
// };
// var maxVowels = function (s, k) {
//   const fonts = "aeiou";
//   let result = 0;
//   const dp = [];

//   for (let i = 0; i < s.length; i++) {
//     if (fonts.includes(s[i])) {
//       dp[i] = 1;
//     } else {
//       dp[i] = 0;
//     }
//   }

//   for (let i = 0; i < s.length - k + 1; i++) {
//     let ans = 0;
//     for (let j = i; j < i + k; j++) {
//         ans += dp[j];
//     }
//     result = Math.max(result, ans);
//   }
//   return result;
// };
var maxVowels = function (s, k) {
  const fonts = "aeiou";
  const temp = [];

  let left = k,
    right = s.length;

  let ans = 0;
  for (let i = 0; i < k; i++) {
    if (fonts.includes(s[i])) {
      ans++;
      temp[i + 1] = 1;
    } else {
      temp[i + 1] = 0;
    }
  }
  temp[0] = ans;
  let result = temp[0];
  
  while (left < right) {
    let cnt = temp[0] - temp[left - k + 1];
    const curr = fonts.includes(s[left]) ? 1 : 0;
    
    temp[0] = cnt + curr;
    temp[left + 1] = curr;

    result = Math.max(result, temp[0]);
    if (result == k) return k;
    left++;
  }
  return result;
};

// console.log(maxVowels((s = "abciiidef"), (k = 3)));
console.log(maxVowels((s = "ibpbhixfiouhdljnjfflpapptrxgcomvnb"), (k = 33)));

// console.log(maxVowels((s = "aeiou"), (k = 2)));
// console.log(maxVowels((s = "leetcode"), (k = 3)));
// console.log(maxVowels((s = "rhythms"), (k = 4)));
// console.log(maxVowels((s = "tryhard"), (k = 4)));
