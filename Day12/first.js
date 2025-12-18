// Difference between rest and spread opertor:--->

// The spread operator (...) and rest operator (...) look the same (...), but they are used in opposite ways:

// Operator	Purpose	Direction	Example Context:-->
// ... (Spread)	Expands an array/object into individual elements	Outgoing / Unpacking	Calling a function, copying, merging
// ... (Rest)	Collects multiple elements into one array/param	Incoming / Gathering	Function parameters, array/object destructuring

// 🔹 1. Spread Operator (📤 “Unpack”)
// Use case: Split iterable (like array/object) into parts.

// ✅ Spread with Arrays:

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];

console.log(newNums); // [1, 2, 3, 4, 5]

// ✅ Spread in Function Calls:

function sum(a, b, c) {
  return a + b + c;
}
const values = [1, 2, 3];
console.log(sum(...values)); // 6

// ✅ Spread with Objects:

const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 };

console.log(updatedUser); // { name: "Alice", age: 26 }

// 🔸 2. Rest Operator (📥 “Pack”)
// Use case: Combine multiple items into one parameter or variable.

// ✅ Rest in Function Parameters:

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Here, nums becomes an array: [1, 2, 3, 4]

// ✅ Rest in Destructuring:

const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest); // [20, 30, 40]

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(others); // { b: 2, c: 3 }

// 🔁 Summary
// Operator	Looks like	Used in	Does what
// Spread	...	Function calls, array/object literals	Expands values
// Rest	...	Function params, destructuring	Collects values
