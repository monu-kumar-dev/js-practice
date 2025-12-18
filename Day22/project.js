const quotes = [
  "Honesty is the best policy.",
  "Knowledge is power.",
  "Time is precious.",
  "Health is wealth.",
  "Practice makes perfect.",
  "Unity is strength.",
  "Patience is key.",
  "Hard work pays off.",
  "Silence is golden.",
  "Failure is the stepping stone to success.",
  "A friend in need is a friend indeed.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "In the middle of every difficulty lies opportunity.",
  "Don’t count the days, make the days count. Life is short, so live with passion.",
  "Happiness is not something ready made. It comes from your own actions.",
  "Dream big, work hard, stay focused, and surround yourself with good people.",
];

// +++++++++++++++ Events ++++++++++++++++++++++++++++++++++++++++++++

// const button = document.querySelector("button");
// button.addEventListener("mousemove", () => {
//   // we also use "Click","dblclick","mousemove","mouseover"
//   const text = document.getElementById("quote");
//   const index = Math.floor(Math.random() * quotes.length);
//   text.textContent = quotes[index];
// });

// ++++++++++++++++++ KeyBoard Events ++++++++++++++++++++++++++++++++++++++

// document.addEventListener("keyup", () => {
//   // we also use "keydown", "keyup"
//   const text = document.getElementById("quote");
//   const index = Math.floor(Math.random() * quotes.length);
//   text.textContent = quotes[index];
// });

// +++++++++++++ Event Object ++++++++++++++++++++++++++++++++++++++++++++
// document.addEventListener("keyup", (event) => {
// we also use "keydown", "keyup"
// console.log(event); // KeyboardEvent {isTrusted: true, key: 'o', code: 'KeyO', location: 0, ctrlKey: false, …}
// console.log(event.key); // jo type krenge keyboard se change krne ke liye wo text

//   if (event.key === "Enter") {
//     const text = document.getElementById("quote");
//     const index = Math.floor(Math.random() * quotes.length);
//     text.textContent = quotes[index];
//   }
//   console.log(event.target); // body
// });

// *****************************************************************************************
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  console.log(event); // PointerEvent {isTrusted: true, pointerId: 5, width: 1, height: 1, pressure: 0, …}
  console.log(event.target); // <button type="button">Generate Codes</button>
  console.log(event.type); // click
  console.log(event.clientX); // 691 (This show the distance of xdir^n in number)
  console.log(event.clientY); // 589 (This show the distance of Ydir^n in number)
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[index];
});
