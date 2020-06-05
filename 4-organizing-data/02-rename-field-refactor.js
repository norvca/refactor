// 重构目的： 对于记录结构和函数或类中的字段，我们总是要给他们一个合适命名

class Organization {
  constructor(data) {
    this._title = data.title;
    this._country = data.country;
  }

  get title() {
    return this._title;
  }

  set title(aString) {
    this._title = aString;
  }

  get country() {
    return this._country;
  }

  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}
