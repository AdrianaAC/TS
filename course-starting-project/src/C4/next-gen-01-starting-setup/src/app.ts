// https://kangax.github.io/compat-table/es6/  --> list of js features and what brownser and compilers supports it

const userName = "Consuela";
let age = 31;

const add = (n1: number, n2: number = 1) => n1 + n2; //Default parameters on use

console.log(add(2.7));

const someHobbies = ["sports", "cooking"];
const otherHobbies = ["coding"];

otherHobbies.push(...someHobbies);
console.log(otherHobbies);

const someAdding = (...numbers: number[]) => {
  return numbers.reduce((curRes, curVal) => {
    return curRes + curVal;
  }, 0);
};

const [hobby1, hobby2, hobby3, ...remainingHobies] = someHobbies;
