// 重构目的：1.函数内部实现已经清晰易读，就不应该继续提取函数
// 重构目的：2.如果有一群组织不合理的函数，可以先将他们内联到一个大型函数里，再重新提取出合适的小函数

function reportLines(aCustomer) {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);
  return lines;
}
