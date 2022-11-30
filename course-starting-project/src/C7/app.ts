const names: Array<string> = ["Max", "Manuel"]; //== string[]. Array is a generic type and needs a value between <>

function merge<T extends object, U>(objA: T, objB: U) {
  //constraints in generics
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Consuela" }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDesc<T extends Lengthy>(element: T): [T, string] {
  let descText = "Got no value!";

  if (element.length > 0) {
    descText = "Got " + element.length + " elements";
  }
  return [element, descText];
}

function extractAndConv<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}

extractAndConv({ name: "Consuela" }, "name");

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Consuela");
textStorage.addItem("Hello");
textStorage.removeItem("Hello");
console.log(textStorage);

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const moreNames: Readonly<string[]> = ["John", "Jane"];
// moreNames.push("Doe"); ----> can't alter the array properties due to readonly utility type
