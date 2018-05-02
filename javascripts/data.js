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
  selectedElements.push(data);
};

// MOVE TO DATA PAGE WHEN DONE
const removeSelectedElement = (data) => {
  if (selectedElements.indexOf(data) > -1) {
    const elementToRemove = selectedElements.indexOf(data);
    selectedElements.splice(elementToRemove, 1);
  };
  console.log('selectedElements: ', selectedElements);
};

const getSelectedElements = () => {
  const mySelectedElements = selectedElements;
  return mySelectedElements;
};

const writableElements = () => {
  const writeElements = [];
  selectedElements.forEach((element) => {
    if (writeElements.indexOf(element) === -1) {
      writeElements.push(element);
    };
  });
  return writeElements;
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
  writableElements,
};
