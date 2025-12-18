const arr = [2, 35, 1, 8, 9, "monu", true, 8];
console.log(arr[1]); // 35
console.log(arr.at(-2)); // true
// at is latest, negative index le leta hai aur negative means last se

console.log(arr.length); // 8

// const newarr = arr;
// console.log(newarr == arr); // true

// const newarr = structuredClone(arr);
// console.log(newarr == arr); // false

// push: Add Element at the last
arr.push(30);
arr.push(50);
console.log(arr);

// pop: Remove Element at the last
arr.pop();
arr.pop();
console.log(arr);

// unshift: add element at start
arr.unshift(123);
arr.unshift(143);
console.log(arr);

// shift: Remove element at the first
arr.shift();
arr.shift();
console.log(arr);

// delete operation
// delete arr[0];
console.log(arr); //  [ <1 empty item>, 35, 1, 8, 9, 'monu', true, 8 ]

console.log(arr.indexOf(8)); // 3
console.log(arr.lastIndexOf(8)); // 7
console.log(arr.includes(true)); // true

// slice: jo number denge usse ek kam tk print hogaa and isse array pr fark nhi pdta hai.
console.log(arr); // [2, 35, 1, 8, 9, "monu", true, 8]
console.log(arr.slice(2, 5)); // [1, 8, 9]
console.log(arr); // [2, 35, 1, 8, 9, "monu", true, 8]

// Splice :isme 2 no. dete hai ek kaha se suru krna hai aur dusra batataa hai kitna print krna hai (Jaise agr 2, 5 diya gya hai to 2 se suru krenge aur 5 go total elemnt hogaa.) and wo array se gayab ho jata hai.

// console.log(arr); // [2, 35, 1, 8, 9, "monu", true, 8]
// console.log(arr.splice(2, 5)); // [1, 8, 9, "monu", true]
// console.log(arr); // [2, 35, 8]

// splice(starting_index, total_element_delete, add value);
arr.splice(2, 3, "Money", 89);
console.log(arr); // [ 2, 35, 'Money', 89, 'monu', true, 8 ]

// toString method
console.log(arr.toString()); // 2,35,Money,89,monu,true,8
console.log(arr.join()); // 2,35,Money,89,monu,true,8
console.log(arr.join(" ")); // 2 35 Money 89 monu true 8
console.log(arr.join("*")); // 2*35*Money*89*monu*true*8

// +++++ Important +++++++++
let a = [0, 1, 2, 3, 4, 5];
console.log(typeof a); // object
let a2 = a.join();
console.log(a2); // 0, 1, 2, 3, 4, 5;
console.log(typeof a2); // string

// concat
// let arr1 = [2, 35, 6, 11];
// let arr2 = [5, 12, 19, 20];

// let arr3 = arr1.concat(arr2);
// console.log(arr3); // [2, 35, 6, 11, 5, 12, 19, 20]
// console.log(arr1); // [2, 35, 6, 11] (unchanged)
// console.log(arr2); // [5, 12, 19, 20] (unchanged)

let arr1 = [2, 35, 6, 11];
let arr2 = [5, 12, 19, 20];
let arr3 = [3, 4, 3, 2, 1];
// let arr4 = arr1.concat(arr2);
// let arr5 = arr4.concat(arr3);
// console.log(arr5); // [2, 35, 6, 11, 5, 12, 19, 20, 3, 4, 3, 2, 1]

// let arr5 = arr1.concat(arr2, arr3);
// console.log(arr5); // [2, 35, 6, 11, 5, 12, 19, 20, 3, 4, 3, 2, 1]

// arr1.push(arr2);
// console.log(arr1); // [ 2, 35, 6, 11, [ 5, 12, 19, 20 ] ]

arr1.push(arr3);
console.log(arr1); // [ 2, 35, 6, 11, [ 3, 4, 3, 2, 1 ] ]
console.log(arr1[2]); // 6
console.log(arr1[4]); // [ 3, 4, 3, 2, 1 ]
console.log(arr1[4][3]); // 2

// +++++++++++++++++++++++++ 2D-Array +++++++++++++++++++++++++++++++++++++++++++++++++++

// 2d array
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr2d[0]); // [1,2,3]
console.log(arr2d[0][2]); // 3
console.log(arr2d[2][1]); // 8

let newArr = arr2d.flat(); // flat ka use krke hm 2d array se 1d array banate hai
console.log(newArr); // [1,2,3,4,5,6,7,8,9]

let arr3d = [
  [1, 2, 3, [12, 14, 16]],
  [4, 5, 6],
  [7, 8, 9],
];

// let newArr2 = arr3d.flat(2); // if we donot understand what we write in flat write infinity.
// console.log(newArr2); // [1, 2, 3, 12, 14, 16, 4, 5, 6, 7, 8, 9]

let newArr2 = arr3d.flat(Infinity);
console.log(newArr2); // [1, 2, 3, 12, 14, 16, 4, 5, 6, 7, 8, 9]

// Suppose we are taking some data from backend, then how we know that is array or not because when we use typeof then he give object then we use Array.isArray() method to check

let abc = [2, 4, 5, 4, 1];
console.log(typeof abc); // object
console.log(Array.isArray(abc)); // true

// we also create array like this but it is not recommended
let ac = new Array(10, 20, 30);
console.log(ac); // [10, 20, 30]
console.log(ac.length); // 3

let ac2 = new Array(10);
console.log(ac2); // [ <10 empty items> ]
console.log(ac2.length); // 10

// in this when we are working with more than one element is working good. But when we have one element in the array. it shows the array length
