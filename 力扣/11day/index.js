// 面试题40. 最小的k个数
// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

// 示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]

// 限制：

// 0 <= k <= arr.length <= 10000
// 0 <= arr[i] <= 10000

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k);
};

// 快排
var getLeastNumbers1 = function(arr, k) {
  const length = arr.length;
  if (length <= k) return arr;

  let left = 0,
    right = length - 1;
  let index = parttion(arr, left, right);

  while (index !== k) {
    if (index < k) {
      left = index + 1;
      index = parttion(arr, left, right);
    } else if (index > k) {
      right = index - 1;
      index = parttion(arr, left, right);
    }
  }
  return arr.slice(0, k);
};

function parttion(nums, start, end) {
  // nums[nums.length >> 1]
  const k = nums[start];
  let left = start + 1,
    right = end;
  while (1) {
    // 当左边的数小于 基准值时
    while (left <= end && nums[left] <= k) ++left;

    // 当右边的数大于 基准值时
    while (right >= start + 1 && nums[right] >= k) --right;

    if (left >= right) {
      break;
    }
    [nums[left], nums[right]] = [nums[right], nums[left]];
    ++left;
    --right;
  }
  [nums[right], nums[start]] = [nums[start], nums[right]];
  return right;
}

// 最大堆
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

class MaxHeap {
  constructor(arr = []) {
    this.container = [];
    if (Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this));
    }
  }

  insert(data) {
    const { container } = this;

    container.push(data);
    let index = container.length - 1;
    while (index) {
      let parent = Math.floor((index - 1) / 2);
      if (container[index] <= container[parent]) {
        break;
      }
      swap(container, index, parent);
      index = parent;
    }
  }

  extract() {
    const { container } = this;
    if (!container.length) {
      return null;
    }

    swap(container, 0, container.length - 1);
    const res = container.pop();
    const length = container.length;
    let index = 0,
      exchange = index * 2 + 1;

    while (exchange < length) {
      // 如果有右节点，并且右节点的值大于左节点的值
      let right = index * 2 + 2;
      if (right < length && container[right] > container[exchange]) {
        exchange = right;
      }
      if (container[exchange] <= container[index]) {
        break;
      }
      swap(container, exchange, index);
      index = exchange;
      exchange = index * 2 + 1;
    }

    return res;
  }

  top() {
    if (this.container.length) return this.container[0];
    return null;
  }
}

var getLeastNumbers2 = function(arr, k) {
  const length = arr.length;
  if (length <= k) return arr;

  const heap = new MaxHeap(arr.slice(0, k));
  for (let i = k; i < length; ++i) {
    if (heap.top() > arr[i]) {
      heap.extract();
      heap.insert(arr[i]);
    }
  }
  return heap.container;
};

// console.log(getLeastNumbers((arr = [3, 2, 1]), (k = 2)));
// console.log(getLeastNumbers(arr = [0,1,2,1], k = 1));
// console.log(getLeastNumbers1((arr = [3, 2, 1]), (k = 2)));
// console.log(getLeastNumbers1((arr = [2, 8, 1, 1, 0, 11, -1, 0]), (k = 3)));
console.log(getLeastNumbers2((arr = [3, 2, 1]), (k = 2)));
// console.log(getLeastNumbers2((arr = [0, 1, 2, 1]), (k = 1)));
