// 面试题 01.06. 字符串压缩
// 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

// 示例1:

//  输入："aabcccccaaa"
//  输出："a2b1c5a3"
// 示例2:

//  输入："abbccd"
//  输出："abbccd"
//  解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
// 提示：

// 字符串长度在[0, 50000]范围内。

/**
 * @param {string} S
 * @return {string}
 */
// var compressString = function(S) {
//   if (S.length <= 1) return S;
//   let prev = "";
//   let count = 1;
//   let result = "";
//   for (let i = 1; i < S.length; i++) {
//     prev = S[i - 1];
//     console.log(prev);
//     if (prev !== S[i]) {
//       result += prev + count;
//       count = 1;
//       if (i === S.length - 1) {
//         result += S[i] + count;
//       }
//       continue;
//     } else if (prev === S[i] && i === S.length - 1) {
//       result += S[i] + ++count;
//     }
//     count++;
//   }
//   console.log(result);
//   return result.length < S.length ? result : S;
// };
var compressString = function(S) {
  if (!S.length) return "";
  let count = 1;
  let result = S[0];
  for (let i = 1; i < S.length; i++) {
    if (S[i - 1] === S[i]) {
      count++;
    } else {
      result += count + S[i];
      count = 1;
    }
  }
  result += count;
  return result.length < S.length ? result : S;
};

console.log(compressString("aabcccccaaa"));
console.log(compressString("abbccd"));
console.log(compressString("a"));
