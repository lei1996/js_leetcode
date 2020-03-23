// // 给你一个字符串 s ，请你根据下面的算法重新构造字符串：

// // 从 s 中选出 最小 的字符，将它 接在 结果字符串的后面。
// // 从 s 剩余字符中选出 最小 的字符，且该字符比上一个添加的字符大，将它 接在 结果字符串后面。
// // 重复步骤 2 ，直到你没法从 s 中选择字符。
// // 从 s 中选出 最大 的字符，将它 接在 结果字符串的后面。
// // 从 s 剩余字符中选出 最大 的字符，且该字符比上一个添加的字符小，将它 接在 结果字符串后面。
// // 重复步骤 5 ，直到你没法从 s 中选择字符。
// // 重复步骤 1 到 6 ，直到 s 中所有字符都已经被选过。

var sortString = function(s) {
    const chars = s.split('').sort();
    let result = []; // 数组的效率比字符串的效率高。 在有循环的情况下.
    let count = chars.length;
    let i = 0;
    let di = 1;
    let prev = ''; // 始终记录上一个值
    let time = new Date();

    // var whileCount = 0;
    while (count) {
        // whileCount++;
        // 如果当前
        if (chars[i] && (prev === '' || chars[i] !== prev)) {
            // console.log(chars[i]);
            result.push(chars[i]);
            prev = chars[i];
            chars[i] = '';
            count--;
            // console.log(`count: ${count}`);
        }
        i += di;
        // console.log(i);
        if (i === chars.length - 1) {
            di = -1;
            // console.log(di);
            prev = '';
        } else if (i === 0) {
            di = 1;
            // console.log(di);
            prev = '';
        }
    }

    console.log(new Date() - time);

    return result.join('');
};

console.log(sortString('aaaabbbbcccc'));
