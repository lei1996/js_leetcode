// 面试题51. 数组中的逆序对
// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

// 示例 1:

// 输入: [7,5,6,4]
// 输出: 5

// 限制：

// 0 <= 数组长度 <= 50000

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  if (nums.length <= 1) return nums;

  let ans = 0;

  mergeSort(nums);

  return ans;

  function merge(leftArr, rightArr) {
    const result = [];

    while (leftArr.length > 0 && rightArr.length > 0) {
      if (leftArr[0] > rightArr[0]) {
        result.push(leftArr.shift());
        ans++;
      } else {
        result.push(rightArr.shift());
      }
    }
    
    return [...result, ...leftArr, ...rightArr];
  }

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const middle = arr.length >> 1;
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }
};

var reversePairs = function(nums) {
  return findInversePairNum(nums, 0, nums.length - 1);
};

function findInversePairNum(arr, start, end) {
  if (start >= end) return 0;

  const copy = new Array(end - start + 1);
  const len = (end - start) >> 1;
  const leftNum = findInversePairNum(arr, start, start + len);
  const rightNum = findInversePairNum(arr, start + len + 1, end);

  let i = start + len;
  let j = end;
  let copyIndex = end - start;
  let num = 0;
  while (i >= start && j >= start + len + 1) {
    if (arr[i] > arr[j]) {
      num += j - start - len;
      copy[copyIndex--] = arr[i--];
    } else {
      copy[copyIndex--] = arr[j--];
    }
  }

  while (i >= start) {
    copy[copyIndex--] = arr[i--];
  }

  while (j >= start + len + 1) {
    copy[copyIndex--] = arr[j--];
  }

  for (let k = start; k <= end; ++k) {
    arr[k] = copy[k - start];
  }

  return num + leftNum + rightNum;
}

console.log(reversePairs([7, 5, 6, 4]));
