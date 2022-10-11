class Department {
  //   public name: string;
  //   private readonly id: number;
  //   protected makes it acessible from extended instances of class, private blocks that access
  protected employees: string[] = [];

  constructor(private readonly id: number, public name: string) {
    this.name = name;
    this.id = id;
  }

  describe(this: Department) {
    console.log("Department:" + this.name + " id:" + this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  prtEmployeeInfo() {
    console.log(this.name + " employers nº " + this.employees.length);
    console.log(this.employees);
  }
}

class ITDpt extends Department {
  constructor(id: number, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccDpt extends Department {
  constructor(id: number, private reports: number[], public admins: string[]) {
    super(id, "Acc");
    this.admins = admins;
    this.reports = reports;
  }
  addReport(reportID: number, reportName: string) {
    this.reports.push(reportID);
  }
}

const itDpt = new ITDpt(1, ["Consuela"]);
const accDpt = new AccDpt(2, [0, 256, 999], ["Luke"]);

//itDpt.describe();
itDpt.addEmployee("John");
itDpt.addEmployee("Jane");
accDpt.addEmployee("otherJohn");
accDpt.addEmployee("otherJane");
accDpt.prtEmployeeInfo();
itDpt.prtEmployeeInfo();

//const it = new Department(1, "IT");
//it.employees[2] = "ANNA"; --> can't access because of private modifier on field employees

console.log(itDpt);
console.log(accDpt);
