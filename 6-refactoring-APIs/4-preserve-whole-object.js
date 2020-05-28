const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.withinRange(low, high))
  alerts.push('room temperature went outside range');

// in class Heating plan
class HeatingPlan {
  //...

  withinRange(aNumberRange) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
}
