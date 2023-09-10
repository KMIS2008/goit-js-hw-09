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
  console.log(inputData)


  flatpickr(inputData, options)