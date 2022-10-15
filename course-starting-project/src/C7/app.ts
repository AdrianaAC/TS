const names: Array<string> = ["Max", "Manuel"]; //== string[]. Array is a generic type and needs a value between <>

function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Consuela" }, { age: 30 });
