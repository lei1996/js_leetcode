// 1160. 拼写单词
// 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

// 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

// 注意：每次拼写时，chars 中的每个字母都只能用一次。

// 返回词汇表 words 中你掌握的所有单词的 长度之和。

// 示例 1：

// 输入：words = ["cat","bt","hat","tree"], chars = "atach"
// 输出：6
// 解释：
// 可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
// 示例 2：

// 输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// 输出：10
// 解释：
// 可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 * 执行用时 : 312 ms
 * 内存消耗 : 40.7 MB 有性能损耗
 */
var countCharacters = function(words, chars) {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    let charsArr = chars.split("");
    let element = words[i].split("");

    for (let j = 0; j < charsArr.length; j++) {
      const index = element.indexOf(charsArr[j]);
      console.log(index);
      if (index > -1) {
        element[index] = "";
        charsArr[j] = "";
      }
      console.log(charsArr);
    }
    if (element.join("") === "") result += words[i].length;
  }
  return result;
};

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 * 碎碎酱
 */
var countCharacters2 = function(words, chars) {
  function getCode(str, i) {
    return str.charCodeAt(i) - 97;
  }

  const arr = new Array(26).fill(0);
  for (let i = 0; i < chars.length; i++) {
    arr[getCode(chars, i)]++;
  }

  let result = 0;
  for (let i = 0; i < words.length; i++) {
    let j = 0;
    while (j < words[i].length) {
      arr[getCode(words[i], j)]--;
      if (arr[getCode(words[i], j)] < 0) {
        break;
      }
      j++;
    }
    if (j === words[i].length) {
      result += words[i].length;
    }
    while (j >= 0) {
      arr[getCode(words[i], j)]++;
      j--;
    }
  }
  return result;
};

// console.log(
//   countCharacters((words = ["cat", "bt", "hat", "tree"]), (chars = "atach"))
// );
console.log(
  countCharacters2((words = ["cat", "bt", "hat", "tree"]), (chars = "atach"))
);
// console.log(
//   countCharacters(
//     (words = ["hello", "world", "leetcode"]),
//     (chars = "welldonehoneyr")
//   )
// );
console.log(
  countCharacters2(
    (words = ["hello", "world", "leetcode"]),
    (chars = "welldonehoneyr")
  )
);
