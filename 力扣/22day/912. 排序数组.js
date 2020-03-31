// 912. 排序数组
// 给你一个整数数组 nums，请你将该数组升序排列。

// 示例 1：

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
// 示例 2：

// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]
//  

// 提示：

// 1 <= nums.length <= 50000
// -50000 <= nums[i] <= 50000

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  console.log(nums);

  return mergeSort(nums);
  // return quickSort(nums);
  // return quick3Sort(nums);
};

// 归并排序
function merge(leftArr, rightArr) {
  const result = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }
  return [...result, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const middle = arr.length >> 1;
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// 快排， 双路快排
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const base = arr.splice(arr.length >> 1, 1)[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), base, ...quickSort(right)];
}

// 三路快排
function quick3Sort(nums) {
  if (nums.length <= 1) return nums;

  const left = [];
  const center = [];
  const right = [];
  const pivot = nums[nums.length >> 1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else if (nums[i] === pivot) {
      center.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quick3Sort(left), ...center, ...quick3Sort(right)];
}

console.log(sortArray(nums = [5, 2, 3, 1]));
