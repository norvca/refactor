// 重构目的：对于可变数据，我们可以使用类对象，隐藏结构细节，仅提供对应的方法

// data
const data = { name: 'Acme Gooseberries', country: 'GB' };

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(aString) {
    this_name = aString;
  }
}
const organization = new Organization(data);

function getOrganization() {
  return organization;
}

// load and use data
result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = newName;
