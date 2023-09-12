import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputData = document.querySelector('#datetime-picker');
  console.log(inputData);
const btnStart = document.querySelector('[data-start]');
  console.log(btnStart);
const timer = document.querySelector('.timer');
const second = document.querySelector('[data-seconds]');
const minute = document.querySelector('[data-minutes]');
const hour = document.querySelector('[data-hours]');
const day = document.querySelector('[data-days]');
const timerCount = 1000;
let intervalId = null;
btnStart.disabled = true;
// let timeDiference = 0;

const flatpickr = require("flatpickr");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
     
      if (selectedDates[0] < new Date() ) {
        window.alert("Please choose a date in the future");
        btnStart.disabled = true;} 

        btnStart.disabled = false;
      const startTime = selectedDates[0];
      return startTime;
    },

//  timeMLS(){
     
//       // console.log(startTime); 

//       const finishTime = new Date();
//        console.log(finishTime); 
      
//       const timeDiference = startTime - finishTime;
// console.log(timeDiference);
// return timeDiference;
//  },
 
  };

//   console.log(options);
//  options.timeMLS();

// console.log(timeDiference);

  btnStart.addEventListener('click', clickSart);

  function clickSart(event){
    if(btnStart.disabled){
      return; }

    btnStart.disabled = true;

    intervalId = setInterval(() => {
const differentTime = startTime - new Date();

btnStart.disabled = true;
if(differentTime => 0){
   const {days, hours, minutes, seconds } = convertMs(differentTime);
   day.textContent = days;
   hour.textContent = hours;
   minute.textContent = minutes;
   second.textContent = seconds;
}
btnStart.disabled = false;
clearInterval(intervalId);
}, timerCount);

  };

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
  // console.log(convertMs(differentTime)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  
  function addLeadingZero(value){

  return String(value).padStart(2, '0')
  };
// console.log(addLeadingZero(3));

  flatpickr(inputData, options);
