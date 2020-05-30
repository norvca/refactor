// 重构目的：当发现一组函数操作同一块数据，我们就可以考虑组建一个类了

// data
reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }

  baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

// in client1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;

// in client2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = aReading.taxableCharge;

// in client3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;
