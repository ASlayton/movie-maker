const data = require('./data');

const writeMovieElementsToDom = () => {
  console.log('I am here,master.');
  const myMovieElements = data.getMovieElements().movieElements;
  const catagories = data.getCatagories().catagories;
  myMovieElements.forEach((element) => {
    catagories.forEach((catagory) => {
      if (element.catagoryId === catagory.id) {
        document.getElementById(catagory.id).innerHTML += `<div class="checkbox">
        <label><input type="checkbox" value="${element.cost}">${element.name}</label>
      </div>`;
      };
    });
  });
};

module.exports = writeMovieElementsToDom;
