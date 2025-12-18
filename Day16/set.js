// set :--> Unique values
const set = new Set([10, 20, 30, 40]);
console.log(set); // Set(4) { 10, 20, 30, 40 }
console.log(typeof set); // object

const set1 = new Set([1, 3, 4, 5, 4, 3, 2, 1]);
console.log(set1); // Set(5) { 1, 3, 4, 5, 2 } (Here we see in the output not count repeated number)

// +++++ second type to create set +++++++++++++
const set2 = new Set();
set2.add(4);
set2.add(1);
set2.add(6);
set2.add("Mohan");
set2.add("Rohan");
console.log(set2); // Set(5) { 4, 1, 6, 'Mohan', 'Rohan' }

// delete
set2.delete(6);
console.log(set2); // Set(4) { 4, 1, 'Mohan', 'Rohan' }
console.log(set2.size); // 4

// ++++++++++ some new +++++++++++
const user_Id = new Set(["rohit_negi9", "ravi.94", "chavi_90", "sumit._90"]);
let new_user = "rohit_negi9";
console.log(user_Id.has(new_user)); // true

user_Id.clear();
console.log(user_Id); // Set(0) {}

// ++++++  Suppose some array coming from backend then we have to convert in set +++++++++++++++
let arrr = [20, 40, 50, 40, 30, 20];
const sets = new Set(arrr);
console.log(sets); // Set(4) { 20, 40, 50, 30 }
// Wpas array me convert karo
arrr = [...sets];
console.log(arrr); // [ 20, 40, 50, 30 ]

// +++++++++ Union Operation in set ++++++++++++++++++
let set4 = new Set([11, 20, 30, 40, 50]);
let set5 = new Set([10, 20, 70, 80]);

let set6 = new Set([...set4, ...set5]);
console.log(set6); // Set(8) { 11, 20, 30, 40, 50, 10, 70, 80 }

// ++++++++++ Intersection in set +++++++++++
let set7 = new Set([10, 20, 30, 40, 50]);
let set8 = new Set([10, 20, 80, 70, 60]);

// Intersection: Filter(array)
// const result7 = [...set7].filter((num) => set8.has(num));
// console.log(result7); // [ 10, 20 ]

// If we want this result in set then:------>

const result7 = new Set([...set7].filter((num) => set8.has(num)));
console.log(result7); // Set(2) { 10, 20 }

// +++ Iterate in set ++++++++++
// use for...of Loop
for (let value of set7) {
  console.log(value); // working
}
// ForEach loop
set7.forEach((value) => console.log(value)); // working
