<!-- this与闭包、原型链 -->
<!-- 用例引用自: https://www.cnblogs.com/echolun/p/11962610.html -->

1. 函数声明 or 函数表达式

<!-- 函数声明 --> 创建的时候就确定了
function f1() {
  console.log('听风是风');
};

<!-- 函数表达式 --> 执行的时候才确定
let f = function () {
  console.log('听风是风');
}

2. 函数执行上下文
  每当函数被调用的时候，都会创建一个函数上下文
  同一个函数被多次调用，都会创建一个新的上下文

3. 执行栈


4. 五种绑定彻底弄懂this，默认绑定，隐式绑定，显示绑定，new 绑定，箭头函数绑定

  隐式绑定: this指向调用者 obj
  function fn() {
    console.log(this.name);
  };
  let obj = {
    name: '听风是风',
    func: fn
  };
  obj.func() //听风是风