// ++++++++++ Global Object ++++++++++++++++++

// ++++++++++ part-1 ++++++++++++++++++

// 1: Global Context (Outside Any Function)
// globalObject: object
// Browser: window is the global object.
// Node.js: global is the global object.
// Universal: globalThis works in both environments.

console.log("Hello world");
console.log(Math.random());
// setInterval();
// new object();
// new String("Rohit");

// console.log(window.Math.random()); // error(window is not defined)
console.log(globalThis.Math.random()); // works everywhere

// ++++++ var, let, and const in global scope :----------> ++++++++
// In browsers:------->
// var → becomes a property of the global object.
// let & const → stay in the Script scope (not attached to global object).

let a = 10;
const b = 20;
var c = 50;

console.log(this.c); //  Browser: 50, Node.js: undefined
console.log(this.b); // undefined (not attached)
// Why?
// var declares variables in the global object’s scope when used outside functions.
// let and const are block-scoped and don’t become global properties.

// this at the top level :-------->
// Browser: In the global scope, this is window.
// Node.js: At the top level in a file, this is {} (module scope, not global).

console.log(this);
// Browser: Window {...}
// Node: {}

// ++++ Now we talk only about console. so, check this output in windos console not in node ++++

// ++++++++++++++++++ Second Part +++++++++++++++++++++++++++
// 2. Inside a function
// a: (Non-Strict Mode) :----> When this is used inside a regular function, it refers to the global object.

function greet() {
  console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}
greet();
// Regular functions in non-strict mode default this to the global object if not called with an owner.

// b: (Strict Mode) :--------->  this will be undefined inside a function.
("use strict");
function greet() {
  console.log(this);
}
greet();
window.greet();
// In strict mode, if you call a function without an object, this becomes undefined instead of the global object.

// ++++++++++++++++++ Third Part +++++++++++++++++++++++++++

// 3: Inside a Method (Object Context) :----->
// When this is used inside an object’s method, it refers to the object that owns the method.

const obj = {
  name: "Rohit",
  age: 20,
  greet: function () {
    console.log(this);
  },
  meet: function () {
    console.log(this.name);
  },
};

obj.greet(); // {name: 'Rohit', age: 20, greet: ƒ, meet: ƒ}
obj.meet(); // Rohit

// ****************************************************************

// Arrow functions don’t have their own this.
// Instead, they inherit this from the surrounding (lexical) scope.
// Arrow functions → “I don’t care who calls me. I’ll use the this from the place I was born.”

let obj2 = {
  name: "rohit",
  age: 11,
  greet: () => {
    console.log(this);
  },
};

obj2.greet(); // Window {...}

//  In this code which start from line no. 100. we know that arrow function has not defined this keyword. so,they inherit this from the surrounding (lexical) scope greet function.

let obj3 = {
  name: "rohit",
  age: 11,
  greet: function () {
    let ab = () => {
      console.log(this);
    };

    ab();
  },
};
obj3.greet(); // {name: 'rohit', age: 11, greet: ƒ}

// ++++++++ Note for Upper Both Function ++++++++

// 💡 Think of it like this:------->
// Normal functions → “Who called me? I’ll take my this from them.”
// Arrow functions → “I don’t care who calls me. I’ll use the this from the place I was born.”

// ****************************************************************

// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let at = new Person("Rohit", 20);
console.log(at);

// ++++++++++++ Guess Output +++++++++++++++++++
// Q1.
let arrow = () => {
  console.log(this);
};
arrow(); // window(...)
// In this code we know that arrow function does not has their own this keyword. so, it's inherit from the global because it is in the open not inside any scope.

// Q2.
let meet = function () {
  console.log(this);
};
meet(); // window(...)

// Q3.
("use strict");
let meet2 = function () {
  console.log(this);
};
meet2(); // window(...)
// Note:---> In some browser also so undefined.
