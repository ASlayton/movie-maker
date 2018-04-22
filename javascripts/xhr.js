const xhr = (successFunction, errorFunction, filename) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', successFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', `/db/${filename}`);
  myRequest.send();
};

module.exports = xhr;
