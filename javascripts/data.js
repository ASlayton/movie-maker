let budget = 0;
let remainingBudget = 0;
let catagories = [];
let movieElements = [];

const setBudget = (data) => {
  budget = data;
};

const getBudget = () => {
  const myBudget = budget;
  return myBudget;
};

const setRemainingBudget = (data) => {
  remainingBudget = data;
};

const getRemainingBudget = () => {
  const myRemainingBudget = remainingBudget;
  return myRemainingBudget;
};

const setCatagories = (data) => {
  catagories = data.catagories;
};

const getCatgories = () => {
  const myCatagories = catagories;
  return myCatagories;
};

const setMovieElements = (data) => {
  movieElements = data;
};

const getMovieElements = () => {
  const myMovieElements = movieElements.movieElements;
  return myMovieElements;
};

module.exports = {
  setBudget,
  getBudget,
  setRemainingBudget,
  getRemainingBudget,
  setCatagories,
  getCatgories,
  setMovieElements,
  getMovieElements,
};
