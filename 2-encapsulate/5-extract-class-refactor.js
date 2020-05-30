// 重构目的：一个类应该是一个清晰的抽象，只处理一些明确的责任。如果某个类里某些数据总是和某些函数一起出现，这时就可以将他们提炼出来，组成一个新的类

class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }

  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
}

class TelephoneNumber {
  get areaCode() {
    return this._areaCode;
  }

  set areaCode(arg) {
    this._areaCode = arg;
  }

  get number() {
    return this._number;
  }

  set number(arg) {
    this._number = arg;
  }

  toString() {
    return `${this.areaCode} ${this.number}`;
  }
}
