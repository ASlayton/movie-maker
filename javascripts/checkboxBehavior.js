const checkBoxEventListeners = () => {
  const myCheckboxes = document.getElementsByClassName('imaCheckBox');
  for (let i = 0; i < myCheckboxes.length; i++) {
    myCheckboxes[i].addEventListener('change', updateReceipt);
  };
};

const updateReceipt = (e) => {
  const budget = document.getElementById('remaining-budget');
  const selectedBox = e.target.value;
  if (e.target.checked === true) {
    budget.innerHTML = (budget.innerHTML - selectedBox);
  } else {
    budget.innerHTML = (budget.innerHTML * 1) + (selectedBox * 1);
  };

};

module.exports = checkBoxEventListeners;
