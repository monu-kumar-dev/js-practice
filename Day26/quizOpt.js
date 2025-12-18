// const questionBank = [
//   {
//     question: "Who has the most centuries in international cricket?",
//     options: [
//       "Sachin Tendulkar",
//       "Virat Kohli",
//       "Ricky Ponting",
//       "Jacques Kallis",
//     ],
//     answer: "Sachin Tendulkar",
//   },
//   {
//     question: "Who has the highest individual score in ODI cricket?",
//     options: [
//       "Rohit Sharma",
//       "Martin Guptill",
//       "Chris Gayle",
//       "Virender Sehwag",
//     ],
//     answer: "Rohit Sharma",
//   },
//   {
//     question: "Who is known as the 'Wall' of Indian cricket?",
//     options: [
//       "Rahul Dravid",
//       "Sourav Ganguly",
//       "Sunil Gavaskar",
//       "Anil Kumble",
//     ],
//     answer: "Rahul Dravid",
//   },
//   {
//     question:
//       "Which bowler has taken the most wickets in international cricket?",
//     options: [
//       "Muttiah Muralitharan",
//       "Shane Warne",
//       "Anil Kumble",
//       "James Anderson",
//     ],
//     answer: "Muttiah Muralitharan",
//   },
//   {
//     question: "Who has scored the fastest 50 in T20 internationals?",
//     options: ["Yuvraj Singh", "Chris Gayle", "KL Rahul", "Rohit Sharma"],
//     answer: "Yuvraj Singh",
//   },
//   {
//     question: "Which country has won the most Cricket World Cups?",
//     options: ["Australia", "India", "West Indies", "England"],
//     answer: "Australia",
//   },
//   {
//     question:
//       "Who was the first Indian to win the ICC Cricketer of the Year award?",
//     options: ["Rahul Dravid", "Sachin Tendulkar", "MS Dhoni", "Virat Kohli"],
//     answer: "Rahul Dravid",
//   },
//   {
//     question: "Who has the most runs in a single World Cup edition?",
//     options: [
//       "Sachin Tendulkar",
//       "Rohit Sharma",
//       "Martin Guptill",
//       "Matthew Hayden",
//     ],
//     answer: "Rohit Sharma",
//   },
//   {
//     question: "Which cricketer has played the most international matches?",
//     options: [
//       "Sachin Tendulkar",
//       "MS Dhoni",
//       "Ricky Ponting",
//       "Mahela Jayawardene",
//     ],
//     answer: "Sachin Tendulkar",
//   },
// ];

// // function randomQuestion() {
// //   // use set for unique object because i donot want to same question
// //   const data = new Set();
// //   while (data.size != 5) {
// //     const index = Math.floor(Math.random() * questionBank.length);
// //     data.add(questionBank[index]);
// //   }
// //   // converting set into array
// //   return [...data];
// // }

// // Optimized way of randomQuestion function:------------------->

// // function randomQuestion() {
// //   // jb hm array ko sort krte hai tb hm dekhte hai ki sorting aachse se work nhi kr rha hai ex:--> const arr = [10,20,100],console.log(arr.sort()); output: [10, 100, 20] aata hai kyuki wo number ko string smjhkr work krta hai. Is problem ko fix krne ke liye hm call back function ka use krte hai ex:--> console.log(arr.sort((a,b) => a-b)); Output: [10,20,100]
// //   // Note:--->
// //   // Ye work kaise krta hai:--> Agr (a,b) me value -ve jata hai tb a,b ka order change nhi hota hai agr value +ve jata hai to order change ho jata hai aur agr 0 jata hai tb bhi value change nhi hota hai.
// //   // forex:--->
// //   // const arr = [20, 40, 50, 30, 10];
// //   // console.log(arr.sort((a, b) => a - b)); // [10,20,30,40,50]

// //   // time complexity = nlog(n) (This is bad tc)
// //   // questionBank.sort(() => Math.random() - 0.5); // why we subtract 0.5 because we know that math.random() gives the value b/w 0 to 1 and if we subtract 0.5 then half is +ve and half is -ve
// //   // return questionBank.slice(0, 5);

// //   // Optimized:---------->(Fisher algorithm):----------------->(HW)

// // }

// function randomQuestion() {
//   const arr = [];
//   let length = questionBank.length;

//   for (let i = 0; i < 5; i++) {
//     const index = Math.floor(Math.random() * length);
//     arr.push(questionBank[index]);

//     // // swap
//     // const temp = questionBank[index];
//     // questionBank[index] = questionBank[length - 1];
//     // questionBank[length - 1] = temp;

//     // Swapping with destructure:-------------->
//     [questionBank[index], questionBank[length - 1]] = [
//       questionBank[length - 1],
//       questionBank[index],
//     ];

//     length--;
//   }
//   return arr;
// }

// // select the form and insert all the elements into it
// const form = document.querySelector("form");

// const problem = randomQuestion();

// const original_answer = {};
// // key value

// problem.forEach((obj, index) => {
//   // Creating div
//   const div_element = document.createElement("div");
//   // setting className
//   div_element.className = "question";
//   original_answer[`q${index + 1}`] = obj["answer"];

//   const para = document.createElement("p");
//   para.textContent = `${index + 1}. ${obj["question"]}`;
//   div_element.appendChild(para);

