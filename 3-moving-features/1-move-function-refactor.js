// 重构目的：把内联函数搬移到顶层，可以单独分离出功能，减少嵌套，减轻阅读难度

function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance(points);
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: calculateDistance(points),
    pace: pace,
  };

  function calculateTime() {}
}

function calculateDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}
function distance(p1, p2) {}
function radians(degrees) {}
