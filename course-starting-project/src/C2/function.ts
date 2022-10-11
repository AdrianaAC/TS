function add1(n1: number, n2: number): number {
  return n1 + n2;
}

function concatString(s1: string, s2: string): string {
  return s1 + s2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add1(23, 7));

let combineValues: (a: number, b: number) => number;
combineValues = add1;

console.log(combineValues(8, 8));
