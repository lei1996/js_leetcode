// new 关键字
// 访问到 Otaku 构造函数里的属性
// 访问到 Otaku.prototype 中的属性

// Otaku 御宅族，简称宅
// function Otaku(name, age) {
//   this.name = name;
//   this.age = age;

//   this.habit = "Games";
// }

// 因为缺乏锻炼的缘故，身体强度让人担忧
Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function() {
  console.log("I am " + this.name);
};

// var person = new Otaku("Kevin", "18");

// console.log(person.name); // Kevin
// console.log(person.habit); // Games
// console.log(person.strength); // 60

// person.sayYourName(); // I am Kevin

// console.log(person.name);
// console.log(person.habit);
// console.log(person.strength);
// console.log(person.age);

function objectFactory() {
  var obj = new Object();

  Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
}

function Otaku(name, age) {
  this.strength = 60;
  this.age = age;

  return "handsome boy";
}

// var person = objectFactory(Otaku, "Kevin", "18");
var person = new Otaku("Kevin", "18");

console.log(person.name);
console.log(person.habit);
console.log(person.strength);
console.log(person.age);

// person.sayYourName(); // I am Kevin
