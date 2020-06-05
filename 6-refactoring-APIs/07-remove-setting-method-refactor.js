// 重构目的：通过移除设值函数来表达某些字段不想被修改的意图

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
