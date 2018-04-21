const data = require('./data');
const checkboxEventListeners = require('./checkboxBehavior');

const writeMovieElementsToDom = () => {
  const myMovieElements = data.getMovieElements();
  const catagories = data.getCatagories();
  myMovieElements.forEach((element) => {
    catagories.forEach((catagory) => {
      if (element.catagoryId === catagory.id) {
        document.getElementById(catagory.id).innerHTML += `<div class='checkbox col-sm-3'>
        <label><input type="checkbox" value="${element.cost}" class='imaCheckBox'>${element.name}</label></div>`;
      };
    });
  });
  checkboxEventListeners();
};

module.exports = writeMovieElementsToDom;
