// 重构目的： 嵌套条件表达式难以阅读，我们可以用卫句来代替，即使返回各分支，增强可读性

// Case 1 refactor
function payAmount(employee) {
  if (employee.isSeparated) return { amount: 0, reasonCode: 'SEP' };
  if (employee.isRetired) return { amount: 0, reasonCode: 'RET' };

  // logic to compute amount
  lorem.ipsum(dolor.sitAmet);
  1;
  consectetur(adipiscing).elit();
  sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  ut.enim.ad(minim.veniam);
  return someFinalComputation();
}

// Case 2 refactor
function adjustedCapital(anInstrument) {
  if (
    anInstrument.capital <= 0 ||
    anInstrument.interestRate <= 0 ||
    anInstrument.duration <= 0
  ) {
    return 0;
  }

  return (
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor
  );
}
