// 22. 括号生成
// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 * by 碎碎酱
 */
var generateParenthesis = function (n) {
  const ans = [];
  function walk(str, l, r) {
    if (l >= n && r >= n) {
      ans.push(str);
      return;
    }
    if (l <= r) {
      walk(str + "(", l + 1, r);
    } else {
      if (l < n) {
        walk(str + "(", l + 1, r);
      }
      if (r < n) {
        walk(str + ")", l, r + 1);
      }
    }
  }
  walk("", 0, 0);
  return ans;
};

console.log(generateParenthesis((n = 3)));
