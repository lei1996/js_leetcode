// call 的模拟实现
Function.prototype.call2 = function(context) {
  var context = context || global;
  context.fn = this;

  var args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }

  var result = eval("context.fn(" + args + ")");
  delete context.fn;
  return result;
};

var value = 2;

var obj = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  };
}

bar.call2(null);

console.log(bar.call2(obj, "kevin", 18));

// apply 的模拟实现
Function.prototype.apply2 = function(context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("context.fn(" + args + ")");
  }

  delete context.fn;
  return result;
};

bar.apply2(null);

console.log(bar.apply2(obj, "kevin", 18));
