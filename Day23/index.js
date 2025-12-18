// ++++++++++++ Type - 1 ++++++++++++++++++++

// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const green = document.getElementById("green");
// const yellow = document.getElementById("yellow");

// red.addEventListener("click", () => {
//   document.body.style.backgroundColor = "red";
// });
// blue.addEventListener("click", () => {
//   document.body.style.backgroundColor = "blue";
// });
// green.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });
// yellow.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

// ++++++++++++ Type - 2 ++++++++++++++++++++

function changeColor(color) {
  document.body.style.backgroundColor = color;
}


document.getElementById("red").addEventListener("click", () => changeColor("red"));
document.getElementById("blue").addEventListener("click", () => changeColor("blue"));
document.getElementById("green").addEventListener("click", () => changeColor("green"));
document.getElementById("yellow").addEventListener("click", () => changeColor("yellow"));

// Note: Yaha hm Arrow function phhir uske baad function changeColor kyu likhe.Isliye kyuki agr hm direct function likh dete hai, tb wo bina click kiye hi run ho jata hai.