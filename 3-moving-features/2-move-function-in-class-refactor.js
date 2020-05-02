// Task: move functions out of class

class Account {
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    this.type.overdraftCharge(this);
  }
}

class AccountType {
  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (account <= 7) return baseCharge;
      else return baseCharge + (account - 7) * 0.85;
    } else return account * 1.75;
  }
}
