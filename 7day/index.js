// 类数组对象与arguments

var array = ["name", "age", "sex"];

var arrayLike = {
  0: "name",
  1: "age",
  2: "sex",
  length: 3
};

// 读
console.log(array[0]);
console.log(arrayLike[0]);

// 写
array[0] = "new name";
arrayLike[0] = "new name";

// 长度
console.log(array.length);
console.log(arrayLike.length);

// arrayLike.push('4'); // TypeError:

// 调用数组方法
console.log(Array.prototype.join.call(arrayLike, "&"));

console.log(Array.prototype.slice.call(arrayLike, 0));

console.log(
  Array.prototype.map.call(arrayLike, function(item) {
    return item.toUpperCase();
  })
);

// 类数组转数组
console.log(Array.prototype.slice.call(arrayLike));
console.log(Array.prototype.splice.call(arrayLike, 0));
console.log(Array.from(arrayLike));
console.log(Array.prototype.concat.apply([], arrayLike));

// Arguments 对象
function foo(name, age, sex) {
  console.log(arguments);
}

foo("name", "age", "sex");
