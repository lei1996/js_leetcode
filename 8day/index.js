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

// // 原型链继承
// function Parent() {
//   this.name = 'kevin';
// }

// Parent.prototype.getName = function () {
//   console.log(this.name);
// }

// function Child() {

// }

// Child.prototype = new Parent();

// var child1 = new Child();

// console.log(child1.getName());

// 2.
// function Parent() {
//   this.names = ['kevin', 'daisy'];
// }

// function Child() {

// }

// Child.prototype = new Parent();

// var child1 = new Child();

// child1.names.push('tass');

// console.log(child1.names);

// var child2 = new Child();

// // 实例里的names 是共享的
// console.log(child2.names);

// 借用构造函数（经典继承）
// function Parent() {
//   this.names = ['kevin', 'daisy'];
// }

// function Child() {
//   Parent.call(this);
// }

// var child1 = new Child();

// child1.names.push('yayu');

// console.log(child1.names);

// var child2 = new Child();

// console.log(child2.names);

// 优点： 
// 1. 避免了引用类型的属性被所有实例共享
// 2. 可以在 Child 中向 Parent 传参
// 例子:
// function Parent(name) {
//   this.name = name;
// }

// function Child(name) {
//   Parent.call(this, name);
// }

// var child1 = new Child('kevin');

// console.log(child1.name);

// var child2 = new Child('daisy');

// console.log(child2.name);

// 缺点：
// 方法都在构造函数中定义，每次创建实例都会创建一遍方法。

// 3. 组合继承
// 原型链继承和经典继承双剑合璧
// function Parent(name) {
//   this.name = name;
//   this.colors = ['red', 'blue', 'green'];
// }

// Parent.prototype.getName = function () {
//   console.log(this.name);
// }

// function Child(name, age) {
//   Parent.call(this, name);
//   this.age = age;
// }

// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// var child1 = new Child('kevin', '18');

// child1.colors.push('black');

// console.log(child1.name);
// console.log(child1.age);
// console.log(child1.colors);

// var child2 = new Child('daisy', '20');

// console.log(child2.name);
// console.log(child2.age);
// console.log(child2.colors);

// 优点： 融合原型链继承和构造函数的优点，是JavaScript中最常用的继承模式.

// 4. 原型式继承
// function createObj(o) {
//   function F() { }
//   F.prototype = o;
//   return new F();
// }
// 就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型.
// 缺点:
// 包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样.

// var person = {
//   name: 'kevin',
//   friends: ['daisy', 'kelly']
// }

// var person1 = createObj(person);
// var person2 = createObj(person);

// person1.name = 'person1';
// console.log(person1.name);
// console.log(person2.name);

// person1.friends.push('taylor');
// console.log(person2.friends);

// 注意： 修改person1.name 的值， person2.name 的值并未发生改变，并不是因为person1 和 person2
// 有独立的name 值， 而是因为 person1.name = 'person1'， 给person1 添加了一个name 值，并非修改了原型上的 name 值。

// 5. 寄生式继承
// 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，
// 最后放回对象。

function createObj(o) {
  var clone = Object.create(o);
  clone.sayName = function() {
    console.log('hi');
  }
  return clone;
}
// 缺点： 跟借用构造函数模式一样，每次创建对象都会创建一遍方法。

// 6. 寄生组合式继承
// var F = function () {}
// F.prototype = Parent.prototype;

// Child.prototype = new F();

// var child1 = new Child('kevin', '18');

// console.log(child1);


function Parent (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child (name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 最后封装一下 这个继承方法
function object(o) {
  function F(){}
  F.prototype = o;
  return new F();
}

function prototype(child, parent) {
  var prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

var child = new prototype(Child, Parent);
console.log(child);