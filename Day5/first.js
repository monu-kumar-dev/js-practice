let a = 10;
let b = a;
b = 30;
console.log(b); // 30
console.log(a); // 10

// Primitive data type vs non primitive data type
// Primitive data type: Immutable
// Non Primitive data type: Mutable(refrenced)

let obj1 = {
  id: 20,
  naming: "rohit",
};

let obj2 = obj1;
obj2.id = 30;

console.log(obj1);
console.log(obj2);
