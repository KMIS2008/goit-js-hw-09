import Notiflix from 'notiflix';


document.body.style.backgroundColor = '#98FB98';

  const form = document.querySelector('.form');
  const firstDelay = document.querySelector('input[name="delay"]');
  const delayStep = document.querySelector('[name ="step"]');
  let amount = document.querySelector('[name ="amount"]');
  const button = document.querySelector('button[type="submit"]');

let timerId = null;

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

button.addEventListener('click', runPromise);

function runPromise(event){
event.preventDefault();

let delay = Number(firstDelay.value);
const step = Number(delayStep.value);
let position = 0;

for (let i = 0; i < amount.value; i++) {
  position +=1;
  

  createPromise(position, delay )
  .then(({ position, delay }) => {
            Notiflix.Notify.success(
              `✅ Fulfilled promise ${position} in ${delay}ms`
            );
          })
          .catch(({ position, delay }) => {
            Notiflix.Notify.failure(
              `❌ Rejected promise ${position} in ${delay}ms`
            );
        });
        
  delay +=step; 
}
form.reset();
clearTimeout(timerId);
};


// form.addEventListener('input', inputText);

// const FEEDBACK_KEY = 'Promise'

// function inputText (event) {
//     event.preventDefault();

// const info = {
//         deplay: firstDelay.value,
//         step: delayStep.value,
//         amount: amount.value,
//     };

// localStorage.setItem(FEEDBACK_KEY, JSON.stringify(info));
// }




// function runPromise(event){
//   event.preventDefault();

//   let delay = Number(firstDelay.value);
//   const step = Number(delayStep.value);
//   let position = 0;

//   let intervalID = setInterval(()=>{

// if(amount.value <= 0){
//   clearTimeout(timerId);
//   clearInterval(intervalID);
//   form.reset();
//   return;
// }

// position +=1; 

// createPromise(position, delay)
// .then(({ position, delay }) => {
//   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// })
// .catch(({ position, delay }) => {
//   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// });

// delay += step;
// amount.value -=1;  
//   },0)

// };

