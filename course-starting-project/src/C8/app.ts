function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
} //Decoorators execute when class is defined
@Logger("Logging - person")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object ...");
  }
}

const prs = new Person();
console.log(prs);
