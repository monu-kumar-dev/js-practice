// if-else
let age = 30;

if (age >= 18) {
  // console.log("Eligible to vote");
} else {
  // console.log("Not Eligible");
}

// if_elseif_if
let age2 = 56;
if (age2 < 18) {
  console.log("Teen");
} else if (age2 >= 55) {
  console.log("Old");
} else {
  console.log("Young");
}

// Switch case statement

// let day = 5;
switch ((day = 5)) {
  case 1:
    console.log("sun");
    break;
  case 2:
    console.log("Mon");
    break;
  case 3:
    console.log("tue");
    break;
  case 4:
    console.log("wed");
    break;
  case 5:
    console.log("Thrus");
    break;
  case 6:
    console.log("Fri");
    break;
  case 7:
    console.log("sat");
    break;

  default:
    console.log("Please enter number 1 to 7");
    break;
}

// ++++++++ One More ++++++++
// console.log(new Date().getDay()); // 3

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("tue");
    break;
  case 3:
    console.log("wed");
    break;
  case 4:
    console.log("Thrus");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("sat");
    break;
  default:
    console.log("Thanks for checking..");
    break;
}

// ++++++++++++Loop ++++++++++
// console.log("Hello coder army");
// console.log("Hello coder army");
// console.log("Hello coder army");
// console.log("Hello coder army");

// print 20 times
for (let i = 0; i < 20; i++) {
  console.log("Hello coder army");
}

// sum of first n numbers: 10 number
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
// console.log(sum); // 55

// Nested for loop

// *
// **
// ***
// ****
// *****

// for (let i = 0; i < 5; i++) {
//   let row = ""; // empty string for this row
//   for (let j = 0; j <= i; j++) {
//     row += "*"; // build the line
//   }
//   console.log(row); // print the full line of stars
// }

// 111111
// 222222
// 333333
// 444444
// 555555

for (let i = 1; i < 6; i++) {
  let row = "";
  for (let j = 0; j <= 5; j++) {
    row += i;
  }
  console.log(row);
}

// While loop
let i = 1;
while (i <= 5) {
  // console.log(i);
  i++;
}

// Do-while Loop
let j = 1;
do {
  // console.log(j);
  j++;
} while (j <= 5);

// Array and loop
let arr = [10, 20, 30, 40];
for (let m = 0; m < arr.length; m++) {
  // console.log(arr[m]);
}

// Object and loop
const obj = {
  name: "monu",
  roll: 10,
  class: "Section A",
  Amount: 300,
};

// const val = Object.values(obj);
// console.log(val); // [ 'monu', 10, 'Section A', 300 ]

const key = Object.keys(obj);
for (let i = 0; i < key.length; i++) {
  // console.log(key[i]); // working
  console.log(obj[key[i]]); // working
}
