// N个数字4个一组排列组合，列出（打印）所有的组合。（N >= 4）

var nm = function (n) {
    if (n < 4) return -1;
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                for (let m = 0; m < arr.length; m++) {
                    if (i === j || j === k || k === m || i === k || i === m || j === m) continue;
                    console.log(i, j, k, m);
                }
            }
        }
    }
}

console.log(nm(200));
