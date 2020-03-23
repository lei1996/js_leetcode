// 1013. 将数组分成和相等的三个部分
// 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

// 形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ...
// + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1]
// + ... + A[A.length - 1]) 就可以将数组三等分。

var canThreePartsEqualSum = function(A) {
  const arrSum = A.reduce((curr, next) => curr += next, 0);
  if (arrSum % 3 !== 0) return false;
  const avg = arrSum / 3;
  let currentSum = 0;
  let count = 0;

  for (const a of A) {
    currentSum += a;
    if (currentSum === avg) {
      currentSum = 0;
      count++;
    }
  }
  return count >= 3;
};

console.log(canThreePartsEqualSum([10, -10, 10, -10, 10, -10, 10, -10]));
