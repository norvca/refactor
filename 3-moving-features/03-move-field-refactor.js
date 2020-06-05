// 重构目的： 我们搬移字段到合适的地方使其形成更合适的数据结构

class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }

  get interestRate() {
    return this._type.interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}
