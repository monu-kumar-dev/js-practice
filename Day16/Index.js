// ++++++++++++++++++ Reduce ++++++++++

const arr = [10, 20, 30, 40, 50];

// const result = arr.reduce(callback function, initialization)

// Long:--->
// const result = arr.reduce((acc, curr) => {
//   console.log(acc, curr);
//   acc = acc + curr;
//   return acc;
// }, 0);

// In-Short:-------->
const result = arr.reduce((acc, curr) => acc + curr, 0);
console.log(result); // 150

// +++++++++++++++++++ Real-World Use Case +++++++++++++++++++++
// Suppose from backend some data is coming and u have to count repeated

let arr2 = [
  "orange",
  "apple",
  "banana",
  "orange",
  "apple",
  "banana",
  "orange",
  "grapes",
];
// Final result ek object ke form me:-->
//  orange:3, apple:2, banana:2, grapes:1

const result2 = arr2.reduce((acc, curr) => {
  //   if (acc.hasOwnProperty(curr)) acc[curr]++;
  //   else acc[curr] = 1;
  acc.hasOwnProperty(curr) ? acc[curr]++ : (acc[curr] = 1); // aisa isliye likhe hai kyuki hm object me element ko access krte hai obj[elemnt] se
  return acc;
}, {});
console.log(result2); // { orange: 3, apple: 2, banana: 2, grapes: 1 }
