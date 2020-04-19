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

/**
 * @param {number} n
 * @return {string[]}
 * 回朔法
 */
var generateParenthesis1 = function (n) {
  const ans = [];
  const backtrack = (ans, cur = "", open, close, max) => {
    if (cur.length === max * 2) {
      ans.push(cur);
      return;
    }
    if (open < max) {
      cur += "(";
      backtrack(ans, cur, open + 1, close, max);
      cur.substring(0, cur.length - 1);
    }
    if (close < open) {
      cur += ")";
      backtrack(ans, cur, open, close + 1, max);
      cur.substring(0, cur.length - 1);
    }
  };
  backtrack(ans, "", 0, 0, n);
  return ans;
};

console.log(generateParenthesis1((n = 3)));
