let budget = 0;
let remainingBudget = 0;
let catagories = [];
let movieElements = [];
const selectedElements = [];

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

const setSelectedElements = (data) => {
  if (!selectedElements.includes(data)) {
    selectedElements.push(data);
  };
};

// MOVE TO DATA PAGE WHEN DONE
const removeSelectedElement = (parent, data) => {
  // const myChildren = document.getElementById(parent).childElementCount;

  // if (selectedElements.contains(data)) {
  //   selectedElements.indexOf(data);
  // }
  console.log('parent: ', parent);
  console.log('data: ', data);
  console.log('selectedElements: ', selectedElements);
};

const getSelectedElements = () => {
  const mySelectedElements = selectedElements;
  return mySelectedElements;
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
  setSelectedElements,
  getSelectedElements,
  removeSelectedElement,
};
