// console.log(y); // error(Cannot access 'y' before initialization)
// console.log(x); // undefined
// console.log(z); // error (z is not defined)
var x = 10;
let y = 20;

// Let’s break it down step-by-step:

// 1. Hoisting Concept :--->
// When JavaScript executes your code, it first runs a memory creation phase before executing line by line.

// For var variables → JavaScript hoists them to the top and initializes them with undefined.

// For let and const variables → JavaScript also hoists them to the top, but does not initialize them immediately. They remain in a temporal dead zone (TDZ) until the line where they are declared.

// 2. Your Code Execution Flow
// console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
console.log(x); // ✅ undefined
// var x = 10;
// let y = 20;

// Memory Creation Phase:--->
// Variable 	Hoisted?	Initialized?	Value Before Declaration
// x (var)	     ✅ Yes	    ✅ Yes	         undefined
// y (let)	     ✅ Yes	    ❌ No	         ❌ Cannot access (TDZ)

// Execution Phase:--->
// console.log(y); → tries to access y before it’s initialized → ❌ ReferenceError.

// console.log(x); → x exists (hoisted) and is undefined → ✅ logs undefined.

// var x = 10; → assigns 10 to x.

// let y = 20; → initializes y and assigns 20.

// 3. Why TDZ Exists for let/const
// The temporal dead zone is there to prevent bugs caused by accidentally using variables before they are initialized — something that happens a lot with var due to automatic initialization with undefined.

// 💡 Quick Visual of what's happening in memory:

// Before execution:----->
// x → undefined  (var is hoisted & initialized)
// y → uninitialized (in TDZ)

// Execution:--->
// console.log(y) ❌ Error (TDZ)
// console.log(x) ✅ undefined
// x = 10
// y = 20
