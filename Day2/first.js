// declare the variable
let num = 10;
console.log(num);

// primitive Data Types
// Number, Boolean, String, null, undefined, symbol, bigint

// Non Primitive Data Types
// Array, Object, Function

// Primitive Data Types:--->
// Number
let account_balance = 20;
console.log(account_balance);
console.log(typeof account_balance);

// String
let str = "Monu";
console.log(str);
console.log(typeof str);

// Boolean (True Or False)
let statement = true;
console.log(statement);
console.log(typeof statement);

// Undefined
let account;
console.log(account); // undefined
console.log(typeof account); // undefined

// Null
let bal = null;
console.log(bal); // null
console.log(typeof bal); // object
// Example me samajh skte hai bank account se jb show nhi krta hai tb null bhej deta hai.

// Bigint
let a = 8273892837483791298347388888888n;
console.log(a);
console.log(typeof a);

// Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false
console.log(typeof id1);

// Finding maximum and minimum number of int datatypes
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
