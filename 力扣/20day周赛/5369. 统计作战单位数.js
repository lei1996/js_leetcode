// 5369. 统计作战单位数

// n 名士兵站成一排。每个士兵都有一个 独一无二 的评分 rating 。

// 每 3 个士兵可以组成一个作战单位，分组规则如下：

// 从队伍中选出下标分别为 i、j、k 的 3 名士兵，他们的评分分别为 rating[i]、rating[j]、rating[k]
// 作战单位需满足： rating[i] < rating[j] < rating[k] 或者 rating[i] > rating[j] > rating[k] ，其中  0 <= i < j < k < n
// 请你返回按上述条件可以组建的作战单位数量。每个士兵都可以是多个作战单位的一部分。

// 示例 1：

// 输入：rating = [2,5,3,4,1]
// 输出：3
// 解释：我们可以组建三个作战单位 (2,3,4)、(5,4,1)、(5,3,1) 。
// 示例 2：

// 输入：rating = [2,1,3]
// 输出：0
// 解释：根据题目条件，我们无法组建作战单位。
// 示例 3：

// 输入：rating = [1,2,3,4]
// 输出：4

// 提示：

// n == rating.length
// 1 <= n <= 200
// 1 <= rating[i] <= 10^5

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  if (rating.length < 3) return 0;
  let result = 0;

  for (let i = 0; i < rating.length - 2; i++) {
    // console.log(rating[i]);
    for (let j = rating.length - 2; j > i; j--) {
      // console.log(rating[j]);
      for (let k = rating.length - 1; k > j; k--) {
        // console.log(rating[k]);
        // console.log(k);
        if (
          rating[i] < rating[j] && rating[j] < rating[k] ||
          rating[i] > rating[j] && rating[j] > rating[k]
        ) {
          result++;
        }
      }
    }
  }
  return result;
};
console.log(numTeams((rating = [2, 5, 3, 4, 1])));
