const writeMovieElementsToDom = require('./elementsDom');

const connectEventListeners = () => {
  document.getElementById('set-budget-btn').addEventListener('click', enableApplication);
};

const enableApplication = (e) => {
  e.preventDefault();
  writeMovieElementsToDom();
};

module.exports = connectEventListeners;
