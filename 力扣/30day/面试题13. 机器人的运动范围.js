// 面试题13. 机器人的运动范围
// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

// 示例 1：

// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 1：

// 输入：m = 3, n = 1, k = 0
// 输出：1
// 提示：

// 1 <= n,m <= 100
// 0 <= k <= 20

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const dir = [
    // [-1, 0],
    [1, 0], // 右
    // [0, -1],
    [0, 1], // 下
  ];
  // 求数位和
  const getSum = (x) => {
    let res = 0;
    for (; x; x = Math.floor(x / 10)) {
      res += x % 10;
    }
    return res;
  };
  const set = new Set([0, 0]);
  let queue = [[0, 0]];

  while (queue.length) {
    const [x, y] = queue.shift();
    for (const d of dir) {
      const offsetX = x + d[0];
      const offsetY = y + d[1];

      if (
        offsetX >= m ||
        offsetY >= n ||
        getSum(offsetX) + getSum(offsetY) > k ||
        set.has(`${offsetX},${offsetY}`)
      ) {
        continue;
      }

      set.add(`${offsetX},${offsetY}`);
      queue.push([offsetX, offsetY]);
    }
  }
  return set.size;
};

console.log(movingCount((m = 2), (n = 3), (k = 1)));
console.log(movingCount((m = 3), (n = 1), (k = 0)));
