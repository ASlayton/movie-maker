const xhr = (successFunction, errorFunction, fileName) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', successFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', `/db/${fileName}`);
  myRequest.send();
};

module.exports = xhr;
