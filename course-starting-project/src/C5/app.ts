interface Person {
  name: string;
  age: number;
  likes?: string[];

  greet(phrase: string): void;
}

let p1: Person;

p1 = {
  name: "Consuela",
  age: 31,
  greet(phrase: string) {
    console.log(phrase + this.name + "and i'm " + this.age);
  },
};

p1.greet("Hi, i am ");

// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add2: AddFn;

add2 = (n1: number, n2: number) => {
  return n1 + n2;
};
