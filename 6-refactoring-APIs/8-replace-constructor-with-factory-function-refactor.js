// 重构目的：构造函数的名字时固定的，有时会难以清晰的表明要创建的对象，我们就可以在外面进行一层包装，形成工厂函数

class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }
  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }
}

function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

function createEngineer(name) {
  return new Employee(name, 'E');
}

// client code 1
const candidate = createEmployee(document.name, document.empType);

// client code 2
const leadEngineer = createEmployee(document.leadEngineer);
