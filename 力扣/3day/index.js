// 1071. 字符串的最大公因子
// 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
// 返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

// 示例 1：

// 输入：str1 = "ABCABC", str2 = "ABC"
// 输出："ABC"
// 示例 2：

// 输入：str1 = "LEET", str2 = "CODE"
// 输出：""

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// var gcdOfStrings = function(str1, str2) {
//   if (str1 + str2 === str2 + str1) {
//     var min = str1 > str2 ? str2 : str1;
//     var result = [min[0]];
//     console.log(result);
//     for (let index = 1; index < min.length; index++) {
//       const element = min[index];
//       if (result[0] === element) break;
//       result.push(element);
//     }

//     return result.join("");
//   }
//   return "";
// };

var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return ''
  // 他这题的思路是用了一个递归，直到被取模为0
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b))
  return str1.substring(0, gcd(str1.length, str2.length))
};

console.log(
  gcdOfStrings(
    "OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO",
    "OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO"
  )
);
