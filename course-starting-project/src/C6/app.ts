interface Admin {
  name: string;
  priveleges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface SupEmployee extends Admin, Employee {}

const e1: SupEmployee = {
  name: "John",
  priveleges: ["website Maint"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//Type guard using typeOf
function add3(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function prtEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  if ("priveleges" in emp) {
    console.log("Admin Privileges: " + emp.priveleges);
  }

  if ("startDate" in emp) {
    console.log("Employee start date: " + emp.startDate);
  }
}

prtEmployeeInfo(e1);
