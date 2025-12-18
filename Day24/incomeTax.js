
const submit = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");
const resultDiv = document.getElementById("result");
const breakdownDiv = document.getElementById("breakdown");

submit.addEventListener("click", () => {
  const income = Number(document.getElementById("income").value);
  const regime = document.getElementById("slab").value;
  
  let tax = 0;
  let breakdown = "";

  if (regime === "old") {
    // OLD REGIME slabs
    if (income <= 250000) {
      tax = 0;
      breakdown = "No tax up to ₹2.5L";
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
      breakdown = `5% of (₹${income - 250000})`;
    } else if (income <= 1000000) {
      tax = 250000 * 0.05 + (income - 500000) * 0.2;
      breakdown = `₹12,500 (5% of 2.5L) + 20% of (₹${income - 500000})`;
    } else {
      tax = 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
      breakdown = `₹12,500 + ₹1,00,000 + 30% of (₹${income - 1000000})`;
    }
  } else {
    // NEW REGIME slabs (FY 2024-25)
    if (income <= 300000) {
      tax = 0;
      breakdown = "No tax up to ₹3L";
    } else if (income <= 600000) {
      tax = (income - 300000) * 0.05;
      breakdown = `5% of (₹${income - 300000})`;
    } else if (income <= 900000) {
      tax = 300000 * 0.05 + (income - 600000) * 0.1;
      breakdown = `₹15,000 + 10% of (₹${income - 600000})`;
    } else if (income <= 1200000) {
      tax = 300000 * 0.05 + 300000 * 0.1 + (income - 900000) * 0.15;
      breakdown = `₹15,000 + ₹30,000 + 15% of (₹${income - 900000})`;
    } else if (income <= 1500000) {
      tax =
        300000 * 0.05 + 300000 * 0.1 + 300000 * 0.15 + (income - 1200000) * 0.2;
      breakdown = `₹15,000 + ₹30,000 + ₹45,000 + 20% of (₹${income - 1200000})`;
    } else {
      tax =
        300000 * 0.05 +
        300000 * 0.1 +
        300000 * 0.15 +
        300000 * 0.2 +
        (income - 1500000) * 0.3;
      breakdown = `₹15,000 + ₹30,000 + ₹45,000 + ₹60,000 + 30% of (₹${
        income - 1500000
      })`;
    }
  }

  // Add 4% cess
  const cess = tax * 0.04;
  const totalTax = tax + cess;

  // Show result in page
  resultDiv.innerHTML = `<h2>Tax Payable: ₹${totalTax.toLocaleString()}</h2>`;
  breakdownDiv.innerHTML = `<p><strong>Breakdown:</strong> ${breakdown} + 4% Cess = ₹${cess.toFixed(
    0
  )}</p>`;
});

// Reset Button
resetBtn.addEventListener("click", () => {
  document.getElementById("income").value = "";
  resultDiv.innerHTML = "";
  breakdownDiv.innerHTML = "";
});
