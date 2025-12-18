// Lexical Scope:---------->

// Guess Output-1:-------->
let a = "global";

function outer() {
  let b = "outer";

  function inner() {
    let c = "inner";
    console.log(a, b, c);
  }

  inner();
}

outer(); // Outputs:global outer inner

// Guess Output-2:-------->
let name = "outside"; // Global variable

function outer() {
  let name = "inside"; // Local variable to outer()

  function inner() {
    console.log(name); // Will search in lexical (written) scope
  }

  inner(); // Call inner()
}

outer(); // Call outer()
