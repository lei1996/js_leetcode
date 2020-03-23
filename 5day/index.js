// JavaScript深入之参数按值传递

// 按值传递
// var value = 1;
// function foo(v) {
//   v = 2;
//   console.log(v);
// }

// foo(value);
// console.log(value);

// 引用传递
// var obj = {
//   value: 1
// };

// function foo(o) {
//   o.value = 2;
//   console.log(o.value);
// }
// foo(obj);
// console.log(obj.value);

// 第三种传递方式 - 共享传递
var obj = {
  value: 1
};

function foo(o) {
  o = 2;
  console.log(o);
}

foo(obj);
console.log(obj.value);
