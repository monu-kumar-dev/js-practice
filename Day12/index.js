// Function

function greet() {
  console.log("Hello Coder Army");
  console.log("Mai badhaiya hu");
  console.log("Mai hu naa");
}

// greet();
// greet();
// greet();

// +++++ Add Two Number ++++++++++
let sum = function add() {
  return 2 + 3;
};

// add(); // error(add is not defined)
// console.log(add()); // error(add is not defined)
// console.log(sum); // [Function: add]
// console.log(sum()); // 5

// +++++ Add Two Number take parameter ++++++++++
function add2(num1, num2) {
  // here num1 and num2 are parameters
  console.log(num1 + num2);
}

// add2(2, 3); // 5 (Here, 2 and 3 are arguments)
// add2(10, 12); // 22

// +++++ Multiply Two Number take parameter ++++++++++
function mul(num1, num2) {
  console.log(num1 * num2);
}
// mul(12, 12); //144

// +++++ Multiply Two Number take parameter and return value ++++++++++
let result = function mul2(num1, num2, num3) {
  return num1 * num2 * num3;
};

// console.log(result(2, 3, 4)); // 24

// ++++ or +++++++

function mul2(num1, num2, num3) {
  return num1 * num2 * num3;
}

// console.log(mul2(2, 6, 5)); // 60

let result2 = mul2(2, 6, 5);
// console.log(result2); // 60

// +++ We also write ++++++++++
const fun = function () {
  console.log("Hello");
  console.log("Monu");
  return "Money";

  // console.log("Paisa"); // ye kabhi bhi execute nhi hogaa, yaad rkhe return ke baad ka code execute nhi hotaa hai.
};

// console.log(fun); // [Function: fun]
// console.log(fun()); // working

// +++++++++++ Arrow Function ++++++++++++++++++++++++
let arrow = () => {
  console.log("Hello! Monu");
};
// arrow(); // Hello! Monu

let sum3 = (num1, num2) => {
  return num1 + num2;
};
// console.log(sum3(12, 13)); // 25

//+++++++ OR ++++++++++
let sum4 = (number1, number2) => number1 + number2;
// console.log(sum4(32, 32)); // 64

// ++++++ calculate cube with arrow function +++++++++
let cube = (num) => num * num * num;
// console.log(cube(5)); // 125

// Agr single parameter ho to () dene ki jarurat nhi hai, Ex:->(with arrow function)
let square = (num) => num * num;
// console.log(square(13)); // 169

// If we do not know the value of parameter coming then use rest operator:--->
const sum5 = function (...num) {
  // loop se sum nikal skte hai
  console.log(num);
};

// sum5(2, 3, 4);
// sum5(3, 2, 1, 4, 6);
// sum5(1, 2);

// ++++++++++++++ guess code work or not +++++++++++++++++++
let fun1 = (...num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }

  console.log(sum);
};
fun1(2, 3, 4, 5, 6, 7, 8, 9); // 44


// +++++++ How to access object element using function +++++++++
let obj = {
  name: "rohit",
  age: 30,
  amount: 310,
};

// function fun4(obj1) {
//   console.log(obj1.name, obj1.amount);
// }
// fun4(obj); // rohit 310

// Or with destructuring we get:-->

// function fun4(obj1) {
//   const { name, amount } = obj;
//   console.log(name, amount);
// }
// fun4(obj); // rohit 310

// In Short:--------->

function fun4({ name, amount }) {
  console.log(name, amount);
}
fun4(obj); // rohit 310

// Checking function working pass by value or reference

let obj2 = {
  name: "Mohit",
  age: 30,
  amount: 310,
};

function fun10({ name, age }) {
  name = "Mogni";
  console.log(name, age); // Mogni 30
}

fun10(obj2);
console.log(obj2.name); // Mohit   (So, it is working call by value.)

// What’s happening here?
// When you call fun10(obj2);, you're passing an object (obj2) to a function.

// However, inside the parameter list of fun10, you are destructuring the object:

// function fun10({name, age}) { ... }
// This is equivalent to:

// let {name, age} = obj2;
// So inside the function, name and age are primitive values (a string and a number), copied from the original object. They are passed by value.

// You're not working with the original obj2 object directly here.

// So, is it call by value or reference?
// ✔️ The answer:
// The object obj2 itself is passed by reference to the function.

// But you're destructuring it immediately, so the function receives copies (by value) of name and age.

// So in practice, your function is working with copies of the values — call by value.

// To test call by reference vs value, try this:

// Example 1 – Modify the object (reference):

function fun10(obj) {
  obj.age = 99;
}

fun10(obj2);
console.log(obj2.age); // Output: 99 → shows pass by reference

// Example 2 – Destructure and modify (value):

function fun10({ age }) {
  age = 99;
}

fun10(obj2);
console.log(obj2.age); // Output: 30 → shows pass by value

// Conclusion:
// If you pass the whole object and modify it → it's by reference.
// If you destructure properties (like {name, age}), you are working with copies, so it's effectively by value.
