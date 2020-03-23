// // "use strict";
// // function test(name) {
// //   console.log(name);
// //   console.log(this);
// // }
// // test("Jerry");

// // ** 如果你传的 context 就 null 或者 undefined，那么 window 对象
// // 就是默认的 context（严格模式下默认 context 是 undefined）

// // function test(name) {
// //   console.log(name)
// //   console.log(this)
// // }
// // call前面传入 context 上下文, 后面传入 实参
// // test.call(undefined, 'Tom')

// // const obj = {
// //   name: "Jerry",
// //   greet: function() {
// //     console.log(this.name);
// //   }
// // };

// // obj.greet(); // 简写 语法糖
// // obj.greet.call(obj); // 完整写法， 可以手动指定this.

// // const obj = {
// //   name: "Jerry",
// //   greet: function() {
// //     console.log(this.name);
// //   }
// // };

// // obj.greet.call({ name: "lin" }); // 这里传入了一个 this

// // function Test() {
// //   this.name = "Tom";
// // }
// // let p = new Test(); // 构造函数的this 指向返回的对象
// // console.log(p.prototype); //undefined
// // console.log(p.__proto__); //Test {}
// // console.log(typeof p); // object
// // console.log(p.name); // Tom

// // const obj = {
// //   a: function() {
// //     console.log(this);
// //   }
// // };
// // obj.a(); // this 指向 obj 对象

// // const obj = {
// //   a: () => {
// //     console.log(this);
// //   }
// // };

// // obj.a(); // node环境是 {}  浏览器环境是window

// // obj.a.call('123'); // 箭头函数不能call 相当于硬绑定，一次绑定之后都不能再修改了.

// // const obj = {
// //   a: function() {
// //     console.log(this);
// //     setTimeout(function() {
// //       // 使用箭头函数的话 指向obj
// //       // 使用常规函数 指向TimeOut {} 这个对象
// //       console.log(this);
// //     }, 1000);
// //   }
// // };

// // obj.a.call(obj); //两个输出 this 都指向obj

// // const obj = {
// //   a: function() {
// //     console.log(this);
// //   },
// //   b: {
// //     c: function() {
// //       console.log(this);
// //     }
// //   }
// // };

// // obj.a(); // 打出的是obj对象, 相当于obj.a.call(obj)
// // // obj.a.call(obj);
// // obj.b.c(); //打出的是obj.b对象, 相当于obj.b.c.call(obj.b)
// // // obj.b.c.call(obj.b);

// // const obj = {
// //   a: function() {
// //     console.log(this);
// //   },
// //   b: {
// //     c: () => {
// //       console.log(this);
// //     }
// //   }
// // };

// // obj.a(); // 指向obj对象
// // obj.b.c(); // 指向window对象， node环境{}

// // const test = f => b => (a, b) => console.log(a + b);

// // test('1', '2');

// // ES5实现高阶函数，也叫柯里化
// // function add(x) {
// //   return function(y) {
// //     return y + x;
// //   };
// // }

// // var addTwo = add(2);
// // console.log(addTwo(3)); // 5
// // console.log(add(10)(11)); // 21

// // ES6写法
// // const add = x => y => y + x;
// // const add2 = add(2);

// // console.log(add2(4)); // 6
// // console.log(add(8)(7)); // 15

// // const square = x => x * x;

// const has = p => o => o.hasOwnProperty(p);
// const sortBy = p => (a, b) => a[p] > b[p];

// const hasPets = has("pets");
// const isEmployed = has("title");
// const byAge = sortBy("age");

// let result;
// let users = [
//   { name: "Qian", age: 27, pets: ["Bao"], title: "Consultant" },
//   { name: "Zeynep", age: 19, pets: ["Civelek", "Muazzam"] },
//   { name: "Yael", age: 52, title: "VP of Engineering" }
// ];

// let workers = users.filter(isEmployed);
// let petOwningWorkers = workers.filter(hasPets);
// let workersByAge = workers.sort(byAge);
// // console.log(workers);
// // console.log(petOwningWorkers);
// // console.log(workersByAge);

// result = users.filter(has("pets")).sort(sortBy("age"));
// // console.log(result);

// let user = { name: "Assata", age: 68, title: "VP of Operations" };
// if (isEmployed(user)) {
//   // console.log(1);
// }
// hasPets(user);
// has("age")(user);

// // const is = p => v => o => o.hasOwnProperty(p) && o[p] == v;
// const is = p => {
//   console.log(111);
//   console.log(p);
//   return v => {
//     console.log(222);
//     console.log(v);
//     return o => {
//       console.log(333);
//       console.log(o);
//       return o.hasOwnProperty(p) && o[p] == v;
//     };
//   };
// };

// // broken down:
// // outer: p => [inner1 function, uses p]
// // inner1: v => [inner2 function, uses p and v]
// // inner2: o => o.hasOwnProperty(p) && o[p] = v;

// const titleIs = is("title");

// const isContractor = titleIs("Contractor");

// // let contractors = user.filter(isContractor);
// // let developers = user.filter(titleIs("Developer"));

// user = { name: "Viola", age: 50, title: "Actress", pets: ["Zak"] };

// // console.log(isEmployed(user)); // true
// console.log(titleIs(user)); // false
// // console.log(isContractor(user)); // false

"use strict";
// function debounce(fn, wait) {
//   var timer = null;
//   return function () {
//       var context = this
//       console.log(this);
//       var args = arguments
//       if (timer) {
//           clearTimeout(timer);
//           timer = null;
//       }
//       timer = setTimeout(function () {
//         console.log(args);
//           fn.apply(context, args)
//       }, wait)
//   }
// }

// var fn = function () {
//   console.log('boom')
// }

// setInterval(debounce(fn,500),1000);

function debounce(fn, wait) {
  var timer = null;
  return function() {
    // console.log(this);
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      console.log(args);
      fn(args);
    }, wait);
  };
}
var fn = function() {
  console.log("boom");
};
setInterval(debounce(fn, 1000), 1100);

