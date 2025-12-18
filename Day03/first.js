// Non primitive data types:-->
// Array, Object, Function

// let n = 10
// let n2 = 20;
// let n3 = 30;

// Array
let arr = [10, 20, 50, "Mohan"];
console.log(arr);
console.log(typeof arr); // Object

// Object
// Key:value
let obj = {
  user_name: "Monu",
  account_number: 23434343,
  balance: 430,
};

console.log(obj);
console.log(typeof obj); // object

// Function
let fun = function () {
  console.log("Monu Bhaiyaa.");
  return 50;
};
console.log(fun());

console.log(typeof fun); // function

// Type Conversion

// String convert to Number
let account_balance = "100";
let num = Number(account_balance);

console.log(typeof account_balance);
console.log(typeof num);

// Boolean convert to Number
let x = true;
console.log(Number(x)); // 1

// NAN Example
let account = "100xs";
let bal = "200S";
console.log(Number(account)); // Nan
console.log(Number(bal)); // NaN

// null to number
let x1 = null;
console.log(Number(x1)); // 0

// undefined to number
let x4;
console.log(Number(x4)); // NaN

// Number to String
let num2 = 100;
let str = String(num2);
console.log(str);
console.log(typeof str);

let bool = true;
console.log(String(bool)); // "true"
console.log(typeof String(bool)); // String

// String to Boolean
let abc = "";
console.log(Boolean(abc)); // false

let abc2 = " ";
console.log(Boolean(abc2)); // true

let abc3 = "hdjheu736";
console.log(Boolean(abc3)); // true