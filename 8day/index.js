// // 创建对象的多种方式

// function createPerson(name) {
//   var o = new Object();
//   o.name = name;
//   o.getName = function () {
//     console.log(this.name);
//   }
//   return o;
// }

// var person1 = createPerson('kevin');
// console.log(person1)

// // function Person(name) {
// //   this.name = name;
// //   this.getName = function() {
// //     console.log(this.name);
// //   }
// // }

// // var person2 = new Person('kevin');
// // console.log(person2);

// // 构造函数模式优化
// function Person(name) {
//   this.name = name;
//   this.getName = getName;
// }

// function getName() {
//   console.log(this.name);
// }

// var person3 = new Person('kevin');
// console.log(person3);

// function Person(name) {

// }

// Person.prototype.name = 'kevin';
// Person.prototype.getName = function() {
//   console.log(this.name);
// }

// var person4 = new Person();
// console.log(person4);

// function Person(name) {
//   this.name = name;
// }

// Person.prototype = {
//   constructor: Person,
//   getName: function() {
//     console.log(this.name);
//   }
// }

// var person5 = new Person('kevin');
// console.log(person5);


// // 动态原型模式
// function Person(name) {
//   this.name = name;
//   if (typeof this.getName != 'function') {
//     Person.prototype.getName = function () {
//       console.log(this.name);
//     }
//   }
// }

// var person6 = new Person();
// console.log(person6)

// 原型链继承
function Parent() {
  this.name = 'kevin';
}

Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child() {

}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName());