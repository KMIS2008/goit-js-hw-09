import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const flatpickr = require("flatpickr");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  const inputData = document.querySelector('#datetime-picker');
  console.log(inputData);
  const timer = document.querySelector('.timer');
  const second = document.querySelector('[data-seconds]');
  const minute = document.querySelector('[data-minutes]');
  const hour = document.querySelector('[data-hours]');
  const day = document.querySelector('[data-days]');


  flatpickr(inputData, options)