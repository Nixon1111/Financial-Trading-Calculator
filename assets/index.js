function calculateFinalSum() {
  event.preventDefault();
  const initialSum = parseFloat(document.getElementById("initialSum").value);
  const monthlyMultiplier = parseFloat(
    document.getElementById("monthlyMultiplier").value
  );
  const monthlyAddition = parseFloat(
    document.getElementById("monthlyAddition").value
  );
  const monthlyReduction = parseFloat(
    document.getElementById("monthlyReduction").value
  );
  const months = parseInt(document.getElementById("months").value);
  const annualTaxReductionMonth = parseInt(
    document.getElementById("annualTaxReductionMonth").value
  );

  function calculateSumOverTime(
    initialSum,
    monthlyMultiplier,
    monthlyAddition,
    monthlyReduction,
    months,
    annualTaxReductionMonth
  ) {
    let currentSum = initialSum;

    for (let i = 0; i < months; i++) {
      currentSum *= monthlyMultiplier;
      currentSum += monthlyAddition;
      currentSum -= monthlyReduction;

      if ((i + 1) % 12 === annualTaxReductionMonth) {
        // Apply a 20% tax reduction once a year
        currentSum *= 0.8;
      }
    }

    return currentSum;
  }

  const finalSum = calculateSumOverTime(
    initialSum,
    monthlyMultiplier,
    monthlyAddition,
    monthlyReduction,
    months,
    annualTaxReductionMonth
  );
  document.getElementById(
    "result"
  ).textContent = `After ${months} months of consistent trading, the final profit after tax is $${finalSum.toFixed(
    2
  )}`;
}
