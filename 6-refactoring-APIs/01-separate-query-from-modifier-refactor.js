// 重构目的： 任何有返回值的函数，都不应该有看得到的副作用--命令与查询分离

function findMiscreant(people) {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
  return '';
}

function alertForMiscreant(people) {
  if (findMiscreant(people) !== '') return setOffAlarms();
}
