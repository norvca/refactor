// 重构目的： 如果代码从一个数据结构里导出几个值，然后作为参数传入一个函数，我们可以改为直接传入这个数据结构
// 这样可以缩短参数列表， 以及将来需要从该数据结构导出更多的数据时，我们就不用为此改修参数列表

if (!aPlan.withinRange(aRoom.daysTempRange))
  alerts.push('room temperature went outside range');

// in class Heating plan
class HeatingPlan {
  //...

  withinRange(aNumberRange) {
    return (
      aNumberRange.bottom >= this._temperatureRange.low &&
      aNumberRange.top <= this._temperatureRange.high
    );
  }
}
