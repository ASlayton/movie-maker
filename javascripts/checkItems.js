const data = require('./data');

const evaluateStatus = () => {
  const remainingBudget = data.getRemainingBudget();
  const selectedElements = data.getSelectedElements();
  const values = [];
  if (remainingBudget < 0) {
    values.push('false');
    document.getElementById('remaining-budget').classList.add('redlight');
  } else {
    values.push('true');
    document.getElementById('remaining-budget').classList.add('greenlight');
  };
  if (selectedElements.indexOf('Actors and Actresses') === -1) {
    values.push('false');
  } else {
    values.push('true');
  };
  if (selectedElements.indexOf('Animals and Trainers') === -1) {
    values.push('false');
  } else {
    values.push('true');
  };
  if (selectedElements.indexOf('Special Effects') === -1) {
    values.push('false');
  } else {
    values.push('true');
  };
  if (selectedElements.indexOf('Location') === -1) {
    values.push('false');
  } else {
    values.push('true');
  };

  if (values.includes('false')) {
    document.getElementById('message-container').innerHTML = `<h3 class='redlight'>You are not ready to make this movie.</h3>`;
  } else {
    document.getElementById('message-container').innerHTML = `<h3 class='greenlight'>You\'ve got the green light, let\'s get working.</h3>`;
  };
};

module.exports = {
  evaluateStatus,
};
