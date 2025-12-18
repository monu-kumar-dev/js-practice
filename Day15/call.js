// Call Back Function:-------------->
// function ke andar dusre function ko bhejna as a parameter = call back function

// +++++ Type - 1 +++++++++

function names(fun) {
  console.log("Hello, I am name");
  fun();
}

function greet() {
  console.log("I am Call Back function");
}

// +++ Before call back output +++++
// names(); // Hello, I am name
// greet(); // I am Call Back function

names(greet);

// +++++ Type - 2 +++++++++

function names(fun) {
  console.log("Hello, I am name");
  fun();
}

names(function greet() {
  console.log("I am Call Back function");
});

// +++++++ type - 3 +++++++++

function names(fun) {
  console.log("Hello, I am name");
  fun();
}

let greets = function greet2() {
  console.log("I am Call Back function");
};

// names(greets);

// ++++++++++++ Real World Use Case +++++++++++++++++++++
function fetchData() {
  console.log("I am fetching data");
}
setInterval(fetchData, 2000); // in every 2 sec data is coming(show in output)
