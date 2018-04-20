const checkBoxEventListeners = () => {
  const myCheckboxes = document.getElementsByClassName('checkbox');
  for (let i = 0; i < myCheckboxes.length; i++) {
    myCheckboxes[i].addEventListener('change', updateReceipt);
  };
};

const updateReceipt = (e) => {
  console.log(e.target.value);
};

module.exports = checkBoxEventListeners;
