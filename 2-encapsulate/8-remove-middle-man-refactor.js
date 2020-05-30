// 重构目的：如果受托函数的功能越来越多，我们就要设置更多的转发函数，此时我们就要考虑哪些功能是真正需要隐藏的，并让客户端重新直接调用某些受托类

class Person {
  get department() {
    return this._department;
  }
}

class Department {
  get manager() {
    return this._manager;
  }
}

// client side code
manager = aPerson.department.manager;
