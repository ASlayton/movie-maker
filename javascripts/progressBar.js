const writeToDom = require('./writeToDom');

const showProgress = (budget, remainingBudget) => {
  const percentage = Math.round((remainingBudget / budget) * 100);
  let domString = '';
  domString += `<div class='progress'>`;
  domString +=   `<div class="progress-bar" role='progressbar' aria-valuenow='${remainingBudget}' aria-valuemin='0' aria-valuemax='${budget}' style='min-width: 2em; width: ${percentage}%;'>`;
  domString += `${percentage}% Budget Remaining`;
  domString +=   `</div>`;
  domString += `</div>`;
  writeToDom(domString, 'progress-bar-display');
};

module.exports = showProgress;
