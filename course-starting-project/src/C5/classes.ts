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
  private lastReport: [number, string];

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("no report found");
  }

  constructor(
    id: number,
    private report: [[number, string]],
    public admins: string[]
  ) {
    super(id, "Acc");
    this.admins = admins;
    this.lastReport = report[0];
  }

  addReport(reportID: number, reportMessage: string) {
    this.report.push([reportID, reportMessage]);
    this.lastReport = [reportID, reportMessage];
  }
}

const itDpt = new ITDpt(1, ["Consuela"]);
const accDpt = new AccDpt(2, [[1, "Firtst Report"]], ["Luke"]);

//itDpt.describe();
itDpt.addEmployee("John");
itDpt.addEmployee("Jane");
accDpt.addEmployee("otherJohn");
accDpt.addEmployee("otherJane");
//accDpt.prtEmployeeInfo();
//itDpt.prtEmployeeInfo();

//const it = new Department(1, "IT");
//it.employees[2] = "ANNA"; --> can't access because of private modifier on field employees

accDpt.addReport(2, "other report");

console.log(itDpt);
console.log(accDpt);
