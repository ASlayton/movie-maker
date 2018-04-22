const data = require('./data');
const writeToDom = require('./writeToDom');

const enableApplication = (e) => {
  e.preventDefault();
  enableCheckboxes();
  const budget = document.getElementById('budgetAmt').value;
  data.setRemainingBudget(budget);
  const remainingBudget = data.getRemainingBudget();
  data.setBudget(budget);
  showProgress(budget, remainingBudget);
};

const enableCheckboxes = () => {
  const getCheckboxes = document.getElementsByClassName('movie-element');
  for (let i = 0; i < getCheckboxes.length; i++) {
    getCheckboxes[i].disabled = false;
  };
};

const showProgress = (budget, remainingBudget) => {
  let domString = '';
  domString += `<div class="progress">`;
  domString +=   `<div class="progress-bar" role="progressbar" aria-valuenow='${remainingBudget}' aria-valuemin="0" aria-valuemax='${budget}'>`;
  domString +=   `</div>`;
  domString += `</div>`;
  writeToDom(domString, 'progress-bar-display');
};

module.exports = enableApplication;
