let obj = {};

// console.log(obj);
obj.name = "Rohit";
obj.age = 20;
// key, value, writable, enumerable, configurable
// console.log(Object.getOwnPropertyDescriptor(obj, "name")); // output are followings:-->
//  {
//   value: 'Rohit',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// writable = false, we can not change the value
obj.name = "Mohit";
// console.log(obj.name); // Rohit

// +++++++++ We are going to create a new object with writable, enumerable, configurable keys +++++++++++++++++++
let obj2 = {};
Object.defineProperty(obj2, "name", {
  value: "Monu",
  writable: false,
  enumerable: true,
  configurable: true,
});

obj2.name = "Raghav";
// console.log(obj2); // { name: 'Monu' }  (when i give the falue in writable false, we donot able to modified it.)

// Jb enumerable false ho:--->
let obj3 = {};
Object.defineProperty(obj3, "name", {
  value: "Monu",
  writable: true,
  enumerable: false,
  configurable: true,
});

// console.log(obj3.name); // Monu
obj3.name = "Raghav";
console.log(obj3); // {} (kyunki enumerable nahi hai)
console.log(Object.keys(obj3)); // [] (enumerable properties hi deta hai)
// console.log(obj3.name); // Raghav
for (let key in obj3) {
  //   console.log(key); // Kuch bhi print nahi hoga
}

// ++++ Why for...in loop print nothing +++++++++
// Kyunki for...in bhi enumerable properties hi loop karta hai — aur tumne explicitly "name" ko enumerable false diya hai, isliye yeh property skip ho jaati hai.

// Jb configurable false ho:--->
let obj4 = {};
Object.defineProperty(obj4, "name", {
  value: "Monu",
  writable: false,
  enumerable: true,
  configurable: false,
});

// ++ JB Writable: True hai Tb ++++++++
obj4.name = "Raghav";
// console.log(obj4.name); // Raghav

// ++ JB Writable: false hai Tb ++++++++
delete obj4.name; // ❌ Nahi hoga delete
// console.log(obj4.name); // Monu

// Ab yeh bhi error dega:
// Object.defineProperty(obj4, "name", { writable: true }); // error(Cannot redefine property)

// Note:--->
// 🧨 3. configurable – Kya property ko delete ya redefine kar sakte ho?
// Meaning:-->
// Agar configurable: false hai, to aap:------>
// 1.Us property ko delete nahi kar sakte
// 2.Uski writable, enumerable, etc. settings dubara change nahi kar sakte

// +++++++ Real Life Use +++++++++++++++++++++++
// Suppose anyone want to open a account in any bank then his account number never be changed. so, here we use:---------->

const Mohan = {
  "account Number": 20123465,
  "IFSC CODE": "awrety234565",
  age: 34,
};

// Mohan["account Number"] = 345432123;
// console.log(Mohan["account Number"]);  // 345432123 (here account number be changed)

// Object.defineProperty(Mohan, "account Number", {
//   writable: false,
// });
// Object.defineProperty(Mohan, "IFSC CODE", {
//   writable: false,
// });

//++++++++ Shorthand of upper both +++++++++
Object.defineProperties(Mohan, {
  "account Number": {
    writable: false,
  },
  "IFSC CODE": {
    writable: false,
  },
});

Mohan["account Number"] = 345432123;
Mohan["IFSC CODE"] = "BARBOHAJI1234";
// console.log(Mohan["account Number"]); // 20123465 ❌ Change nahi hua
// console.log(Mohan["IFSC CODE"]); // "awrety234565" ❌ Change nahi hua

// +++++++ Guess Output ++++++++++

const customer = {
  name: "Monu",
  "account Number": 20123465,
  "IFSC CODE": "awrety234565",
  age: 34,
};

let customer2 = Object.create(customer);
customer2.nominee_name = "Rahul";
customer2.nominee_age = 32;

Object.defineProperty(customer, "name", {
  enumerable: false,
});

// enumerable: jis bhi key ka enumerable true hogaa, wo hi access ya print hogaa
// Inherit hoke bhi koi bhi property ya key aati hai agr uska enumerable true hua to wo bhi print hogi.
for (let key in customer) {
  console.log(key); // here print all without of name property
}
// Priniting which is inherit:----->
for (let key in customer2) {
  console.log(key); // here print all (Inherit + Own) but without of name property
}

// +++++++ Important +++++++++++++++++++++++++++++
// here we see we have a customer object which has some property and we create a new customer2 which has inherit from customer and also have some new or extra properties.
// And when we use for...in loop in customer2 then he shaw me the both customer2 extra added property and customer1 property which has inherit by customer2.
// then, I have a question, we know that customer object also inherit from Object.Prototype then why he does not appear
// Answer:--> Because in his property enumerable property has false value.

// Examples:----->

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

// Output:-->

// {
//   value: [Function: toString],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }

// Here, we see enumerable is false, i can make enumarable true and it works:---->

Object.defineProperty(Object.prototype, "toString", {
  enumerable: true,
});

for (let key in customer) {
  // console.log(key); // toString is coming in the output. so, it works fine.
}

// Output:---->

// account Number
// IFSC CODE
// age
// toString
