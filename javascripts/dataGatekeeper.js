const xhr = (successFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', successFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', `../db/catagories.json`);
  myRequest.send();
};

function whenCatagoriesLoads  () {
  const catagoryData = JSON.parse(this.responseText);
  writeCatagoriesToDom(catagoryData.catagories);
};

const writeCatagoriesToDom = (catagoryArray) => {
  let domString = '';
  for (let i = 0; i < catagoryArray.length; i++) {
    domString += `<div id='${catagoryArray[i].id}'>`;
    domString += `<h1>${catagoryArray[i].catagoryName}</h1>`;
    domString += `</div>`;
  };
  writeToDom(domString, 'catagory-display');
  populateCheckBox();
};

const populateCheckBox = () => {

};

const writeToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

function ifFileFails () {
  console.error('I have failed you, my friend.');
};

const startApplication = () => {
  xhr(whenCatagoriesLoads, ifFileFails);
};

module.exports = startApplication;
