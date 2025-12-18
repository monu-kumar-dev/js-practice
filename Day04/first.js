// Comparision Operator
// Number to Number
// == (Compare the value)
// === (Type check then Compare the value)

let a1 = 1;
let a2 = 2;
console.log(a1 == a2); // false
console.log(a1 === a2); // false

let a = 1;
let a3 = 1;
console.log(a == a3); // true
console.log(a === a3); // true

let a5 = 1;
let a6 = "1";
console.log(a5 == a6); // true
console.log(a5 === a6); // false

// Important

// null == undefined  // true
console.log(null == undefined);

// null === undefined // false
console.log(null === undefined);

// Important
// Null can only equivalent to undefined

console.log(null == 0); // false (we know that undefined is only equal with null. so, false)
console.log(null < 0); // (0 < 0) false
console.log(null > 0); // (0 > 0) false
console.log(null <= 0); // (0 <= 0) true
console.log(null >= 0); // (0 >= 0) true

console.log(undefined == 0); // false (we know that undefined is only equal with null. so, false)
console.log(undefined < 0); //(NaN < 0) false
console.log(undefined > 0); //(NaN > 0) false
console.log(undefined <= 0); //(NaN <= 0) false
console.log(undefined >= 0); //(NaN >= 0) false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
// Reason Why NaN == NaN is false.

let str1 = "Mohan";
let str2 = "Rohan";
console.log(Number(str1) == Number(str2)); // false

// Predict
let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log((abc1 == abc2) == abc3); // false(firstly two compare (123 == 123) then give output true, then compare with third (true == 123). Output is false)

let abc5 = 123;
let abc6 = "123";
let abc7 = true;
console.log((abc5 == abc6) == abc7); // true

// console.log(null == undefined); // true
console.log(null != undefined); // false

// Bitwise operator
console.log(4 & 5); // 4 (100 & 101 -> 100)
console.log(14 & 15); // 14 (1110 & 1111 -> 1110)
console.log(14 | 15); // 15 (1110 | 1111 -> 1111)
console.log(5 ^ 7); // 2 (101 ^ 111 -> 010)
console.log(5 << 3); // 40 (101.0000000.. << 3 --> 101000.00000..) ---> (5 * 2 pow 3)
console.log(20 >> 2); // 5 (10100.00000.. >> 2 --> 101.0000..)  ---> (20 / 2 pow 2)
