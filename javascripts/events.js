const writeMovieElementsToDom = require('./elementsDom');
const showProgress = require('./showProgress');
// const setBudget = require('./data');

const connectEventListeners = () => {
  document.getElementById('set-budget-btn').addEventListener('click', enableApplication);
};

const enableApplication = (e) => {
  e.preventDefault();
  const myBudget = document.getElementById('budgetAmt').value;
  writeMovieElementsToDom();
  showProgress(myBudget);
  // setBudget(myBudget);
};

module.exports = connectEventListeners;
