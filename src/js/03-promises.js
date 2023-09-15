import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  delayStep: document.querySelector('[name ="step"]'),
  amount: document.querySelector('[name ="amount"]'),
  button: document.querySelector('button')
}

let delay = ref.firstDelay.textContent;
const step = ref.delayStep.textContent;
const amount = ref.amount.textContent;
let position = 0;
let timerId = null;

// console.log(ref.form);
// console.log(ref.firstDelay);
// console.log(ref.delayStep);
console.dir(ref.amount);
// console.log(ref.button);

console.log(delay);
console.log(step);
console.log(amount);

ref.button.addEventListener('clikc', runPromise);

function runPromise(delay, step){
if(amount = 0){
  clearTimeout(timerId);
  return;
}

amount -=1;
delay = delay + step;
position +=1; 

createPromise(position, delay)
.then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});
}

function createPromise(position, delay) {
     const shouldResolve = Math.random() > 0.3;
     timerId = setTimeout(() => {

  return new Promise((resolve, reject) =>{

if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  }
     }, delay)
  
  })
 
}

// createPromise(position, delay)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });