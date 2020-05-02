// Task: split loops,then encapsulate logic into functions

function getYoungest() {
  let ageArr = people.map((p) => p.age);
  return Math.min(...ageArr);
}

function getTotalSalary() {
  return people.reduce((total, p) => total + p.salary, 0);
}

return `youngestAge: ${getYoungest()}, totalSalary: ${getTotalSalary()}`;
