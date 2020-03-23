// function curriedAdd(x) {
//   return function(y) {
//     return x + y;
//   };
// }

function add(x, y) {
  return x + y;
}

// function currying(fn, ...args1) {
//   if (args1.length > fn.length) {
//     return fn(...args);
//   }

//   return function(...args2) {
//     return fn(...args1, ...args2);
//   };
// }

// var increment = currying(add, 10)(2);

// console.log(increment);
// // console.log(curriedAdd(1)(2));

// var curry = fn =>
//     judge = (...args) =>
//         args.length === fn.length
//             ? fn(...args)
//             : (...arg) => judge(...args, ...arg)

// curry(add)(1)(2)(3);

// function curry(fn, ...args) {
//   return (..._arg) => {
//     return fn(...args, ..._arg);
//   };
// }

// function sum1() {
//   const argList = [...arguments];

//   const fn = function() {
//     argList.push(...arguments);
//     return fn;
//   };

//   fn.toString = function() {
//     return argList.reduce((a, b) => a + b);
//   };

//   return fn;
// }

// console.log(sum1(1,3,4,56)(3)(4, 5, 6)(7).toString());

// console.log(curry(add, 1)(2));

// function sum(a, b, c) {
//   return a + b + c;
// }

// function curry(fn) {
//   const argList = [...arguments].splice(1);
//   return function() {
//     const newArgList = [...argList, ...arguments];
//     if (newArgList.length < fn.length) {
//       return curry.call(this, fn, ...newArgList);
//     } else {
//       return fn.call(this, ...newArgList);
//     }
//   };
// }

// const sumAll = curry(sum);
// console.log(sumAll(1)(2, 3));



const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const trace = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
};
// The curried version of trace()
// saves us from writing all this code...
const traceAfterG = value => {
  const label = 'after g';
  console.log(`${ label }: ${ value }`);
  return value;
};
const g = n => n + 1;
const f = n => n * 2;
const h = pipe(
  g,
  traceAfterG,
  f,
  trace('after f'),
);
h(20);