// 面试题 01.07. 旋转矩阵
// 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

// 不占用额外内存空间能否做到？

// 示例 1:

// 给定 matrix =
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// 示例 2:

// 给定 matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 额外空间 旋转
 */
var rotate = function (matrix) {
  const arr = [];
  for (const m of matrix) arr.push([...m]);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(i, j);
      matrix[i][j] = arr[arr.length - 1 - j][i];
    }
  }
  return matrix;
};

var rotate1 = function (matrix) {
  // 原地旋转 错误
  const n = matrix.length;
  for (let i = 0; i < n / 2; ++i) {
    for (let j = 0; j < (n + 1) / 2; ++j) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
  return matrix;
};

console.log(
  rotate(
    (matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  )
);
console.log(
  rotate(
    (matrix = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ])
  )
);
