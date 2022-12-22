import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const dataDays =  document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const divTimer = document.querySelector('.timer');
const divField = document.querySelectorAll('.field');
 //console.log(buttonStart);
 
//divTimer.style.display = 'flex';
//divTimer.style.justifyContent = 'center';

//for (let i = 0; length = divField.length; i++) {/divField[i].style.display = 'flex',
// divField[i].style.flexDirection = 'column';
//  divField[i].style.margin = '20px';
//  divField[i].style.backgroundColor = 'grey';
//  divField[i].style.padding = '10px';
//  divField[i].style.borderRadius = '20px';
//}

const currentDate = new Date();
let timeConvert = {};
let inputValue = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
    inputValue = selectedDates[0] - currentDate;
      if (selectedDates[0].getTime() < currentDate.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future')('Please choose a date in the future');
      buttonStart.setAttribute('disabled', 'true');
    } else {
      buttonStart.removeAttribute('disabled');
    }
    },
 
};
flatpickr(inputDate, options);
buttonStart.addEventListener("click", btnStartHandler);
buttonStart.setAttribute('disabled', 'true');
flatpickr(inputDate, options);

function btnStartHandler() {
  setInterval(() => {
    if (inputValue <= 0) {
      return;
    }
    timeConvert = convertMs(inputValue);
    dataDays.textContent = timeConvert.days.toString().padStart(2, '0');
    dataHours.textContent = timeConvert.hours.toString().padStart(2, '0');
    dataMinutes.textContent = timeConvert.minutes.toString().padStart(2, '0');
    dataSeconds.textContent = timeConvert.seconds.toString().padStart(2, '0');
    inputValue -= 1000;
  }, 1000);

}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}