//   // create 4 options
//   //   ["Sachin Tendulkar","Virat Kohli","Ricky Ponting","jacques Kallis",]
//   obj["options"].forEach((data) => {
//     const label = document.createElement("label");
//     const input = document.createElement("input");
//     input.type = "radio";
//     input.name = `q${index + 1}`;
//     input.value = data;

//     label.appendChild(input);
//     label.appendChild(document.createTextNode(data));
//     div_element.appendChild(label);
//     div_element.appendChild(document.createElement("br"));
//   });
//   form.appendChild(div_element);
// });

// const button = document.createElement("button");
// button.type = "submit";
// button.className = "submit-btn";
// button.textContent = "submit";
// form.appendChild(button);

// // check the submitted form

// const out = document.getElementById("result");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const data = new FormData(form);
//   let result = 0;

//   // Reset previous highlights
//   document.querySelectorAll("label").forEach((label) => {
//     label.style.background = "";
//     label.style.borderColor = "#ddd";
//   });

//   for (let [key, value] of data.entries()) {
//     if (value === original_answer[key]) {
//       result++;
//       // highlight correct answer
//       document.querySelector(
//         `input[name="${key}"][value="${value}"]`
//       ).parentElement.style.background = "#e7fbe7";
//     } else {
//       // highlight wrong answer in red
//       document.querySelector(
//         `input[name="${key}"][value="${value}"]`
//       ).parentElement.style.background = "#ffeaea";
//     }
//   }

//   out.style.display = "block";
//   out.innerText = `${result} out of 5 is correct`;

//   if (result >= 3) {
//     out.className = "out success";
//   } else {
//     out.className = "out fail";
//   }
// });



// ++++++++++++++++ Optimized code +++++++++++++++++++++++++++++++++++++

const questionBank = [
  // Physics 17
  {
    question: "Which device converts mechanical energy into electrical energy?",
    options: ["Motor", "Generator", "Transformer", "Battery"],
    answer: "Generator",
  },

  // Chemistry 17
  {
    question: "Which gas is used in the preparation of soda water?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: "Carbon dioxide",
  },

  // Math 17
  {
    question: "The area of a circle with radius r is:",
    options: ["2πr", "πr²", "πr", "2πr²"],
    answer: "πr²",
  },

  // Physics 18
  {
    question: "Which colour has the longest wavelength?",
    options: ["Red", "Blue", "Green", "Violet"],
    answer: "Red",
  },

  // Chemistry 18
  {
    question: "The atomic number of oxygen is:",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },

  // Math 18
  {
    question: "The value of ∫ 1/x dx is:",
    options: ["x + C", "ln|x| + C", "1/x + C", "e^x + C"],
    answer: "ln|x| + C",
  },

  // Physics 19
  {
    question: "The unit of power is:",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    answer: "Watt",
  },

  // Chemistry 19
  {
    question: "Which acid is secreted in the human stomach?",
    options: ["HNO₃", "HCl", "H₂SO₄", "CH₃COOH"],
    answer: "HCl",
  },

  // Math 19
  {
    question: "The binomial expansion of (1 + x)² is:",
    options: ["1 + x²", "1 + 2x + x²", "1 − 2x + x²", "1 + x + x²"],
    answer: "1 + 2x + x²",
  },

  // Physics 20
  {
    question: "The focal length of a plane mirror is:",
    options: ["0", "Infinite", "1", "Equal to its radius"],
    answer: "Infinite",
  },

  // Chemistry 20
  {
    question: "Which of the following is a non-metal?",
    options: ["Iron", "Copper", "Sulphur", "Zinc"],
    answer: "Sulphur",
  },

  // Math 20
  {
    question: "The value of cos 90° is:",
    options: ["1", "0", "-1", "√3/2"],
    answer: "0",
  },
];

// why we add this function shuffleArray?
// because most of my answer is a and b so

// Shuffle array (Fisher-Yates)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Pick 5 random unique questions
function getRandomQuestions() {
  return shuffleArray([...questionBank]).slice(0, 5);
}

const form = document.getElementById("quizForm");
const out = document.getElementById("result");
const questions = getRandomQuestions();

const correctAnswers = {};

// Render questions
questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.className = "question";

  correctAnswers[`q${index + 1}`] = q.answer;

  const p = document.createElement("p");
  p.textContent = `${index + 1}. ${q.question}`;
  div.appendChild(p);

  // shuffle options
  const shuffledOptions = shuffleArray([...q.options]);

  shuffledOptions.forEach((opt) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index + 1}`;
    input.value = opt;

    label.appendChild(input);
    label.appendChild(document.createTextNode(opt));
    div.appendChild(label);
  });

  form.appendChild(div);
});

// Add submit button
const btn = document.createElement("button");
btn.type = "submit";
btn.className = "submit-btn";
btn.textContent = "Submit Quiz";
form.appendChild(btn);

// Handle submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  let score = 0;

  // reset highlights
  document.querySelectorAll("label").forEach((l) => {
    l.style.background = "";
    l.style.border = "1px solid #ddd";
  });

  for (let [key, value] of data.entries()) {
    if (value === correctAnswers[key]) {
      score++;
      document.querySelector(
        `input[name="${key}"][value="${value}"]`
      ).parentElement.style.background = "#e7fbe7";
    } else {
      document.querySelector(
        `input[name="${key}"][value="${value}"]`
      ).parentElement.style.background = "#ffeaea";
    }
  }

  out.style.display = "block";
  out.textContent = `${score} out of 5 is correct`;

  if (score >= 3) {
    out.className = "success";
  } else {
    out.className = "fail";
  }
});
