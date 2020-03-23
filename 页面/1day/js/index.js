var small = {
  src: "https://unsplash.it/400/300?image=1050",
  width: 400,
  height: 300
};
var large = {
  src: "https://unsplash.it/1200/900?image=1050",
  width: 1200,
  height: 900
};

const $small = document.querySelector('.small');
// const position = $small.getBoundingClientRect();
// console.log(position.left, position.top);
const $preview = document.querySelector('.preview');
const size = 200;

// 当鼠标指针移动到图像上时执行的事件
$small.onmouseenter = (e) => {
    $preview.style.display = 'block';
}

// 当鼠标指针移动到指定元素后 执行的事件
$small.onmousemove = (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    $preview.style.left = x - size / 2 + 'px';
    $preview.style.top = y - size / 2 + 'px';
    $preview.style.backgroundPosition = `${(-(x * 3 - size / 2)).toString()}px ${(-(y * 3 - size / 2)).toString()}px`;
    console.log($preview.style.backgroundPosition);
}

// 当鼠标指针离开指定元素后 执行的事件
$small.onmouseleave = (e) => {
    $preview.style.display = 'none';
}