// For...Of loop:--->

// Applying in array:--->
const arr = [10, 20, 31, 21, 12];
for (let value of arr) {
  // console.log(value);
}

// Applying in string
let str = "Rohit is Good Guy";
for (let value of str) {
  // console.log(value);
}

// Applying in object:--> Giving error (obj is not iterable).
const obj = {
  name: "Monu",
  age: 21,
  balance: 231,
};

// for (let key of obj) {
//   console.log(key); // TypeError: obj is not iterable
// }

// ++++ If we want to access using for...of loop then firstly we change it into array +++++++
for (let value of Object.keys(obj)) {
  // console.log(value); // it working
}

// console.log(Array.isArray(Object.keys(obj)));  // ✅ true

// +++++++++++++++++ Guess The Output ++++++++++++++++++

const obje = {
  5: "Five",
  2: "Two",
  name: "Monu",
  age: 21,
  balance: 231,
};
// console.log(obje); // { '2': 'Two', '5': 'Five', name: 'Monu', age: 21, balance: 231 }

// ForEach loop:---------------------->

let arr2 = [10, 23, 32, 34, 43];
// arr.forEach(CallBackFunction)
arr2.forEach(function (num) {
  // console.log(num);
});

// With arrow function

// ++++ Single argument:----> Number +++++++++++++++

//1st Type:-------------.
function greet(num) {
  console.log(num);
}
arr2.forEach(greet);

// ++++ In-Short +++++++++
// arr2.forEach((num) => console.log(num));

// +++++++++++ Two Argument:----> Number,Index +++++++++++++++++++++++
arr2.forEach((num, index) => console.log(num, index));

// ++++++++++ Three Argument:----> Number,Index, (Array ko pass krna) +++++++++++++++++
arr2.forEach((num, index, arr2) => {
  arr2[index] = num * 2;
});
// console.log(arr2); // [ 20, 46, 64, 68, 86 ]

// +++++++++++++ Filter +++++++++++
// YE call back function expect krta hai, aur ye true or false return krta hai
// Yaha bhi hm three argument tk le skte hai forEach jaisa. 1.Number,2.Index, 3.(Array ko pass krna)

let arr5 = [12, 34, 54, 32, 15];
// const result = arr5.filter((num) => {
//   return num % 2 == 0;
// });

// +++ In-short +++++++
const result = arr5.filter((num) => num % 2 == 0);
console.log(result); // [ 12, 34, 54, 32 ]

// ++++++++ Filter Example-2 ++++++++++++++++++
const student = [
  { name: "Rohan", age: 20, marks: 70 },
  { name: "Mohan", age: 12, marks: 20 },
  { name: "Ramesh", age: 42, marks: 40 },
  { name: "Suresh", age: 43, marks: 76 },
  { name: "Mahesh", age: 43, marks: 98 },
];

// ++++ Long +++++++++++
const res = student.filter((obj) => {
  return obj.marks > 50;
});
console.log(res);

// +++++++++ same but in sort +++++++++
const res2 = student.filter((value) => value.marks > 50);
console.log(res2);

// ++++++++ more short (With Destructure) +++++++++
const res3 = student.filter(({ marks }) => marks > 50);
console.log(res2);

// +++++++++++++++++++++ Map +++++++++++++++++++++++++++++++++++++
// Hm filter me kewal true, false return krte the
// Pr yaha hm value ko modify bhi kr skte hai.
// Map me jo bhi hm return krke denge to store kr legaa.
// Yaha bhi hm three argument tk le skte hai forEach jaisa. 1.Number,2.Index, 3.(Array ko pass krna)
const arr6 = [1, 2, 3, 4, 5];

// const result3 = arr6.map((num) => {
//   return num * num;
// });

const result3 = arr6.map((num) => num * num);
console.log(result3); // [ 1, 4, 9, 16, 25 ]

// Q. Array is given filter the even number and do the square
const arrr = [2, 4, 3, 5, 8, 7, 6, 9];
const result5 = arrr.filter((num) => num % 2 == 0).map((num) => num * num);
console.log(result5);
