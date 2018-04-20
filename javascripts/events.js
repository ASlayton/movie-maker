const writeMovieElementsToDom = require('./elementsDom');

const connectEventListeners = () => {
  document.getElementById('set-budget-btn').addEventListener('click', enableApplication);
};

const enableApplication = () => {
  writeMovieElementsToDom();
};

module.exports = connectEventListeners;
