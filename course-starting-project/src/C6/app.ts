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
