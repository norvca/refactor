// 重构目的： 如果有多个条件检查指向同一个结果，我们可以用逻辑运算符去合并这些条件代码，然后提取成函数，增加可读性

function disabilityAmount(anEmployee) {
  if (isNotEligiableForDisability(anEmployee)) return 0;

  // compute the disability amount...
}

function isNotEligiableForDisability(anEmployee) {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  );
}
