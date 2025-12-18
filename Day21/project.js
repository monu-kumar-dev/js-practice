// const quotes = [
//   "Honesty is the best policy.",
//   "Knowledge is power.",
//   "Time is precious.",
//   "Health is wealth.",
//   "Practice makes perfect.",
//   "Unity is strength.",
//   "Patience is key.",
//   "Hard work pays off.",
//   "Silence is golden.",
//   "Failure is the stepping stone to success.",
//   "A friend in need is a friend indeed.",
//   "Success is not final, failure is not fatal: it is the courage to continue that counts.",
//   "The only limit to our realization of tomorrow is our doubts of today.",
//   "In the middle of every difficulty lies opportunity.",
//   "Don’t count the days, make the days count. Life is short, so live with passion.",
//   "Happiness is not something ready made. It comes from your own actions.",
//   "Dream big, work hard, stay focused, and surround yourself with good people.",
// ];

// const text = document.getElementById("quote");

// function generateQuote() {
//   const index = Math.floor(Math.random() * quotes.length);
//   text.textContent = quotes[index];
// }
// // Show one immediately
// generateQuote();

// // Keep changing every 2 seconds
// setInterval(generateQuote, 2000);

// // +++++++++++ Change the background color in every 5 second(HomeWork) ++++++++++++++++
// // +++++ Type:1 ++++++++++

// // const color = ["red", "blue", "green", "black", "yellow"];
// // function changeColor() {
// //   const body = document.getElementById("change");
// //   const index2 = Math.floor(Math.random() * color.length);
// //   body.style.backgroundColor = color[index2];
// // }

// // changeColor();
// // setInterval(changeColor, 5000);

// // +++++ Type: 2 +++++

// // function changeColor() {
// //   const body = document.getElementById("change");
// //   const r = Math.floor(Math.random() * 256);
// //   const g = Math.floor(Math.random() * 256);
// //   const b = Math.floor(Math.random() * 256);
// //   body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// // }

// // changeColor();
// // setInterval(changeColor, 5000);

// // +++++ Type:3 (Gradient) ++++++++++
// // function changeColor() {
// //   const body = document.getElementById("change");

// //   const r1 = Math.floor(Math.random() * 256);
// //   const g1 = Math.floor(Math.random() * 256);
// //   const b1 = Math.floor(Math.random() * 256);

// //   const r2 = Math.floor(Math.random() * 256);
// //   const g2 = Math.floor(Math.random() * 256);
// //   const b2 = Math.floor(Math.random() * 256);

// //   body.style.background = `linear-gradient(to right, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;
// // }
// // changeColor();
// // setInterval(changeColor, 3000);

// +++++ Type:4 (Generate color in HexaDecimal) ++++++++++

function getRandomHexColor() {
  let hex = "#"; // every hex color starts with #
  const digits = "0123456789ABCDEF"; // all possible hex digits (0–9 and A–F)
  for (let i = 0; i < 6; i++) {
    // we need 6 characters after # (so loop runs 6 time)
    // pick a random number between 0 and 15
    let randomIndex = Math.floor(Math.random() * 16);
    // take that digit from the string
    hex += digits[randomIndex];

    // ++++++ Shorthand ++++++++
    // hex += digits[Math.floor(Math.random() * 16)];
  }
  return hex;
}

function changeColor() {
  const randomHex = getRandomHexColor();
  const body = document.getElementById("change");
  body.style.backgroundColor = randomHex;
  console.log("Background changed to:", randomHex); // for debug
}
changeColor();
setInterval(changeColor, 5000);
