const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    buttons: document.querySelectorAll('button'),
    body: document.querySelector('body'),
}

const startBtn = refs.buttons[0];
const stopBtn = refs.buttons[1];
let colorId = null;

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(e) {
    colorId = setInterval(setbackgroundColor, 1000);
    stopBtn.addEventListener('click', onStopBtnClick);
    startBtn.setAttribute('disabled', true);
};

function onStopBtnClick(e) {
    clearInterval(colorId);
    startBtn.removeAttribute('disabled');
};

const setbackgroundColor = () => {
    refs.body.style.backgroundColor = randomColor(colors);
};

function randomColor(arr) {
    let elem = randomIntegerFromInterval(0, arr.length);
    return arr[elem];
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
