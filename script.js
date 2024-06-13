fetch('data.json') // This method fetches the JSON data from the data.json file.
.then(response => response.json()) // converts the response to a JSON object.
.then(data => {
  const summaryContent = document.getElementById('summary-content');
  let summaryHTML = '';

  data.forEach(item => {
    summaryHTML += `
      <div class="summary-details ${item.category.toLowerCase()}-summary">
        <div class="summary-info">
          <img src="${item.icon}" alt="Summary of ${item.category.toLowerCase()} score">
          <p class="${item.category.toLowerCase()}-info category">${item.category}</p>
        </div>
        <p class="marks"><span class="score">${item.score}</span>
          <span class="fullMarks"> / 100</span></p>
          </div>
        `;
      });
      summaryContent.innerHTML = summaryHTML;
      
      const overallResult = data.reduce((acc, item) => acc + item.score, 0) / data.length;
      document.getElementById('result-marks').textContent = Math.round(overallResult);
  })
  .catch(error => console.error('Error fetching data:', error));

