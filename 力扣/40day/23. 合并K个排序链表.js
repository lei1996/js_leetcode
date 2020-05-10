// 23. 合并K个排序链表
// 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

// 示例:

// 输入:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 输出: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const arr = [];
  while (lists) {
    arr.push(lists.val);
    lists = lists.next;
  }

  const nums = quick3Sort(arr);

  console.log(nums);
  

  function quick3Sort(arr) {
    if (arr.length <= 1) return arr;

    const left = [];
    const center = [];
    const right = [];
    const pivot = arr[arr.length >> 1];

    for (const a of arr) {
      if (a < pivot) {
        left.push(a);
      } else if (a === pivot) {
        center.push(a);
      } else {
        right.push(a);
      }
    }

    return [...quick3Sort(left), ...center, ...quick3Sort(right)];
  }
};

// console.log(mergeKLists([
//   1->4->5,
//   1->3->4,
//   2->6
// ]));
