const data = require('./data');

const writeCatagoriesToDom = () => {
  const myCatagories = data.getCatagories();
  console.log(myCatagories);
  let domString = '';
  myCatagories.catagories.forEach((catagory) => {
    domString += `<div data-catagory-id='${catagory.id}'>`;
    domString += `<h1>${catagory.catagoryName}</h1>`;domString += `</div>`;
  });
  writeToDom(domString, 'catagory-display');
};

const writeToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};
module.exports = writeCatagoriesToDom;
