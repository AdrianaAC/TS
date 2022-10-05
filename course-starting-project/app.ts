const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Consuela",
  age: 31,
  hobbies: ["Gaming", "TvShows"],
  role: [2, "edit"],
};

let favoriteHobbies: string[];
favoriteHobbies = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
