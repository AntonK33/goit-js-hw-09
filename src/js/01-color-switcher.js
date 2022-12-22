const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const body = document.querySelector('body');
let createInterval = null;

startButton.addEventListener('click', changeColor);
stopButton.addEventListener('click', changeStop);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

 function changeColor() {
     startButton.setAttribute('disabled', 'true');
     stopButton.removeAttribute('disabled');
     createInterval = setInterval(() => {
         body.style.backgroundColor = getRandomHexColor();
     }, 1000);
}

function changeStop() {
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', 'true');
    clearInterval(createInterval);
}

