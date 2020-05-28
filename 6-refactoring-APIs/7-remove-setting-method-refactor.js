class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }
  set id(arg) {
    this._id = arg;
  }
}

// client code
let tom = new Person('tom');
