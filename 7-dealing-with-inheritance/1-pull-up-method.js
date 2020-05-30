class Party {}

class Employee extends party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends party {
  get totalAnnualCost() {
    return this.monthlyCost * 12;
  }
}
