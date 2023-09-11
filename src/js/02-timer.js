import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputData = document.querySelector('#datetime-picker');
  console.log(inputData);
 const btnStart = document.querySelector('[data-start]');
 console.log(btnStart);

const flatpickr = require("flatpickr");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);

    //   if ( ) {
    //     window.alert("Please choose a date in the future");
    //     btnStart.disabled = true;} 

    //   btnStart.disabled = false;
    },
  };

//   btnStart.addEventListener('click', clickSart);

//   function clickSart(event){

//   };

  flatpickr(inputData, options)