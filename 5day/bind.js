var foo = {
    value: 1
}

function bar() {
    console.log(this.value);
}

var bindFoo = bar.bind(foo);

bindFoo();