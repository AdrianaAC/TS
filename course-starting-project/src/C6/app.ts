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

class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log("Loading " + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const t1 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10);
  }
}

useVehicle(v1);
useVehicle(t1);

interface Bird {
  kind: "bird";
  flyingSpeed: number;
}

interface Horse {
  kind: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.kind) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving with speed:" + speed);
}
