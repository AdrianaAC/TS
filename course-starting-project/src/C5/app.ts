class Department {
  name: string;
  employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department:" + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  prtEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const it = new Department("IT");
it.describe();
it.addEmployee("Consuela");
it.addEmployee("Max");
it.employees[2] = "ANNA";
it.prtEmployeeInfo();
