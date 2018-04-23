const writeToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

module.exports = writeToDom;
