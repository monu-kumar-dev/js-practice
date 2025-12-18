 // For in loop: Isko array ke sath nahi lete
// Array is an object

// 🔎 for...in Array ke sath kyu problematic hai?
// 📌 Reason:--->
// for...in loop:--->
// 1. Array ke indexes + extra custom properties dono ko iterate karta hai.
// 2. Order guaranteed nahi hota.
// 3. Intended for objects, not arrays.

const arr = [10, 20, 30, 40, 21, 34];
arr.name = "Rohit";
arr.age = 20;

for (index in arr) {
  // console.log(index);
  //   console.log(index, arr[index]);
}

// Output:--->

// 0 10
// 1 20
// 2 30
// 3 40
// 4 21
// 5 34
// name Rohit
// age 20

// ➡️ Dekha?
// for...in ne:--->
// 1.Array ke indexes (0 to 5)
// 2.Aur custom properties (name, age) — sab ko loop kar diya.

// ++++ So use normal for,while,do-while or for...of loop+++++++++++++
// For...of loop next day padhenge

// +++++++++++++++++++++ Order Guaranteed nhi hota (How) ++++++++++++++++++++++++
// 😬 Problem 2: Order is not guaranteed

let arr2 = [];
arr2[5] = "A";
arr2[2] = "B";
arr2[10] = "C";

for (let i in arr2) {
  console.log(i, ":", arr2[i]);
}
// Output could be:

// 2 : B
// 5 : A
// 10 : C

// Or in some engines, it might be:
// 5 : A
// 2 : B
// 10 : C

// 👉 Order is not guaranteed!

// This happens because for...in is looping over keys (as strings), and JavaScript engines don’t promise to keep them in numeric order in this case.
