// 重构目的：如果客户端需通过某一个对象来调用后者的函数， 可以通过设置委托函数，来隐藏委托关系，减少耦合

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  set department(arg) {
    this._department = arg;
  }

  // create a delegate function to access manager directly
  get manager() {
    this._department.manager;
  }
}

class Department {
  get chargeCode() {
    return this._chargeCode;
  }

  set chargeCode(arg) {
    this._chargeCode = arg;
  }

  get manager() {
    return this._manager;
  }

  set manager(arg) {
    this._manager = arg;
  }
}

// client side code
manager = aPerson.manager;
