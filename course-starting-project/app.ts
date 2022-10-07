function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

const combineAges = combine(31, 1991, "as-number");
console.log(combineAges);
console.log(
  "combineAges is a " + typeof combineAges + " and it should be a number."
);

const agesAsString = combine(31, 1991, "as-text");
console.log(agesAsString);
console.log(
  "ageAsString is a " + typeof agesAsString + " and it should be a string."
);

const combineStringAges = combine("31", "1991", "as-number");
console.log(combineStringAges);
console.log(
  "combineStringAges is a " +
    typeof combineStringAges +
    " and it should be a number."
);

const combineNames = combine("Consuela", "Lemonpledge", "as-text");
console.log(combineNames);
console.log(
  "combineNames is a " + typeof combineNames + " and it should be a string."
);
