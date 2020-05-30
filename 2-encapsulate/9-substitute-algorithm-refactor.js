// 重构目的：使用清晰简单的算法来取代复杂的方法

function foundPerson(people) {
  const candidates = ['Don', 'John', 'Kent'];
  return people.find((p) => candidates.includes(p));
}
