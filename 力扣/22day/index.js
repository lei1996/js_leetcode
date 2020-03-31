// N个数字4个一组排列组合，列出（打印）所有的组合。（N >= 4）

var nm = function (n) {
    if (n < 4) return -1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                for (let m = 0; m < n; m++) {
                    if (i === j || j === k || k === m || i === k || i === m || j === m) continue;
                    console.log(i, j, k, m);
                }
            }
        }
    }
}

console.log(nm(4));
