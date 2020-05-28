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
