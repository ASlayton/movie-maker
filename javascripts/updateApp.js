const data = require('./data');
const showProgress = require('./progressBar');
const checkItems = require('./checkItems');

const updateApp = (e) => {
  const elementValue = e.target.value;
  const budget = data.getBudget();
  const checkedElement = e.target.parentNode.parentNode.children[0].innerHTML;
  let remainingBudget = data.getRemainingBudget();
  if (e.target.checked === true) {
    remainingBudget = (remainingBudget * 1) - (elementValue * 1);
    data.setRemainingBudget(remainingBudget);
    showProgress(budget, remainingBudget);
    data.setSelectedElements(checkedElement);

  } else {
    remainingBudget = (remainingBudget * 1) + (elementValue * 1);
    data.setRemainingBudget(remainingBudget);
    showProgress(budget, remainingBudget);
    data.removeSelectedElement(checkedElement);
  };
  document.getElementById('receipt').children[0].innerHTML = `Remaining Budget: $${remainingBudget}`;
  printReceipt();
  calcTotals();
  evaluateBudgetStatus();
  checkItems.evaluateStatus();
};

const printReceipt = () => {
  const selectedElements = data.writableElements();
  document.getElementById('item-list').innerHTML = '';
  for (let i = 0; i < selectedElements.length; i++) {
    document.getElementById('item-list').innerHTML += `<p class='receipt-item'>${selectedElements[i]}</p>`;
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

const calcTotals = () => {
  const actors = document.getElementsByClassName('cat1-element');
  const animals = document.getElementsByClassName('cat2-element');
  const locations = document.getElementsByClassName('cat3-element');
  const effects = document.getElementsByClassName('cat4-element');
  let actorsTotal = 0;
  let animalsTotal = 0;
  let locationsTotal = 0;
  let effectsTotal = 0;
  for (let i = 0; i < actors.length; i++) {
    if (actors[i].checked === true) {
      actorsTotal = (actorsTotal * 1) + (actors[i].value * 1);
    };
  };
  for (let j = 0; j < animals.length; j++) {
    if (animals[j].checked === true) {
      animalsTotal = (animalsTotal * 1) + (animals[j].value * 1);
    };
  };
  for (let k = 0; k < locations.length; k++) {
    if (locations[k].checked === true) {
      locationsTotal = (locationsTotal * 1) + (locations[k].value * 1);
    };
  };
  for (let l = 0; l < effects.length; l++) {
    if (effects[l].checked === true) {
      effectsTotal = (effectsTotal * 1) + (effects[l].value * 1);
    };
  };
  writeTotals(actorsTotal, animalsTotal, effectsTotal, locationsTotal);
};

const writeTotals = (actorsTotal, animalsTotal, effectsTotal, locationsTotal) => {
  const myReceipt = document.getElementsByClassName('receipt-item');
  for (let m = 0; m < myReceipt.length; m++) {
    if (myReceipt[m].innerHTML === `Actors and Actresses`) {
      console.log('I have reached this point');
      const node1 = document.createElement('P');
      const textnode1 = document.createTextNode(`$${actorsTotal}`);
      node1.appendChild(textnode1);
      myReceipt[m].appendChild(node1);
    } else if (myReceipt[m].innerHTML === 'Animals and Trainers') {
      const node2 = document.createElement('P');
      const textnode2 = document.createTextNode(`$${animalsTotal}`);
      node2.appendChild(textnode2);
      myReceipt[m].appendChild(node2);
    } else if (myReceipt[m].innerHTML === 'Special Effects') {
      const node3 = document.createElement('P');
      const textnode3 = document.createTextNode(`$${effectsTotal}`);
      node3.appendChild(textnode3);
      myReceipt[m].appendChild(node3);
    } else if (myReceipt[m].innerHTML === 'Location') {
      const node4 = document.createElement('P');
      const textnode4 = document.createTextNode(`$${locationsTotal}`);
      node4.appendChild(textnode4);
      myReceipt[m].appendChild(node4);
    } else {
      console.log('We have gotten stuck.');
    };
  };
};

module.exports = updateApp;
