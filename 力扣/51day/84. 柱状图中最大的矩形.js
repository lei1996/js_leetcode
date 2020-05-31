// 84. 柱状图中最大的矩形
// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

// 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

// 示例:

// 输入: [2,1,5,6,2,3]
// 输出: 10

// 暴力解法
var largestRectangleArea1 = function (heights) {
  let result = 0;
  for (let i = 0; i < heights.length; i++) {
    let max = heights[i],
      min = heights[i];
    for (let j = i + 1; j < heights.length; j++) {
      min = Math.min(min, heights[j]);
      max = Math.max(max, min * (j - i + 1));
    }
    result = Math.max(result, max);
  }
  return result;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let len = heights.length;
  if (len <= 1) return heights[0] || 0;

  let area = 0; // 计算面积
  heights.unshift(0);
  heights.push(0);
  len += 2;

  const stack = [];
  stack.push(0);
  for (let i = 1; i < len; i++) {
    while (heights[stack[stack.length - 1]] > heights[i]) {
      let height = heights[stack.pop()];
      let width = i - stack[stack.length - 1] - 1;
      area = Math.max(area, width * height);
    }
    stack.push(i);
  }

  return area;
};


console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
