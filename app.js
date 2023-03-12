// Example code for pulling credit card data from external API
fetch('https://example.com/api/credit-cards')
  .then(response => response.json())
  .then(data => {
    // Parse and display data in credit card table
    const creditCardTableBody = document.querySelector('#credit-cards tbody');
    data.forEach(card => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${card.name}</td>
        <td>${card.interestRate}</td>
        <td>${card.annualFee}</td>
        <td>${card.rewards}</td>
        <td><button>Apply Now</button></td>
      `;
      creditCardTableBody.appendChild(row);
    });
  });

// Example code for pulling bank interest rate data from external API
fetch('https://example.com/api/banks/interest-rates')
  .then(response => response
  .then(data => {
    // Parse and display data in bank interest rate chart
    const bankChart = document.querySelector('#banks .chart');
    const chartBars = bankChart.querySelectorAll('.chart-bar');
    chartBars.forEach((bar, index) => {
      const bankName = bar.querySelector('.chart-bar-label').textContent;
      const interestRate = data[bankName];
      const fillWidth = interestRate / 100 * 100; // Assuming interest rate is a percentage
      bar.querySelector('.chart-bar-fill').style.width = `${fillWidth}%`;
    });
  })
  .catch(error => {
    console.error(error);
  });
