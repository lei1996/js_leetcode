// 820. 单词的压缩编码
// 给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。

// 例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

// 对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

// 那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

// 示例：

// 输入: words = ["time", "me", "bell"]
// 输出: 10
// 说明: S = "time#bell#" ， indexes = [0, 2, 5] 。

/**
 * @param {string[]} words
 * @return {number}
 * hash-set
 */
var minimumLengthEncoding = function (words) {
    const set = new Set(words);
    for (const word of set) {
        for (let i = 1; i < word.length; i++) {
            const temp = word.slice(i);
            set.has(temp) && set.delete(temp);
        }
    }
    const res = [...set].join('#').length + 1;
    return res;
};

// 字典树
var minimumLengthEncoding1 = function (words) {
    function TreeNode(val) {
        this.isEnd = false;
        this.children = {};
        this.val = val;
    }

    class Trie {
        constructor() {
            this.tree = new TreeNode(null);
        }

        // 单词倒序插入字典树
        insert(word) {
            let tree = this.tree;
            let n = word.length, index = n - 1;
            while (index >= 0) {
                let curr = word.charAt(index);
                if (tree.children[curr] === undefined) {
                    tree.children[curr] = new TreeNode(curr);
                }

                tree = tree.children[curr];
                index--;
            }
            tree.isEnd = true;
        }

        // 查找单词是否存在于字典树中
        search(word) {
            let tree = this.tree;
            let n = word.length, index = n - 1, flag = true;
            while (index >= 0) {
                let curr = word.charAt(index);
                if (tree.children[curr] === undefined) {
                    flag = false;
                    break;
                }

                tree = tree.children[curr];
                index--;
            }
            return flag;
        }
    }

    words = [...new Set(words)];
    words.sort((a, b) => b.length - a.length);

    let wordTree = new Trie(), long = 0;
    for (let i = 0; i < words.length; i++) {
        let c = words[i];
        if (!wordTree.search(c)) {
            wordTree.insert(c);
            long += (c.length + 1);
        }
    }

    return long;
};

console.log(minimumLengthEncoding(words = ["atime", "btime", "time"]));
console.log(minimumLengthEncoding(words = ["time", "atime", "btime"]));
console.log(minimumLengthEncoding(words = ["time", "time", "time", "time"]));
console.log(minimumLengthEncoding(words = ["time", "me", "bell"]));
console.log(minimumLengthEncoding(words = ["me", "time"]));
console.log(minimumLengthEncoding1(words = ["atime", "btime", "time"]));
console.log(minimumLengthEncoding1(words = ["time", "atime", "btime"]));
console.log(minimumLengthEncoding1(words = ["time", "time", "time", "time"]));
console.log(minimumLengthEncoding1(words = ["time", "me", "bell"]));
console.log(minimumLengthEncoding1(words = ["me", "time"]));