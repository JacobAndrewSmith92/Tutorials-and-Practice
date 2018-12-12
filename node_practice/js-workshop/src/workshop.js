
// Styles
// https://wiki.changehealthcare.com/pages/viewpage.action?pageId=48138103

function helloWorld() {
  return 'hello, world';
}

function add2(a, b) {
  return a + b;
}

function multiply2(a, b) {
  return a * b;
}

function randomNum() {
  // e.g. window, this.state, localStorage, node modules
  return Math.floor(Math.random() * 10);
}

function removeElement(arr, index) {
  // fix this!
  arr.splice(index, 1);
}

function removeProperty(obj, key) {
  // fix this!
  delete obj[key];
}

function simulated200() {
  return Promise.resolve('200 yay');
}

function simulated500() {
  return Promise.reject(new Error('500 whoopsies'));
}

module.exports = {
  helloWorld,
  add2,
  multiply2,
  randomNum,
  removeElement,
  removeProperty,
  simulated200,
  simulated500
};
