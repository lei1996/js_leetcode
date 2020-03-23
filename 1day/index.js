// function fn1() {
//   let fn2 = function() {
//     console.log(this); // 浏览器环境是window node环境是global
//     fn3();
//   };
//   console.log(this); // 浏览器环境是window node环境是global
//   fn2();
// }

// function fn3() {
//   console.log(this); // 浏览器环境是window node环境是global
// }

// fn1();

// function fn() {
//   console.log(this); //window
//   console.log(this.name);
// }

// function fn1() {
//   "use strict";
//   console.log(this); //undefined
//   console.log(this.name);
// }

// var name = "听风是风";

// fn();
// fn1(); //TypeError: Cannot read property 'a' of undefined

// "use strict";
// var name = '听风是风';
// var name2 = 'asdasd';
// function fn() {
//     console.log(this); //undefined
//     // console.log(this.name);//报错
// };
// function fn2() {
//     console.log(this); //undefined
//     console.log(this.name2);//报错
// };
// fn();
// fn2();

// var name = "听风是风";
// function fn() {
//   console.log(this); //window
//   console.log(this.name); //听风是风   node环境是undefined
//   console.log("123"); // 123
// }

// (function() {
//   "use strict";
//   fn();
// })();

// useFormInput = () => {
//   console.log(this); // 指向 window

//   function handleChange(event) {
//     // const newValue = useFormInput.handlenumber(event, minimumValue);
//     console.log(this); // 指向 window
//   }
//   handleChange();
// };

useFormInput = asd => {
  console.log(this); // 指向 window

  function handleChange(event) {

    // const newValue = useFormInput.handlenumber(event, minimumValue);
    console.log(this.handleType);
  }
  handleChange.prototype.handleType = () => {
    return 1;
  };
  handleChange();
};