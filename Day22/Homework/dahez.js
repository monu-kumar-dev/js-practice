// This code show error does not give the option value in age why?

// Aapka ye wala code:---->

// Age
// const age = Number(age2.value);
// if (age < 23) {
//   dowry = yearly - (yearly * 10) / 100;
// } else if (age >= 23 && age <= 32) {
//   dowry = yearly + (yearly * 10) / 100;
// } else {
//   dowry = yearly - (yearly * 10) / 100;
// }

// ye page load hote hi run ho jata hai.
// Jab page abhi fresh load hota hai to age2.value empty hota hai ("").
// Number("") = 0.
// Fir if (age < 23) true ho jata hai aur code execute hota hai.
// Aapka error direct option loop ko stop kar deta hai, isliye dropdown me options hi nahi dikhte.


// +++++++++++ This codes has error ++++++++++++++++++++++++++++++++++

// // --- Fill Age Dropdown ---
// const age2 = document.getElementById("age");

// for (let i = 21; i <= 55; i++) {
//   let option = document.createElement("option");
//   option.value = i;
//   option.text = i;
//   age2.appendChild(option);
// }

// // --- Dwary calculation starting:--------------->
// let dowry = 0;

// // --- Income ---
// const monthlyIncome = Number(document.getElementById("income").value);
// const yearly = monthlyIncome * 12;

// // --- Age ---
// const age = Number(age2.value);
// if (age < 23) {
//   dowry = yearly - (yearly * 10) / 100; // -10%
// } else if (age >= 23 && age <= 32) {
//   dowry = yearly + (yearly * 10) / 100; // +10%
// } else {
//   dowry = yearly - (yearly * 10) / 100; // -10%
// }

// // --- Profession ---
// const profession = document.getElementById("profession").value;
// if (profession === "doctor") {
//   dowry += (yearly * 50) / 100;
// } else if (profession === "engineer" || profession === "it") {
//   dowry += (yearly * 30) / 100;
// } else if (profession === "gov") {
//   dowry += (yearly * 40) / 100;
// } else if (profession === "business") {
//   dowry += (yearly * 20) / 100;
// } else if (profession === "teacher" || profession === "lawyer") {
//   dowry += (yearly * 15) / 100;
// } else {
//   dowry += (yearly * 5) / 100;
// }

// // --- Education Bonus ---
// const education = document.getElementById("edu").value;
// if (education === "phd") {
//   dowry += (yearly * 25) / 100;
// } else if (education === "md") {
//   dowry += (yearly * 20) / 100;
// } else if (education === "bd") {
//   dowry += (yearly * 15) / 100;
// } else if (education === "dip") {
//   dowry += (yearly * 10) / 100;
// } else if (education === "high") {
//   dowry += (yearly * 5) / 100;
// }

// // --- Asset Bonus ---
// // Home
// const homeowner = document.querySelector('input[name="homeowner"]:checked');
// if (homeowner && homeowner.value === "own") {
//   dowry += (yearly * 30) / 100;
// }

// // Car
// const carowner = document.querySelector('input[name="carowner"]:checked');
// if (carowner && carowner.value === "owner") {
//   dowry += (yearly * 20) / 100;
// }

// // --- Location ---
// const location = document.querySelector('input[name="loc"]:checked');
// if (location) {
//   if (location.value === "India - Urban") {
//     dowry += (yearly * 10) / 100;
//   } else if (location.value === "India - Rural") {
//     dowry += (yearly * 5) / 100;
//   } else if (location.value === "Outside") {
//     dowry += (yearly * 40) / 100;
//   }
// }

// // --- Penalties ---
// if (age > 40) {
//   dowry -= (yearly * 20) / 100;
// }
// if (profession === "others") {
//   dowry -= (yearly * 5) / 100;
// }

// // --- Final Result ---
// console.log("Final Dowry = ₹" + dowry.toLocaleString());

// ************************ Solution ****************************************
// ✅ Solution

// Aapko dowry calculation tab chalana hai jab user “Calculate” button dabaye, na ki turant page load hone pe.

// To fix:--->

// 1.Dropdown population pehle hi run hoga.
// 2.Calculation ka code ek function me dalna hoga.
// 3.Button pe event listener lagana hoga.



// 1. Populate Age Dropdown
const age2 = document.getElementById("age");
for (let i = 21; i <= 55; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.text = i;
  age2.appendChild(option);
}

// 2. Calculation function
function calculateDowry() {
  let dowry = 0;

  // Income
  const monthlyIncome = Number(document.getElementById("income").value);
  const yearly = monthlyIncome * 12;

  // Age
  const age = Number(age2.value);
  if (age < 23) {
    dowry = yearly - (yearly * 10) / 100;
  } else if (age >= 23 && age <= 32) {
    dowry = yearly + (yearly * 10) / 100;
  } else {
    dowry = yearly - (yearly * 10) / 100;
  }

  // Profession
  const profession = document.getElementById("profession").value;
  if (profession === "doctor") {
    dowry += (yearly * 50) / 100;
  } else if (profession === "engineer" || profession === "it") {
    dowry += (yearly * 30) / 100;
  } else if (profession === "gov") {
    dowry += (yearly * 40) / 100;
  } else if (profession === "business") {
    dowry += (yearly * 20) / 100;
  } else if (profession === "teacher" || profession === "lawyer") {
    dowry += (yearly * 15) / 100;
  } else {
    dowry += (yearly * 5) / 100;
  }

  // Education
  const education = document.getElementById("edu").value;
  if (education === "phd") {
    dowry += (yearly * 25) / 100;
  } else if (education === "md") {
    dowry += (yearly * 20) / 100;
  } else if (education === "bd") {
    dowry += (yearly * 15) / 100;
  } else if (education === "dip") {
    dowry += (yearly * 10) / 100;
  } else if (education === "high") {
    dowry += (yearly * 5) / 100;
  }

  // Assets
  const homeowner = document.querySelector('input[name="homeowner"]:checked');
  if (homeowner && homeowner.value === "own") {
    dowry += (yearly * 30) / 100;
  }

  const carowner = document.querySelector('input[name="carowner"]:checked');
  if (carowner && carowner.value === "owner") {
    dowry += (yearly * 20) / 100;
  }

  // Location
  const location = document.querySelector('input[name="loc"]:checked');
  if (location) {
    if (location.value === "India - Urban") {
      dowry += (yearly * 10) / 100;
    } else if (location.value === "India - Rural") {
      dowry += (yearly * 5) / 100;
    } else if (location.value === "Outside") {
      dowry += (yearly * 40) / 100;
    }
  }

  // Penalties
  if (age > 40) {
    dowry -= (yearly * 20) / 100;
  }
  if (profession === "others") {
    dowry -= (yearly * 5) / 100;
  }

  // Final Output
  console.log("Final Dowry = ₹" + dowry.toLocaleString());
  document.querySelector(".result").textContent = "Dowry: ₹" + dowry.toLocaleString();
}

// 3. Attach Event Listener
document.querySelector(".cal").addEventListener("click", calculateDowry);
