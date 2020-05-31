// 5418. 二叉树中的伪回文路径
// 给你一棵二叉树，每个节点的值为 1 到 9 。我们称二叉树中的一条路径是 「伪回文」的，当它满足：路径经过的所有节点值的排列中，存在一个回文序列。

// 请你返回从根到叶子节点的所有路径中 伪回文 路径的数目。

// 示例 1：

// 输入：root = [2,3,1,3,1,null,1]
// 输出：2
// 解释：上图为给定的二叉树。总共有 3 条从根到叶子的路径：红色路径 [2,3,3] ，绿色路径 [2,1,1] 和路径 [2,3,1] 。
//      在这些路径中，只有红色和绿色的路径是伪回文路径，因为红色路径 [2,3,3] 存在回文排列 [3,2,3] ，绿色路径 [2,1,1] 存在回文排列 [1,2,1] 。
// 示例 2：

// 输入：root = [2,1,1,1,3,null,null,null,null,null,1]
// 输出：1
// 解释：上图为给定二叉树。总共有 3 条从根到叶子的路径：绿色路径 [2,1,1] ，路径 [2,1,3,1] 和路径 [2,1] 。
//      这些路径中只有绿色路径是伪回文路径，因为 [2,1,1] 存在回文排列 [1,2,1] 。
// 示例 3：

// 输入：root = [9]
// 输出：1

// 提示：

// 给定二叉树的节点数目在 1 到 10^5 之间。
// 节点值在 1 到 9 之间。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
  const g_num = new Array(10).fill(0);
  let result = 0;

  g_num[root.val]++;
  dfs(root);

  function dfs(root) {
    if (!root.left && !root.right) {
      if (is_palindrome()) {
        result++;
      }
      return;
    }

    if (root.left) {
      g_num[root.left.val]++;
      dfs(root.left);
      g_num[root.left.val]--;
    }
    if (root.right) {
      g_num[root.right.val]++;
      dfs(root.right);
      g_num[root.right.val]--;
    }
  }

  function is_palindrome() {
    let odd_cnt = 0;
    for (let i = 0; i < 10; i++) {
      // 判断是否为 奇数 然后自增 计数器 超过 1 return0
      if (g_num[i] % 2 === 1) {
        odd_cnt++;

        if (odd_cnt > 1) {
          // 表示已经不是回文数了
          return 0;
        }
      }
    }
    return 1;
  }
};

console.log(pseudoPalindromicPaths((root = [2, 3, 1, 3, 1, null, 1])));
