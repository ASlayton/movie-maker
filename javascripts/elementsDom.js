const data = require('./data');

const writeMovieElementsToDom = () => {
  const myMovieElements = data.getMovieElements();
  const catagories = data.getCatagories();
  myMovieElements.forEach((element) => {
    catagories.forEach((catagory) => {
      console.log(element.catagoryId, catagory.id);
      if (element.catagoryId === catagory.id) {
        document.getElementById(catagory.id).innerHTML += `<div class="checkbox">
        <label><input type="checkbox" value="${element.cost}">${element.name}</label>
      </div>`;
      };
    });
  });
};

module.exports = writeMovieElementsToDom;
