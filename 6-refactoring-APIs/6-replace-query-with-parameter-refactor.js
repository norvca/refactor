// 重构目的：某些函数直接引入了全局变量或是我们想要移除的元素，我们就可以将这些引用替换为函数参数，把责任转给函数的调用者

class HeatingPlan {
  //...

  get targetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

// client code
if (
  thePlan.targetTemperature(thermostat.selectedTemperature) >
  thermostat.currentTemperature
)
  setToHeat();
else if (
  thePlan.targetTemperature(thermostat.selectedTemperature) <
  thermostat.currentTemperature
)
  setToCool();
else setOff();
