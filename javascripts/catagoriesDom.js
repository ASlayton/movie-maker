const data = require('./data');

const writeCatagoriesToDom = () => {
  const myCatagories = data.getCatagories().catagories;
  let domString = '';
  myCatagories.forEach((catagory) => {
    domString += `<div id='${catagory.id}'>`;
    domString += `<h1>${catagory.catagoryName}</h1>`;
    domString += `</div>`;
  });
  writeToDom(domString, 'catagory-display');
};

const writeToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

module.exports = writeCatagoriesToDom;
