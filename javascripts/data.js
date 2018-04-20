let movieElements = [];
let catagories = [];

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

module.exports = {
  setMovieElements,
  setCatagories,
  getMovieElements,
  getCatagories,
};
