// kaam kya karna hai is project me:----------------->
// 1. Store the question
// 2. option ko store karana: 4 option
// 3. Answer

// how i store:-------------->

// obj1 = {
//     question: "Who has the most centuries in international cricket?",
//     options : ["Sachin Tendulkar", "Virat kohli", "Rickey Pointing", "jacquekallis"],
//     answer: "Sachin Tendulkar"
// }
// obj2 = {} ...obj20

// const questionBank = [obj1,obj2,obj3,obj4,.....obj20]

// Selection 5 objects randomly

// +++++++++++++++++ Implementing +++++++++++++++++++++++++++++++++++++++++++++++++
const questionBank = [
  {
    question: "Who has the most centuries in international cricket?",
    options: [
      "Sachin Tendulkar",
      "Virat Kohli",
      "Ricky Ponting",
      "Jacques Kallis",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Who has the highest individual score in ODI cricket?",
    options: [
      "Rohit Sharma",
      "Martin Guptill",
      "Chris Gayle",
      "Virender Sehwag",
    ],
    answer: "Rohit Sharma",
  },
  {
    question: "Who is known as the 'Wall' of Indian cricket?",
    options: [
      "Rahul Dravid",
      "Sourav Ganguly",
      "Sunil Gavaskar",
      "Anil Kumble",
    ],
    answer: "Rahul Dravid",
  },
  {
    question:
      "Which bowler has taken the most wickets in international cricket?",
    options: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Anil Kumble",
      "James Anderson",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question: "Who was the first batsman to score a double century in ODIs?",
    options: [
      "Sachin Tendulkar",
      "Virender Sehwag",
      "Rohit Sharma",
      "Chris Gayle",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which team won the first Cricket World Cup in 1975?",
    options: ["West Indies", "Australia", "India", "England"],
    answer: "West Indies",
  },
  {
    question: "Who has the fastest century in ODI cricket?",
    options: [
      "AB de Villiers",
      "Corey Anderson",
      "Shahid Afridi",
      "Virat Kohli",
    ],
    answer: "AB de Villiers",
  },
  {
    question: "Who captained India to its first T20 World Cup win in 2007?",
    options: ["MS Dhoni", "Sachin Tendulkar", "Sourav Ganguly", "Virat Kohli"],
    answer: "MS Dhoni",
  },
  {
    question: "Who holds the record for most sixes in international cricket?",
    options: ["Chris Gayle", "MS Dhoni", "Rohit Sharma", "AB de Villiers"],
    answer: "Chris Gayle",
  },
  {
    question: "Which Indian bowler is known as the 'Yorker King'?",
    options: ["Jasprit Bumrah", "Zaheer Khan", "Ashish Nehra", "Irfan Pathan"],
    answer: "Jasprit Bumrah",
  },
  {
    question: "Who is the only player to score 100 international centuries?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Brian Lara"],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Who hit six sixes in an over in the 2007 T20 World Cup?",
    options: ["Yuvraj Singh", "MS Dhoni", "Chris Gayle", "Kevin Pietersen"],
    answer: "Yuvraj Singh",
  },
  {
    question: "Which cricketer is called 'Mr. 360'?",
    options: [
      "AB de Villiers",
      "Virat Kohli",
      "Glenn Maxwell",
      "Kieron Pollard",
    ],
    answer: "AB de Villiers",
  },
  {
    question: "Who has scored the fastest 50 in T20 internationals?",
    options: ["Yuvraj Singh", "Chris Gayle", "KL Rahul", "Rohit Sharma"],
    answer: "Yuvraj Singh",
  },
  {
    question: "Which country has won the most Cricket World Cups?",
    options: ["Australia", "India", "West Indies", "England"],
    answer: "Australia",
  },
  {
    question: "Who is the leading run scorer in Test cricket history?",
    options: [
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Brian Lara",
      "Jacques Kallis",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which bowler has the best bowling figures in a Test innings?",
    options: [
      "Jim Laker",
      "Anil Kumble",
      "Muttiah Muralitharan",
      "Shane Warne",
    ],
    answer: "Jim Laker",
  },
  {
    question:
      "Who was the first Indian to win the ICC Cricketer of the Year award?",
    options: ["Rahul Dravid", "Sachin Tendulkar", "MS Dhoni", "Virat Kohli"],
    answer: "Rahul Dravid",
  },
  {
    question: "Who has the most runs in a single World Cup edition?",
    options: [
      "Sachin Tendulkar",
      "Rohit Sharma",
      "Martin Guptill",
      "Matthew Hayden",
    ],
    answer: "Rohit Sharma",
  },
  {
    question: "Which cricketer has played the most international matches?",
    options: [
      "Sachin Tendulkar",
      "MS Dhoni",
      "Ricky Ponting",
      "Mahela Jayawardene",
    ],
    answer: "Sachin Tendulkar",
  },
];

// Ye khud se kiye hai(304 to 312):----->
// function randomQuestion() {
//   const index = Math.floor(Math.random() * questionBank.length);
//   //   console.log(index);
//   for (let i = 0; i < 5; i++) {
//     // console.log(questionBank[index]);

//   }
// }
// randomQuestion();

function randomQuestion() {
  // use set for unique object because i donot want to same question
  const data = new Set();
  while (data.size != 5) {
    const index = Math.floor(Math.random() * questionBank.length);
    data.add(questionBank[index]);
  }
  // converting set into array
  return [...data];
}

// select the form and insert all the elements into it
const form = document.querySelector("form");

const problem = randomQuestion();
// hm quiz.html me jo likha hai usko js se bana rhe hai:--------------->
{/* <div class="question">
                <p>4. what is the highest individual score in ODI cricket?</p>
                <label>
                    <input type="radio" name="q4" value="264"> 264
                </label> <br>
                <label>
                    <input type="radio" name="q4" value="200"> 200
                </label> <br>
                <label>
                    <input type="radio" name="q4" value="237"> 237
                </label> <br>
                <label>
                    <input type="radio" name="q4" value="275"> 275
                </label> <br>

            </div> */}
// Mujhe short me ye banana hai js se:--->
// {/* <div>
//     <p></p>
//     <label>
//         <input>
//         </text Node>
//     </label>
// </div> */}

const original_answer = {};
// key value

problem.forEach((obj, index) => {
  // Creating div
  const div_element = document.createElement("div");
  // setting className
  div_element.className = "question";
  original_answer[`q${index + 1}`] = obj["answer"];

  const para = document.createElement("p");
  para.textContent = `${index + 1}. ${obj["question"]}`;
  div_element.appendChild(para);

  // create 4 options
  //   ["Sachin Tendulkar","Virat Kohli","Ricky Ponting","jacques Kallis",]
  obj["options"].forEach((data) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index + 1}`;
    input.value = data;

    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement("br"));
  });
  form.appendChild(div_element);
});

const button = document.createElement("button");
button.type = "submit";
button.className = "submit-btn";
button.textContent = "submit";
form.appendChild(button);

// check the submitted form

const out = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const answer = Array.from(data.values());

  let result = 0;
  for (let [key, value] of data.entries()) {
    if (value === original_answer[key]) {
      result++;
    }
  }
  out.innerText = `${result} out of 5 is correct`;
  out.style.fontSize = "20px";
});
