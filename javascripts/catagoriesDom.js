const data = require('./data');
const xhr = require('./xhr');
const updateApp = require('./updateApp');

const writeCatagoriesToDom = (catagoryArray) => {
  let domString = '';
  catagoryArray.forEach((catagory) => {
    domString += `<div class='${catagory.catagoryName}' id='${catagory.id}'>`;
    domString += `<h1>${catagory.catagoryName}</h1>`;
    domString += `</div>`;
  });
  document.getElementById('catagory-display').innerHTML = domString;
  xhr(ifMovieElementsLoad, ifFileFails, 'movie-elements.json');
};

const writeElementsToDom = (elementArray) => {
  const myCat = data.getCatgories();
  elementArray.forEach((element) => {
    myCat.forEach((cat) => {
      if (element.catagoryId === cat.id) {
        document.getElementById(cat.id).innerHTML += `<div class='form-check col-md-3'><input class='form-check-input movie-element ${cat.id}-element' type='checkbox' value='${element.cost}' id='${element.id}' disabled><label class="form-check-label" for="${element.id}">${element.name}</label></div>`;
      };
    });
  });
  checkEventListeners(elementArray);
};

const checkEventListeners = (elementArray) => {
  elementArray.forEach((element) => {
    document.getElementById(element.id).addEventListener('change', updateApp);
  });
};

function ifMovieElementsLoad () {
  const movieElements = JSON.parse(this.responseText);
  data.setMovieElements(movieElements.movieElements);
  writeElementsToDom(movieElements.movieElements);
};

function ifFileFails () {
  console.error('I have failed you, my friend.');
};

module.exports = writeCatagoriesToDom;
