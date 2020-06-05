// 重构目的： 如果一个循环里做了多件事情，就要把逻辑分离出来，更进一步可以用算法或管道来替换循环

function getYoungest() {
  let ageArr = people.map((p) => p.age);
  return Math.min(...ageArr);
}

function getTotalSalary() {
  return people.reduce((total, p) => total + p.salary, 0);
}

return `youngestAge: ${getYoungest()}, totalSalary: ${getTotalSalary()}`;
