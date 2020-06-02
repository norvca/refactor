// 重构目的：对于可变数据，我们应当将其作用域限制在最小范围内

class Case {
  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount);
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }
}
