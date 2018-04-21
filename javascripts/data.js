let movieElements = [];
let catagories = [];
let budget = 0;

const getMovieElements = () => {
  return movieElements.movieElements;
};

const setMovieElements = (data) => {
  movieElements = data;
};

const getCatagories = () => {
  return catagories.catagories;
};

const setCatagories = (data) => {
  catagories = data;
};

const setBudget = (data) => {
  budget = data;
};

const getBudget = () => {
  return budget;
};

module.exports = {
  setMovieElements,
  setCatagories,
  setBudget,
  getMovieElements,
  getCatagories,
  getBudget,
};
