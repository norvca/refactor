if (!aPlan.withinRange(aRoom.daysTempRange))
  alerts.push('room temperature went outside range');

// in class Heating plan
class HeatingPlan {
  //...

  withinRange(bottom, top) {
    return (
      aNumberRange.bottom >= this._temperatureRange.low &&
      aNumberRange.top <= this._temperatureRange.high
    );
  }
}
