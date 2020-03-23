// 函数防抖(debounce)
// 概念： 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

// 生活中的实例： 如果有人进电梯（触发事件），那电梯将在10秒钟后出发（执行事
// 件监听器），这时如果又有人进电梯了（在10秒内再次触发该事件），我们
// 又得等10秒再出发（重新计时）。
function debounce(fn, wait) {
  var time = null;
  return function() {
    var context = this;
    var args = arguments;

    if (time) {
      clearTimeout(time);
      time = null;
    }

    time = setTimeout(function() {
      fn.apply(context, args);
    }, wait);
  };
}

function f() {
  console.log("111");
}

console.log(setInterval(debounce(f, 500), 2000));

// 函数节流(throttle)

// 概念： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数
// 执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

// 生活中的实例： 我们知道目前的一种说法是当 1 秒内连续播放 24 张以上的图片
// 时，在人眼的视觉中就会形成一个连贯的动画，所以在电影的播放（以前是，现在
// 不知道）中基本是以每秒 24 张的速度播放的，为什么不 100 张或更多是因为
// 24 张就可以满足人类视觉需求的时候，100 张就会显得很浪费资源。
function throttle(fn, gapTime) {
  let _lastTime = null;

  return function() {
    let _nowTime = +new Date();
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn();
      _lastTime = _nowTime;
    }
  };
}

let fn = () => {
  console.log("节流");
};

// 节流相当于 幻灯片限制频率播放电影
// 一秒打出一次 "节流"
console.log(setInterval(throttle(fn, 1000), 10));
