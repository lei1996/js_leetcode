// function ArrayList(){

//     var array = [];

//     this.insert = function(item){
//         array.push(item);
//     };

//     this.toString= function(){
//         return array.join();
//     };

//     this.quickSort = function(){
//         quick(array,  0, array.length - 1);
//     };

//     var swapQuickStort = function(array, index1, index2){
//         var aux = array[index1];
//         array[index1] = array[index2];
//         array[index2] = aux;
//     };

//     var partition = function(array, left, right) {

//         var pivot = array[Math.floor((right + left) / 2)],
//             i = left,
//             j = right;

//         // console.log('pivot is ' + pivot + '; left is ' + left + '; right is ' + right);

//         while (i <= j) {
//             while (array[i] < pivot) {
//                 i++;
//                 // console.log('i = ' + i);
//             }

//             while (array[j] > pivot) {
//                 j--;
//                 // console.log('j = ' + j);
//             }

//             if (i <= j) {
//                 // console.log('swap ' + array[i] + ' with ' + array[j]);
//                 swapQuickStort(array, i, j);
//                 i++;
//                 j--;
//             }
//         }

//         return i;//这是返回数组下标。注意i与方法二的low的意义不太一样。方法二的low就代表了正确的点
//                  //这里正确的点是在i-1，所以quick里面才有"index-1"与"index"本身
//     };

//     var quick = function(array, left, right){

//         var index;

//         if (array.length > 1) {

//             index = partition(array, left, right);

//             if (left < index - 1) {
//                 quick(array, left, index - 1);
//             }

//             if (index < right) {
//                 quick(array, index, right);//将index塞进去，说明index不代表一趟快排之后正确的位置
//                                            //因为如果代表的话，它是不需要参与之后的排序的
//             }
//         }
//         return array;
//     };
// }

// console.log('********** Quick Sort **********');
//  var array = new ArrayList();

// array.insert(3);
// array.insert(5);
// array.insert(1);
// array.insert(6);
// array.insert(4);
// array.insert(7);
// array.insert(2);

// console.log(array.toString());

// array.quickSort();

// console.log(array.toString());

var items = [3, 5, 3, 7, 6, 2, 9];
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  const pivot = items[Math.floor((right + left) / 2)]; //middle element
  let i = left,
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right, k) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (index === k) return items.slice(0, index + 1);
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1, k = 4);
console.log(sortedArray); //prints [2,3,5,6,7,9]
