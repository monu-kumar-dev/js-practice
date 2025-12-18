let user1 = {
  name: "Rohit",
  age: 20,
};

let user2 = {
  amount: 20,
  money: 50,
};

// console.log(user2.amount); // 20
// console.log(user2.money); // 50
// console.log(user2.name); // undefined

user2.__proto__ = user1;
console.log(user2.name); // Rohit
console.log(user2.age); // 20
console.log(user2.money); // 50

let arr = [10, 20, 30, 40];
console.log(arr.__proto__); // Object(0) [] (it does not show total here, it show on console)
console.log(arr.__proto__ == Array.prototype); // true
console.log(arr.__proto__.__proto__== Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__== null); // true
