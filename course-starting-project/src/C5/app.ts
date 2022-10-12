interface Person {
  name: string;
  age: number;
  likes: string[];

  greet(phrase: string): void;
}

let p1: Person;

p1 = {
  name: "Consuela",
  age: 31,
  likes: ["cars", "trains"],
  greet(phrase: string) {
    console.log(phrase + this.name + "and i'm " + this.age);
  },
};

p1.greet("Hi, i am ");
