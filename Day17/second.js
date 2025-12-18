// greet(); // working
function greet() {
  console.log("Hello World");
}
// greet(); // working

meet(); // error()
let meet = function () {
  console.log("Hello Second");
};

// meet(); // working

// +++++++++++++++++++++++ Reason ++++++++++++++++++++++++++
// This happens because function declarations and function expressions are hoisted differently in JavaScript.

// 1. Function Declaration (like greet)

// function greet() {
//   console.log("Hello World");
// }

// Hoisted fully: Both the function name and its body are moved to the top during the memory creation phase.

// This means you can call greet() before or after its definition.

// ✅ Works:---->

// greet(); // "Hello World"

// 2. Function Expression (like meet):------------->

// let meet = function () {
//   console.log("Hello Second");
// };

// Variables declared with let are hoisted but not initialized (they’re in the Temporal Dead Zone until the declaration line runs).

// When you try to call meet() before it’s initialized, JavaScript throws:

// ReferenceError: Cannot access 'meet' before initialization
// ❌ Fails:--->
// meet(); // Error
// ✅ Works:

// let meet = function () {
//   console.log("Hello Second");
// };
// meet(); // "Hello Second"

// 📌 Summary Table :------------>
// Type	                          Hoisting Behavior	                     Call Before Definition?
// Function Declaration	          Fully hoisted (name + body)	          ✅ Yes
// Function Expression	          Variable hoisted (TDZ for let/const)	   ❌ No
