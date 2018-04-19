const xhr = require('./xhr');
const data = require('./data');
const writeCatagoriesToDom = require('./catagoriesDom');

const startApplication = () => {
  xhr(catagoriesLoadSuccess, ifFileFails, 'catagories.json');
  xhr(movieElementLoadSuccess, ifFileFails, 'movie-elements.json');
};

function catagoriesLoadSuccess () {
  const myCatagory = JSON.parse(this.responseText);
  data.setCatagories(myCatagory);
  writeCatagoriesToDom(myCatagory);
};

function movieElementLoadSuccess () {
  const myMovieElements = JSON.parse(this.responseText);
  data.setMovieElements(myMovieElements);
};

function ifFileFails () {
  console.error('I have failed you my friend.');
};

module.exports = startApplication;
