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

function countAndDesc<T extends Lengthy>(element: T) {
  let descText = "Got no value!";

  if (element.length > 0) {
    descText = "Got " + element.length + " elements";
  }
  return [element, descText];
}

console.log(countAndDesc("Hello there!"));
