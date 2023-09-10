const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const timer = 1000;

console.log(btnStart);
console.log(btnStop);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

btnStart.addEventListener('click', generatorColorStart);


function generatorColorStart (event){

const timerId = setTimeout(() => {

    document.body.nodeValue = getRandomHexColor()
    

}, timer);
}

