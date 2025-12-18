let obj = {
  name: "John",
  age: 30,
  orange: 1,
};

// console.log(obj.hasOwnProperty("orange")); // true
// console.log(obj.hasOwnProperty("name")); // true
// console.log(obj.hasOwnProperty("salary")); // false

let curr = "orange";
// console.log(obj.hasOwnProperty("curr")); // false
// console.log(obj.hasOwnProperty(curr)); // true
// console.log(obj.hasOwnProperty("orange")); // true

if (obj.hasOwnProperty(curr)) obj[curr]++;
console.log(obj); // { name: 'John', age: 30, orange: 2 }
