let defaultOwner = { firstName: 'Martin', lastName: 'Fowler' };

// get data
function getDefaultOwner() {
  return Object.assign({}, defaultOwner);
}

// set data
function setDefaultOwner(arg) {
  defaultOwner = arg;
}
