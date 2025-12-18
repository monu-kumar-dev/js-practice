// Map: Value store in key and value pair

const map1 = new Map();
map1.set(3, 90);
map1.set("Rohit", 65);
map1.set(12, "Monu");
map1.set(12, "Monu"); // ye ek baar hi count hogaa
map1.set("Rohit", 60); // ye value ko update kr degaa

console.log(map1); // Map(3) { 3 => 90, 'Rohit' => 60, 12 => 'Monu' }

map1.delete("Rohit");
console.log(map1); // Map(2) { 3 => 90, 12 => 'Monu' }

console.log(map1.has("Rohit")); // false
// console.log(map1.size); // 2

map1.clear();
// console.group(map1); // Map(0) {}

// +++++++ We also create map like this +++++++++++++++++++
const map2 = new Map([
  [4, "rohit"],
  ["Mohan", "Rohan"],
  [30, 9],
  [63, 78],
]);
// console.log(map2); // Map(3) { 4 => 'rohit', 'Mohan' => 'Rohan', 30 => 9, 63 => 78 }

// ++++ Iteration +++++++++++++++++++++
// for of loop
for (let value of map2) {
    console.log(value);
}

// Outputs:--------->
//   [ 4, 'rohit' ]
//   [ 'Mohan', 'Rohan' ]
//   [ 30, 9 ]
//   [ 63, 78 ]

// +++++ If we want separate value:-------> ++++++++++++++
for (let [key, value] of map2) {
  //   console.log(key, value);
}

// Outputs:-------->
// 4 rohit
//   Mohan Rohan
//   30 9
//   63 78

// ++++++++++++ Iteration using forEach loop ++++++++++++++
map2.forEach((value, key) => console.log(key, value));
// Outputs:------->
// 4 rohit
// Mohan Rohan
// 30 9
// 63 78
