// Task: We want to remove

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
