// Scope ke bare me
// Global scope, local scope(function scope), block scope

// 1. Global Scope
// let a = 10;
// var b = 20;
// const c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

function value() {
  console.log(a);
  console.log(b);
  console.log(c);
}
//  value();

let value2 = () => {
  console.log(a);
  console.log(b);
  console.log(c);
};

// value2();

// 2.Local Scope

function greet() {
  let a = 10;
  var b = 20;
  const c = 30;
  console.log("Hello Function");
  console.log(a, b, c);
}

// greet();
// console.log(a); // error
// console.log(b); // error
// console.log(c); // error

// 3. Block Scope
if (true) {
  let a = 10;
  var b = 20;
  const c = 30;
}

// console.log(a); // error
// console.log(b); // 20
// console.log(c); // error

//+++++++++++++++ Some Interesting things about var +++++++++++++++++++++++++++

// In Let not allow to access data before initialization
// console.log(ar); // error
// let ar = 2;

// In const not allow to access data before initialization
// console.log(ar); // error
// const ar = 2;

// In Var allow to access data before initialization
// console.log(ar); // undefined
// var ar = 2;

//+++++++++++++++ Some Interesting things about fuction +++++++++++++++++++++++++++

// Here we can see this allow to access before function initialization

check(); // It's working wow
function check() {
  console.log("It's working wow");
}

// check(); // It's working

//++++++++++ Checking in second function++++++++++

// console.group(fun()); // error(Cannot access 'fun' before initialization)
let fun = function check() {
  console.log("It's working or not");
};

// console.group(fun()); // It's working or not
