const showProgress = (budget) => {
  document.getElementById('instructions').innerHTML = '';
  let progressString = '';
  progressString += `<div class='progress'>`;
  progressString +=   `<div class='progress-bar' id='myProgress' role='progressbar' aria-valuenow='${budget}' aria-valuemin='0' aria-valuemax='${budget}' style='width:100%;'>`;
  progressString +=     `<span class='sr-only'></span>`;
  progressString +=   `</div>`;
  progressString += `</div>`;

  writeProgressBar(budget, 'remaining-budget');
  writeProgressBar(progressString, 'progress-bar-display');
};

const writeProgressBar = (myString, myElement) => {
  document.getElementById(myElement).innerHTML = myString;
};
module.exports = showProgress;
