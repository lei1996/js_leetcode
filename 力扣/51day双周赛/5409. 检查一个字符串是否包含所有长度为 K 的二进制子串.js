// 5409. 检查一个字符串是否包含所有长度为 K 的二进制子串
// 给你一个二进制字符串 s 和一个整数 k 。

// 如果所有长度为 k 的二进制字符串都是 s 的子串，请返回 True ，否则请返回 False 。

// 示例 1：

// 输入：s = "00110110", k = 2
// 输出：true
// 解释：长度为 2 的二进制串包括 "00"，"01"，"10" 和 "11"。它们分别是 s 中下标为 0，1，3，2 开始的长度为 2 的子串。
// 示例 2：

// 输入：s = "00110", k = 2
// 输出：true
// 示例 3：

// 输入：s = "0110", k = 1
// 输出：true
// 解释：长度为 1 的二进制串包括 "0" 和 "1"，显然它们都是 s 的子串。
// 示例 4：

// 输入：s = "0110", k = 2
// 输出：false
// 解释：长度为 2 的二进制串 "00" 没有出现在 s 中。
// 示例 5：

// 输入：s = "0000000001011100", k = 4
// 输出：false

// 提示：

// 1 <= s.length <= 5 * 10^5
// s 中只含 0 和 1 。
// 1 <= k <= 20

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  let cnt0 = 0;
  cnt1 = 0;
  let max0 = 0;
  max1 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "0") {
      cnt0++;
      if (s[i - 1] == "1" || s[i - 1] == "") {
        cnt0 = 1;
      }
      cnt1 = 0;
    } else if (s[i] == "1") {
      cnt1++;
      if (s[i - 1] == "0" || s[i - 1] == "") {
        cnt1 = 1;
      }
      cnt0 = 0;
    }

    max0 = Math.max(max0, cnt0);
    max1 = Math.max(max1, cnt1);
    last = s[i];
  }

  console.log(max0, max1);

  if (max0 >= k && max1 >= k) {
    return true;
  }
  return false;
};

console.log(hasAllCodes((s = "01100"), (k = 2)));
console.log(hasAllCodes((s = "00110110"), (k = 2)));
console.log(hasAllCodes((s = "00110"), (k = 2)));
console.log(hasAllCodes((s = "0110"), (k = 1)));
console.log(hasAllCodes((s = "0110"), (k = 2)));
console.log(hasAllCodes((s = "0000000001011100"), (k = 4)));
