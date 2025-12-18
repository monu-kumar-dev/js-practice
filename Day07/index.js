let num1 = 231;
let num2 = new Number(231);
let num3 = new Number(231);
// console.log(num2); // [Number: 231]
// console.log(typeof num2); // object

// console.log(num1 == num2); // true
// console.log(num2 == num3); // false(because both compare the address not value)

let num = 231.68;
// console.log(num.toFixed(1)); // 231.7
// console.log(num.toFixed(3)); // 231.680
// console.log(num.toPrecision(4)); // 231.7
// console.log(num.toPrecision(6)); // 231.680
// console.log(num.toPrecision(2)); // 2.3e+2
// console.log(num.toExponential(3)); // 2.317e+2
// console.log(num.toString()); // 231.68
// console.log(num.valueOf()); // 231.68

// +++++++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); // Object [Math] {}
console.log(Math.E); // 2.718281828459045
// "Q: What is Math.E in JavaScript?
// It's a constant provided by the Math object that represents Euler’s number (≈ 2.718). It's often used in exponential and logarithmic calculations."
console.log(Math.LN10); // 2.302585092994046
console.log(Math.PI); // 3.141592653589793
console.log(Math.LOG10E); // 0.4342944819032518

// Floor and ceil
let num10 = 23.4;
console.log(Math.floor(num10)); // 23
console.log(Math.ceil(num10)); // 24

console.log(Math.random()); // Value range: 0 <= Value < 1
// console.log(Math.floor(Math.random() * 10)); // it gives values from 0 to 9
console.log(Math.ceil(Math.random() * 10)); // it gives values from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1); // it gives values from 1 to 10
console.log(Math.floor(Math.random() * 10) + 11); // it gives values from 11 to 20

// Min = 40, Max = 50;
// console.log(Math.floor(Math.random() * (max - min + 1) + min));

console.log(Math.floor(Math.random() * 11)); // it gives values from 0 to 10
console.log(Math.floor(Math.random() * 11) + 1); // it gives values from 1 to 11

// Ludo(1 to 6)
// console.log(Math.floor(Math.random() * (6 - 1 + 1) + 1));
console.log(Math.floor(Math.random() * (6 - 1 + 1)) + 1); // Preferred for clarity

// we want 38 to 60
console.log(Math.floor(Math.random() * (60 - 38 + 1)) + 38);
