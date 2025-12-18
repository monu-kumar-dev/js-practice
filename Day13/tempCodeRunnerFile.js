// for (let i = 0; i < obj.length; i++) {
//   console.log(obj[i]);
// }

// Checking function working pass by value or reference

let obj2 = {
  name: "Mohit",
  age: 30,
  amount: 310,
};

function fun10({ name, age }) {
  name = "Mogni";
  console.log(name, age);
}

fun10(obj2);

// ++++++++++++++ guess code work or not +++++++++++++++++++
let fun = (...num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }

  console.log(sum);
};
fun(2, 3, 4, 5, 6, 7, 8, 9);
