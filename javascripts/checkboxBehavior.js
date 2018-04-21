const checkBoxEventListeners = () => {
  const myCheckboxes = document.getElementsByClassName('imaCheckBox');
  for (let i = 0; i < myCheckboxes.length; i++) {
    myCheckboxes[i].addEventListener('change', updateReceipt);
  };
};

const updateReceipt = (e) => {
  const progressBar = document.getElementById('progress-bar-display');
  if (e.target.checked === true) {

  } else {

  };
};

module.exports = checkBoxEventListeners;
