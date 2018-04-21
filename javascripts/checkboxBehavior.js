const checkBoxEventListeners = () => {
  const myCheckboxes = document.getElementsByClassName('imaCheckBox');
  for (let i = 0; i < myCheckboxes.length; i++) {
    myCheckboxes[i].addEventListener('click', updateReceipt);
  };
};

const updateReceipt = (e) => {
  const budget = document.getElementById('remaining-budget');
  const selectedBox = e.target.value;
  const progressBar = document.getElementById('myProgress');
  const progressBarValue = progressBar.getAttribute('aria-valuenow');
  const barWidth = progressBar.getAttribute('aria-valuemax');
  let updatedValue;
  if (e.target.checked === true) {
    budget.innerHTML = (budget.innerHTML - selectedBox);
    updatedValue = (progressBarValue * 1) - (selectedBox * 1);
  } else {
    budget.innerHTML = (budget.innerHTML * 1) + (selectedBox * 1);
    updatedValue = (progressBarValue * 1) + (selectedBox * 1);
  };
  progressBar.getAttribute('aria-valuenow');
  progressBar.setAttribute('aria-valuenow', updatedValue);
  const barPercent = Math.round((progressBarValue / barWidth) * 100);
  progressBar.setAttribute('style', `width:${barPercent}%;`);
  console.log(progressBar.getAttribute('style'));
};

module.exports = checkBoxEventListeners;
