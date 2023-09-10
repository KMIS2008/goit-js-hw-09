const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const timer = 1000;
let intervalId = null;


// console.log(btnStart);
// console.log(btnStop);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

btnStart.addEventListener('click', generatorColorStart);
btnStop.addEventListener('click', generatorColorStop)


function generatorColorStart (event){

   if(btnStart.disabled){
    return; }

btnStart.disabled = true;

intervalId = setInterval(() => {

    document.body.style.backgroundColor = getRandomHexColor()

}, timer);
}

function generatorColorStop (event){
    clearInterval(intervalId);
    btnStart.disabled = false;
}

