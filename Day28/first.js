// Topic: call back Hell

// Without callback function:--->
// function fetchuser() {
//   console.log("Fetching the user Details.....");
//   setTimeout(() => {
//     console.log("Data Fetched succesfully");
//     const name = "Rohit";

//     // Hardcoded actions inside fetchuser
//     greet(name);
//     meet(name);
//   }, 2000);
// }

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function meet(name) {
//   console.log(`Hello ${name}, I will meet you in Delhi`);
// }

// fetchuser();

// 👉 What’s happening?
// 1.fetchuser is responsible for fetching the name.
// 2.After fetching, it automatically calls greet and meet.
// 3.If tomorrow you also want to say bye(name), you must open the fetchuser function and edit it, like this:-------->

// setTimeout(() => {
//   console.log("Data Fetched succesfully");
//   const name = "Rohit";

//   greet(name);
//   meet(name);
//   bye(name);   // <-- New function, had to change fetchuser
// }, 2000);

// ⚠️ Problem: Every time you need a new action, you must modify the fetchuser function itself.
// That makes the code less flexible and harder to maintain.

// With callback:---------------------->

function fetchuser(callback) {
  console.log("Fetching the user Details.....");
  setTimeout(() => {
    console.log("Data Fetched succesfully");
    const name = "Rohit";

    // Only call the callback
    callback(name);
  }, 2000);
}

function greet(name) {
  console.log(`Hello ${name}`);
}

function meet(name) {
  console.log(`Hello ${name}, I will meet you in Delhi`);
}

// Normally, we pass one function like this:------------->
// fetchuser(greet); // calls greet("Rohit")
// fetchuser(meet); // calls meet("Rohit")

// Since fetchuser only accepts one callback, we can’t do this directly:---------->
// fetchuser(greet, meet, bye); ❌ // Not allowed

// So, we create a new function on the spot that calls all three:------------>
// // Here we decide what to do after fetch
// fetchuser((name) => {
//   greet(name);
//   meet(name);
// });

// 👉 What’s happening?
// 1.Now, fetchuser doesn’t care about greet or meet.
// 2.It just says: “Hey, once I get the data, I’ll give it to whoever you tell me.”
// 3.The caller decides what should happen.
// 4.If tomorrow you want to add bye(name), you don’t touch fetchuser. You only change the callback:----------->

// fetchuser((name) => {
//   greet(name);
//   meet(name);
//   bye(name); // <-- Just add here, fetchuser untouched
// });

// 🔑 Big Difference:------------->
// Without callback → fetchuser decides what to do (hardcoded). To add new actions, you must edit fetchuser.
// With callback → You (the caller) decide what to do. To add new actions, you just change the callback when calling fetchuser.

function user(callback) {
  console.log("Fetching the user Detail....");
  setTimeout(() => {
    console.log("Data Fetch successfully");
    const obj = {
      name: "Rohit",
      age: 28,
      city: "Delhi",
    };
    // Data fetched from backendd
    callback(obj);
  }, 2000);
}

function greets(obj) {
  console.log(`Hello ${obj.name}`);
}

function meets(obj) {
  console.log(`Hello ${obj.name}, I will meet you in Delhi`);
}

function edits(obj) {
  console.log(`Edit ${obj.name}, of the user`);
}

// Single actions:---->
// fetchuser(greets);
// fetchuser(meets);

// If i want to access all the three function then:--->
user((obj) => {
  greets(obj);
  meets(obj);
  edits(obj);
});
