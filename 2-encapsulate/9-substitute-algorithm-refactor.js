// Task: use a better algorithm

function foundPerson(people) {
  let names = ['Don', 'John', 'Kent'];
  return people.find((p) => names.includes(p));
}
