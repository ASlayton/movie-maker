let movieElements = [];
let catagories = [];

const getMovieElements = () => {
  return movieElements;
};

const setMovieElements = (data) => {
  movieElements = data;
};

const getCatagories = () => {
  return catagories;
};

const setCatagories = (data) => {
  catagories = data;
};

module.exports = {
  setMovieElements,
  setCatagories,
  getMovieElements,
  getCatagories,
};
