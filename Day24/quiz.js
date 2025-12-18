// ++++++++ When we are doing with array then error occurs when we are giving 3 answer after the five answer. in output always comes 0 out of 5 ++++++++++++++++++++++++++++++

// const original_answer = [
//   "Sachin Tendulkar",
//   "West Indies",
//   "Sachin Tendulkar",
//   "264",
//   "Muttiah Muralitharan",
// ];

// const form = document.getElementById("quizForm");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const data = new FormData(form);
//   console.log(data); //FormData {}
//   const answer = Array.from(data.values());
//   //   console.log(answer); // ['Ricky Ponting', 'West Indies', 'Sachin Tendulkar', '264', 'Anil Kumble']

//   let result = 0;
//   for (let i = 0; i < answer.length; i++) {
//     if (answer[i] === original_answer[i]) {
//       result++;
//     }
//   }

// console.log(result);
// // ++++++ Using ClassName +++++++++++++++
//   // Get output element (assuming you have <p class="out"></p> in HTML)
//   const out = document.getElementsByClassName("out")[0];
//   out.innerText = `${result} out of 5 is correct`;

//   // document.getElementsByClassName("container")[0].append(out);

// // ++++ Use id +++++++++++++++++
// // const out = document.getElementById("result");
// // out.innerText = `${result} out of 5 is correct`;

// // document.getElementById("contain").append(out);  // why we don't write because in html already result is present, we write append when we are creating html with js.

// out.style.fontSize = "20px";
// });

// ++++++++++++++++ Solving Error With Objects ++++++++++++++++++++++++++++++++++++++++++
// This code works well

// const original_answer = {
//   q1: "Sachin Tendulkar",
//   q2: "West Indies",
//   q3: "Sachin Tendulkar",
//   q4: "264",
//   q5: "Muttiah Muralitharan",
// };
// const form = document.getElementById("quizForm");
// const out = document.getElementById("result");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const data = new FormData(form);
//   console.log(data); //FormData {}
//   const answer = Array.from(data.values());
//   //   console.log(answer); // ['Ricky Ponting', 'West Indies', 'Sachin Tendulkar', '264', 'Anil Kumble']

//   let result = 0;
//   for (let [key, value] of data.entries()) {
//     if (value === original_answer[key]) {
//       result++;
//     }
//   }
//   out.innerText = `${result} out of 5 is correct`;
//   out.style.fontSize = "20px";
// });

// ++++++++++++++ Updated array Code +++++++++++++++++++++++++++++++++++++++++++++++++++++++
const original_answer = [
  "Sachin Tendulkar",
  "West Indies",
  "Sachin Tendulkar",
  "264",
  "Muttiah Muralitharan",
];

const form = document.getElementById("quizForm");
const out = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  console.log(data);
  let result = 0;
  for (let [key, value] of data.entries()) {
    const index = parseInt(key.replace("q", "")) - 1; // q1 -> 0, q2 -> 1, etc.
    if (value === original_answer[index]) {
      result++;
    }
  }

  out.innerText = `${result} out of 5 is correct`;
});

// Important To Understand:-------->

// ⭐ Trick: Extracting number from the key
// const index = parseInt(key.replace("q", "")) - 1;

// How this works:
// key	  key.replace("q", "")	 parseInt	 index
// "q1"    	"1"	                 1	         0
// "q2"	    "2"                	 2	         1
// "q3"	    "3"	                 3	         2
// "q4"	    "4"	                 4	         3
// "q5"	    "5"	                 5	         4

// Perfect mapping to array indexes ✔