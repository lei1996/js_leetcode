1 常规函数的写法
函数声明(声明式写法)
function test(name) {
    console.log(name);
}
test('Jerry');

赋值式写法(函数表达式)
let f = function(name) {
    console.log(name);
}
f('Tom');

2 箭头函数的写法 
const test = (name) => {
    console.log(name);
}
test('Jerry');

如果参数只有一个，可以不加括号 
如果函数体只有一句话，可以不加花括号 
如果函数体没有括号，可以不写return
简写
const test = name => console.log(name)
test('Jerry');

3 函数调用
简写
function test(name) {
    console.log(name);
    console.log(this);
}
test('Jerry');
完整写法
function test(name) {
    console.log(name);
    console.log(this);
}
test.call(undefiend, 'Tom');

** 如果你传的 context 就 null 或者 undefined，那么 window 对象就是默认的 context（严格模式下默认 context 是 undefined）