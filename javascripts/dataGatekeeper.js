const xhr = require('./xhr');
const data = require('./data');
const writeCatagoriesToDom = require('./catagoriesDom');
const enableApplication = require('./enableApp');

const startApplication = () => {
  document.getElementById('set-budget-btn').addEventListener('click', enableApplication);
  xhr(runIfCatagoriesLoads, ifFileFails, 'catagories.json');
};

function ifFileFails () {
  console.error('I have failed you, my friend.');
};

function runIfCatagoriesLoads () {
  const catagories = JSON.parse(this.responseText);
  data.setCatagories(catagories);
  writeCatagoriesToDom(catagories.catagories);
};

module.exports = startApplication;
