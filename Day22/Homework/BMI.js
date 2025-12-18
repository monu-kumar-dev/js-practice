const button = document.getElementById("button");

button.addEventListener("click", () => {
  const age = Number(document.getElementById("age").value);
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);

  // Optional validation
  if (!age || !height || !weight) {
    document.getElementById("result").innerText = "⚠️ Please enter all fields!";
    return;
  }

  const heightM = height / 100; // convert cm → meters
  const BMI = (weight / (heightM * heightM)).toFixed(2);

  let category = "";
  if (BMI < 18.5) category = "Underweight";
  else if (BMI < 24.9) category = "Normal weight";
  else if (BMI < 29.9) category = "Overweight";
  else category = "Obesity";

  const result = document.getElementById("result");

  if (category === "Underweight") result.style.color = "blue";
  else if (category === "Normal weight") result.style.color = "green";
  else if (category === "Overweight") result.style.color = "orange";
  else result.style.color = "red";

  // result.innerText = `Your BMI is ${BMI}`;
  result.innerText = `Your BMI is ${BMI} (${category})`;
});
