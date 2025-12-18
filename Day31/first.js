// small code to understand:------------->
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello Everyone");
//   }, 5000);
// });

// console.log(p1); // Promise { <pending> }

// Promises:-->
// p1.then((Response) => console.log(Response)); // Hello Everyone

// same with async await:---->
// async function greet() {
//   const data = await p1;
//   console.log(data);
// }
// greet(); // Hello Everyone

// Guess Output:-->
// async function greet() {
//   const data = await p1;
//   console.log(data);

//   const data2 = await p1;
//   console.log(data2);
// }
// greet();

// How it works:---->
// First await p1 waits 5 second → logs "Hello Everyone".
// Second await p1 returns instantly with "Hello Everyone" again, because p1 is already resolved.
// If instead p1 was a function call returning a new promise each time (like fetch()), then each await would trigger a new async operation.

//  Guess Output:---------------->

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("first promise resolved");
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Second promise resolved");
//   }, 5000);
// });

// async function greet() {
//   const data = await p1;
//   console.log(data);

//   const data2 = await p2;
//   console.log(data2);
// }

// greet();

// The greet function is called, starting the entire process.
// Sequence of Events and Output ⏳ :--->
// Here is the step-by-step timeline of the code execution:---------------->

// Time Elapsed ->	Event
// 0 seconds	->The script starts. p1 and p2 are created, and both of their 5-second timers begin running simultaneously. The greet() function is called.
// 0 seconds	->Execution enters greet(). It reaches const data = await p1;. Execution pauses inside greet(), waiting for p1 to resolve.
// 5 seconds	->p1 and p2 both resolve with their respective messages.
// 5 seconds	->The execution of greet() resumes.
// 5 seconds	->console.log(data) runs.
// 5 seconds (approx.)	->Execution reaches const data2 = await p2;. Since p2 has already resolved (or is resolving), the wait time is negligible.
// 5 seconds (approx.)	->console.log(data2) runs.

// Guess output of this question:--->
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("first promise resolved");
//   }, 8000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Second promise resolved");
//   }, 5000);
// });

// async await:------->
// async function greet() {
//   const data = await p1;
//   console.log(data);

//   const data2 = await p2;
//   console.log(data2);
// }

// greet();

// Outputs:---> (It take 8 second and print both)
// first promise resolved
// Second promise resolved

// Promise:--->
// p1.then((value) => console.log(value));
// p2.then((value) => console.log(value));

// Outputs:--> (firstly first 5s wala kyuki it take less time of first which is 8s)
// Second promise resolved
// first promise resolved

// if i want both takes his time then:---->
// function test1() {
//   const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("first promise resolved");
//     }, 8000);
//   });
//   return p1;
// }

// function test2() {
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second promise resolved");
//     }, 5000);
//   });
//   return p2;
// }

// async function greet() {
//   const data = await test1();
//   console.log(data);

//   const data2 = await test2();
//   console.log(data2);
// }
// greet();

// Guess Output:---> (Jb console bhi aa rha ho tb)

// function test1() {
//   const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("first promise resolved");
//     }, 8000);
//   });
//   return p1;
// }

// function test2() {
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second promise resolved");
//     }, 5000);
//   });
//   return p2;
// }

// async function greet() {
//   console.log("Hello I Greet you");
//   const data = await test1();
//   console.log(data);

//   const data2 = await test2();
//   console.log(data2);
// }
// greet();
// console.log("Hello Coder Army");
// console.log("Kaise ho aap sab log");

// // Outputs:---> (Uncomment all code 138 to 166)
// // Hello I Greet you
// // Hello Coder Army
// // Kaise ho aap sab log
// // first promise resolved
// // Second promise resolved

// Function ko Parellal execute kaise krwaye ki dono same time me aaye:-->
function test1() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("first promise resolved");
    }, 8000);
  });
  return p1;
}

function test2() {
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second promise resolved");
    }, 5000);
  });
  return p2;
}

async function greet() {
  console.log("Hello I Greet you");
  const [data, data2] = await Promise.all([test1(), test2()]);
  console.log(data);
  console.log(data2);
}
greet();

// Outputs:--->
// Hello I Greet you
// first promise resolved
// Second promise resolved