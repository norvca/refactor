// 重构目的：如果一个函数不是太复杂，那么我们就应该用函数，而不是类

function charge(customer, usage, provider) {
  const baseCharge = customer * usage;
  return baseCharge * provider.connectionCharge;
}
