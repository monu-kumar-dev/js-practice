// Advanced Loop

let obj = {
  name: "Mohan",
  age: 32,
  gender: "Male",
  city: "Kotdwar",
};

// For_IN loop, I can Iterate over keys in an object
for (let key in obj) {
  console.log(key, obj[key]);
}

// Object.keys(obj);
console.log(Object.keys(obj)); // [ 'name', 'age', 'gender', 'city' ]

// +++ Here, we see in this we can access key using for_in loop and object.keys() then what is the difference +++++++++
let obj2 = Object.create(obj);
obj2.money = 420;
obj2.id = "Rohit123";
// console.log(obj2); // { money: 420, id: 'Rohit123' }
// console.log(obj2.city); // Kotdwar

console.log(Object.keys(obj2)); // [ 'money', 'id' ]

for (let key in obj2) {
  console.log(key); // it print both added plus inherite
}

// Note:--> Here we see when we create a new obj2 with inherited the data from obj and add some property and apply Object.keys() and for_in loop then we see differences:-->
// 1. when we are apply object.keys(), it is showing the new added data not the inherited data
// 2. when we are apply For_in loop, it is showing the both new added data and the inherited data
