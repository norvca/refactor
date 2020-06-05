// 重构目的：封装可变数据时应避免直接修改集合，我们可以返回集合的副本，或用类的"添加"和"移除"方法来修改集合

class Person {
  get courses() {
    return this._courses.slice();
  }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  removeCourse(aCourse) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) return this.fnIfAbsent();

    this._courses.split(index, 1);
  }

  fnIfAbsent() {
    throw new RangeError();
  }
}
