// How we create an object
const obj = {
  //   name: "Monu",
  name: "Monu", // we also write this because in my backend the data stores similarly
  account_Balance: 420,
  gender: "Male",
  age: 30,
  "account number": 231234,
  // We also write this
  0: 3200, // here at the end 0 stores in string
  1: 123,
  2: 345,

  // Checking null, undefinied working or not
  null: 87,
  undefined: 76,
};

// console.log(obj); // { name: 'Monu', account_Balance: 420, gender: 'Male', age: 30 }
// console.log(typeof obj); // object

// (a) Dot Notation (obj.key)
// Works only if the key is a valid identifier (letters, numbers, _, $ — but not starting with a number and no spaces).
// Example:---->
console.log(obj.name); // "Monu"
console.log(obj.account_Balance); // 420
console.log(obj.gender); // "Male"

// (b) Bracket Notation (obj["key"])
// Works for any key (strings, numbers, spaces, reserved words).
// Example:------>
console.log(obj["0"]); // 3200
console.log(obj[0]); // 3200 (number auto-converted to string)
console.log(obj["account number"]); // 231234
console.log(obj["null"]); // 87
console.log(obj["undefined"]); // 76

// Note:----------->
// ✅ Always use bracket notation when:
// Keys have spaces
// Keys start with a number
// Keys are reserved words (null, undefined, etc.)

// If we want to access the object element then we use objectname.element_name
console.log(obj.gender); // Male
console.log(obj.account_Balance); // 420

// We can also access like objectname["element_Name"]
console.log(obj["account_Balance"]);
console.log(obj["age"]);

// If we access using . then why another comes which is access using []. Answer is following:-->
// console.log(obj.account number); //error (here we are not able to access, it gives error)
console.log(obj["account number"]); // 231234 (here it allow to access )
console.log(obj["0"]); // 3200
console.log(obj[1]); // 123 (when we are dealing with number we directly write in number not able to write in string.)
console.log(obj[2]); // 456 (Only valid for number, directly write)

// Checking null or undefined
console.log(obj.null); // 87
console.log(obj[null]); // 87
console.log(obj["null"]); // 87

console.log(obj.undefined); // 76
console.log(obj[undefined]); // 76
console.log(obj["undefined"]); // 76

//+++ Other Way To Create Object +++++++++++
const person = new Object();
console.log(person); // {}

// property add
person.name = "Monu";
person.age = 81;
person.gender = "male";
console.log(person); // { name: 'Monu', age: 81, gender: 'male' }
// delete
delete person.age;
console.log(person); // { name: 'Monu', gender: 'male' }
// modify
person.name = "Raghav";
console.log(person); // { name: 'Raghav', gender: 'male' }

// +++++ Third-way to create Object +++++++++
class People {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

let per1 = new People("Rohit", 20, "Male");
let per2 = new People("Rohini", 21, "Female");
// console.log(per1); // People { name: 'Rohit', age: 20, gender: 'Male' }
// console.log(per2); // People { name: 'Rohini', age: 21, gender: 'Female' }

console.log(per1, per2); // People { name: 'Rohit', age: 20, gender: 'Male' } People { name: 'Rohini', age: 21, gender:'Female' }

// Applying some methods in objects
const obj2 = {
  name: "Monu",
  account_Balance: 420,
  gender: "Male",
  age: 30,
  "account number": 231234,
};

// When we need only keys
const arr = Object.keys(obj2); // it returns an array
console.log(arr); // [ 'name', 'account_Balance', 'gender', 'age', 'account number' ]

// When we need both keys and value in array then use :---> Object.entries(name_Of_Object)
const arr2 = Object.entries(obj2); // it returns an array
console.log(arr2); // Output are following:--.
// [
//   [ 'name', 'Monu' ],
//   [ 'account_Balance', 420 ],
//   [ 'gender', 'Male' ],
//   [ 'age', 30 ],
//   [ 'account number', 231234 ]
// ]

// assign use case:--> Combines two object
const obj3 = { a: 1, b: 2 };
const obj4 = { c: 3, d: 4 };

// let obj5 = Object.assign(obj3, obj4);
// console.log(obj5); // { a: 1, b: 2, c: 3, d: 4 }
// console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 } (Here obj3 is changed) (error)
// console.log(obj4); // { c: 3, d: 4 }

// How to fixed this:-->
let obj6 = Object.assign({}, obj3, obj4);
console.log(obj6); // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj3); // { a: 1, b: 2 }
console.log(obj4); // { c: 3, d: 4 }

obj6.a = 56;
console.log(obj6.a); // 56
console.log(obj3.a); // 1

// +++++ using spread to combine object (Mostly Used) ++++++++++++++++++
let obj8 = { ...obj3, ...obj4 };
console.log(obj8); // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj3); // { a: 1, b: 2 }
console.log(obj4); // { c: 3, d: 4 }

// +++++++++++++++++ Freeze And Seal ++++++++++++
// Freeze

// const user = { name: "Monu" };
// Object.freeze(user);

// user.name = "Sonu"; // ❌ No effect
// user.age = 25; // ❌ No effect
// delete user.name; // ❌ No effect

// console.log(user); // { name: "Monu" }

// +++++++++++ seal ++++++++++

const user = { name: "Monu" };
Object.seal(user);

user.name = "Sonu"; // ✅ Allowed
user.age = 25; // ❌ Not added
delete user.name; // ❌ Not deleted

console.log(user); // { name: "Sonu" }

// 🔍 Quick Comparison Table
// Feature	             freeze()	             seal()
// Add properties	       ❌ No	                ❌ No
// Delete properties	   ❌ No	                ❌ No
// Modify values	       ❌ No	                ✅ Yes
// Is extensible?	       ❌ No	                ❌ No
// Is configurable?	     ❌ No	                ❌ No
// Is writable?	         ❌ No	                ✅ Yes
