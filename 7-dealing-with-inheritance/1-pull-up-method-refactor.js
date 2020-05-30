class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }

  // trap function to mention that function "montylyCost" should be implemented in subclass
  get monthlyCost() {
    throw new SubclassResponsibilityError();
  }
}

class Employee extends party {}

class Department extends party {}
