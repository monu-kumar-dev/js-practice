// +++++++ Shallow Copy +++++++++++

let obj1 = {
  a: 1,
  b: 2,
};
// shallow copy
let obj2 = obj1;
console.log(obj1, obj2); // { a: 1, b: 2 } { a: 1, b: 2 }
obj2.a = 10;
console.log(obj1, obj2); // { a: 10, b: 2 } { a: 10, b: 2 }

// ++++++++ Deep Copy ++++++++++

let obj3 = structuredClone(obj1);
obj3.a = 20;
console.log(obj1, obj3); // { a: 10, b: 2 } { a: 20, b: 2 }

// +++ Nested Objects +++++++++++++
const user = {
  name: "Rohit",
  balance: 420,
  address: {
    pincode: 234321,
    city: "Patna",
  },
};

// console.log(user.address); // { pincode: 234321, city: 'Patna' }
// console.log(user.address.city); // Patna

const user2 = Object.assign({}, user);
// console.log(user2); // working

// console.log(user2.address.pincode); // 234321

user2.address.pincode = 844101;
console.log(user.address.pincode); // 844101

user2.name = "Monu";
console.log(user.name); // Rohit

// ++++++++++ Note:--> ++++++++++++++++++
// In the code above (lines 37 to 41), we see two different behaviors:
// 1. When we change the `pincode` of `user2.address`, it also reflects in `user.address`.
// 2. But when we change the `name` of `user2`, it does NOT reflect in `user.name`.

// Answer:
// This happens because `Object.assign()` creates a **shallow copy**.
// - For primitive properties (like `name`), the value is copied directly, so changes in the copy do not affect the original.
// - But for nested objects (like `address`), only the **reference** is copied.
//   So both `user` and `user2` share the same `address` object in memory.
//   That's why changes to `user2.address` also affect `user.address`.

// ⚠️ Always remember:
// A shallow copy only clones the first level — nested objects remain shared!

// +++++++++++ Checking Spread +++++++++++++++++++++++
const users = {
  name: "Rohit",
  balance: 420,
  address: {
    pincode: 234321,
    city: "Patna",
  },
};

const users2 = { ...users };
console.log(users2);
users2.address.city = "Hajipur";
console.log(users.address.city); // Hajipur

users2.name = "Monu";
console.log(users.name); // Rohit

// Note:--> JavaScript mein spread operator (...) bhi shallow copy hi banata hai — bilkul Object.assign() ki tarah.

// 🎯 Agar aapko deep copy chahiye(Always use structuredclone): ------->
// const user2 = structuredClone(user);

// +++++++++Destructuring of an object +++++++++++
let obj = {
  name: "Monu",
  money: 430,
  balance: 30,
  age: 20,
  adhaar: "hdshaiwud",
};

// const { name, balance } = obj;
// console.log(name, balance); // Monu 30

// const { name: full_name, balance: amount, age } = obj;
// console.log(full_name, amount, age); // Monu 30 20

const { name, age, ...obj5 } = obj;
console.log(name, age); // Monu 20
console.log(obj5); // { money: 430, balance: 30, adhaar: 'hdshaiwud' }

// +++++++ Destructuring in Array +++++++++++
const arr = [3, 2, "Monu", 8, 11, 23];
const [first, second] = arr;
console.log(first, second); // 3 2

const [First, , Third] = arr; // if we want to access 1st and 3rd then we use space at that position
console.log(First, Third); // 3 Monu

const [, seconds, Thirds, ...all] = arr;
console.log(seconds, Thirds); // 2 Monu
console.log(all); // [ 8, 11, 23 ]

// ++++ Destructuring of Nested Objects +++++++++++++++++
const users5 = {
  named: "Rohit",
  balance: 420,
  address: {
    pincode: 234321,
    city: "Patna",
    state: "Uk",
  },
};

const { named: My_name } = users5;
console.log(My_name); // Rohit

const { address } = users5;
console.log(address); // { pincode: 234321, city: 'Patna' }

const {
  address: { pincode },
} = users5;
console.log(pincode); // 234321

const {
  address: { city, state },
} = users5;
console.log(city, state); // Patna Uk

// +++++++++ Destructuring object inside array ++++++++++++++++++++++++
const users10 = {
  named: "Rohit",
  balance: 420,
  arr1: [20, 30, 40, 50, 90, 87, 65],
  address: {
    pincode: 234321,
    city: "Patna",
    state: "Uk",
  },
};

const { arr1 } = users10;
console.log(arr1); // [ 20, 30, 40, 50, 90, 87, 65 ]

const {
  arr1: [first_Element],
} = users10;

console.group(first_Element); // 20

const {
  arr1: [first_Element1, , , , , six],
} = users10;

console.group(first_Element, six); // 20 87

// +++++++++++ Object inside function Destructuring ++++++++++++
let user20 = {
  name: "Monu",
  amount: 420,
  greet: function () {
    console.log("Hello Coder Army");
  },
  meet: function () {
    return 20;
  },
};
user20.greet(); //  Hello Coder Army
console.log(user20.meet()); // 20
