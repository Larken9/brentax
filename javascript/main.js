function calculateRefund() {
  const income = parseFloat(document.getElementById("income").value) || 0;
  const taxesPaid = parseFloat(document.getElementById("taxesPaid").value) || 0;
  const rrsp = parseFloat(document.getElementById("rrsp").value) || 0;

  const basicPersonalAmount = 15000;
  const taxableIncome = Math.max(income - basicPersonalAmount - rrsp, 0);
  const estimatedTaxOwed = taxableIncome * 0.2;
  const refund = taxesPaid - estimatedTaxOwed;

  const isRefund = refund >= 0;
  const amount = Math.abs(refund).toFixed(2);
  const label = isRefund ? "You could receive" : "You could owe";

  // Swap image
  const resultImage = document.getElementById("resultImage");
  resultImage.src = isRefund ? "assets/brenbucks.png" : "assets/owing-icon.svg";
  resultImage.alt = label;
  resultImage.classList.remove("large");
  resultImage.classList.add("small");

  // Update result content
  document.getElementById("resultText").innerHTML = `
      <h4>${label}</h4>
      <p class="amount">$${amount}</p>
      <p class="disclaimer">
        This doesn’t include all your credits and deductions. Answer a few quick questions and we’ll recommend the best way for you to file.
      </p>
      <a href="#contact" class="get-started-link">Get Started</a>
    `;
}
