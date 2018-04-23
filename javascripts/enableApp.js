const data = require('./data');
const showProgress = require('./progressBar');

const enableApplication = (e) => {
  e.preventDefault();
  enableCheckboxes();
  const budget = document.getElementById('budgetAmt').value;
  data.setRemainingBudget(budget);
  const remainingBudget = data.getRemainingBudget();
  document.getElementById('remaining-budget').innerHTML = `${remainingBudget}`;
  data.setBudget(budget);
  showProgress(budget, remainingBudget);
};

const enableCheckboxes = () => {
  const getCheckboxes = document.getElementsByClassName('movie-element');
  for (let i = 0; i < getCheckboxes.length; i++) {
    getCheckboxes[i].disabled = false;
  };
};

module.exports = enableApplication;
