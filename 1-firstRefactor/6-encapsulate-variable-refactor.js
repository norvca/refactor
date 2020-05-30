// 重构目的：如果有一处被广泛使用的数据，我们应把对其的操作封装成函数，而避免直接对数据进行操作。

let defaultOwner = { firstName: 'Martin', lastName: 'Fowler' };

// get data
function getDefaultOwner() {
  return Object.assign({}, defaultOwner);
}

// set data
function setDefaultOwner(arg) {
  defaultOwner = arg;
}
