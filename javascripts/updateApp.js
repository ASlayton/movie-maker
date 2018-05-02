const data = require('./data');
const showProgress = require('./progressBar');

const updateApp = (e) => {
  const elementValue = e.target.value;
  const budget = data.getBudget();
  let remainingBudget = data.getRemainingBudget();
  if (e.target.checked === true) {
    remainingBudget = (remainingBudget * 1) - (elementValue * 1);
    data.setRemainingBudget(remainingBudget);
    showProgress(budget, remainingBudget);
    const checkedElement = e.target.parentNode.parentNode.children[0].innerHTML;
    data.setSelectedElements(checkedElement);
  } else {
    remainingBudget = (remainingBudget * 1) + (elementValue * 1);
    data.setRemainingBudget(remainingBudget);
    showProgress(budget, remainingBudget);
    const myParent = e.target.parentNode.parentNode.id;
    const elementToRemove = e.target.parentNode.parentNode.children[0].innerHTML;
    data.removeSelectedElement(myParent, elementToRemove);
  };
  document.getElementById('receipt').children[0].innerHTML = `${remainingBudget}`;
  printReceipt();
  evaluateBudgetStatus();
};

const printReceipt = () => {
  const selectedElements = data.getSelectedElements();
  document.getElementById('item-list').innerHTML = '';
  for (let i = 0; i < selectedElements.length; i++) {
    document.getElementById('item-list').innerHTML += `<p>${selectedElements[i]}</p>`;
  };
};

const evaluateBudgetStatus = () => {
  const remainingBudget = data.getRemainingBudget();
  const movieElements = document.getElementsByClassName('movie-element');
  if (remainingBudget <= 0) {
    for (let i = 0; i < movieElements.length; i++) {
      if (!(document.getElementById(movieElements[i].id).checked)) {
        document.getElementById(movieElements[i].id).disabled = true;
      };
    };

  } else {
    for (let i = 0; i < movieElements.length; i++) {
      if (!(document.getElementById(movieElements[i].id).checked)) {
        document.getElementById(movieElements[i].id).disabled = false;
      };
    };
  };
};

module.exports = updateApp;
