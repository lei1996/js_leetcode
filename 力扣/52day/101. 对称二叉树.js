// 101. 对称二叉树
// 给定一个二叉树，检查它是否是镜像对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// 进阶：

// 你可以运用递归和迭代两种方法解决这个问题吗？

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 深度搜索
var isSymmetric = function (root) {
  return check(root, root);

  function check(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;

    return t1.val == t2.val && check(t1.left, t2.right) && check(t1.right, t2.left);
  }
};

// 队列 广搜
var isSymmetric = function (root) {
  return check(root, root);

  function check(t1, t2) {
    const queue = [];
    queue.push(t1, t2);
    while (queue.length > 0) {
      t1 = queue.shift();
      t2 = queue.shift();

      if (!t1 && !t2) {
        continue;
      }
      if ((!t1 || !t2) || (t1.val != t2.val)) {
        return false;
      }

      queue.push(t1.left, t2.right, t1.right, t2.left);
    }
    return true;
  }
};

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]));
