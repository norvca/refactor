// 重构目的：修改参数，在该案例中，我们只需接受 state code 参数，从而去掉对"顾客"概念的依赖

function inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

// client code
const newEnglanders = someCustomers.filter((c) =>
  inNewEngland(c.address.state)
);
