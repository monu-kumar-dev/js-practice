// ++++++++++++++++++++ Non-Optimized +++++++++++++++++++++++++++++++++++

// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const orange = document.getElementById("orange");
// const green = document.getElementById("green");
// const purple = document.getElementById("purple");

// const body = document.body;

// red.addEventListener("click", () => {
//   body.style.backgroundColor = "red";
// });

// blue.addEventListener("click", () => {
//   body.style.backgroundColor = "blue";
// });

// orange.addEventListener("click", () => {
//   body.style.backgroundColor = "orange";
// });

// green.addEventListener("click", () => {
//   body.style.backgroundColor = "green";
// });

// purple.addEventListener("click", () => {
//   body.style.backgroundColor = "purple";
// });

// ++++++++++++ Optimized Codes +++++++++++++++++++++++++++++++++++++++++++++

// const buttons = document.querySelectorAll("button");
// // console.log(buttons); // NodeLists(5)

// buttons.forEach((button) => {
//   //   console.log(button); // All Button are coming in console
//   button.addEventListener("click", () => {
//     console.log(button.id);
//     document.body.style.backgroundColor = button.id;
//   });
// });

// Note:--> This code is not totally optimized. suppose there are 100 buttons then forEach loops load buttons 100 times in memory. so, my code perform being slow.
// so, fix this issue Event Bubbling and event Capturing concept is coming.
// which is present in second.js

// ++++++++++++++++++ Event Delegation ++++++++++++++++++++++++++

// const root = document.getElementById("root");

// root.addEventListener("click", (event) => {
//   const color = event.target.id; // clicked element’s ID (like "red", "blue", etc.)

//   console.log(color);

//   // remove the clicked element
//   // event.target.remove();

//   // change background color
//   document.body.style.backgroundColor = color;
// });

// +++++++++++++++++++++ we are adding h1 in html then all color are work but when we click on h1, then background color default ho jata hai, fix it ++++++++++++++++

const root = document.getElementById("root");

root.addEventListener("click", (event) => {
  // console.log(event.target.tagName);

  if (event.target.tagName === "BUTTON") {
    document.body.style.backgroundColor = event.target.id;
  }
});
