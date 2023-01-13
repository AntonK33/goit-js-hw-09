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
 

const currentDate = new Date();
let timeConvert = {};
let inputValue = null;
let timeId = null;
const options =     {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
      inputValue = selectedDates[0] - currentDate; 
      if (selectedDates[0].getTime() < currentDate.getTime() ) {
      Notiflix.Notify.failure('Please choose a date in the future')('Please choose a date in the future');
        buttonStart.setAttribute('disabled', 'disabled');
      } else  {      
        buttonStart.removeAttribute('disabled');        
    }             
    },
};

flatpickr(inputDate, options);
buttonStart.addEventListener("click", btnStartHandler);
buttonStart.setAttribute('disabled', 'disabled');

flatpickr(inputDate, options);

function btnStartHandler() {
  buttonStart.setAttribute('disabled', 'disabled');
  inputDate.setAttribute('disabled', 'disabled');
   timeId = setInterval(() => {
     if (inputValue <= 0) {
      clearInterval(timeId)
      return;
    }
    timeConvert = convertMs(inputValue);
    dataDays.textContent = addLeadingZero(timeConvert.days);
    dataHours.textContent = addLeadingZero(timeConvert.hours);
    dataMinutes.textContent = addLeadingZero(timeConvert.minutes);
    dataSeconds.textContent = addLeadingZero(timeConvert.seconds);
    inputValue -= 1000;
  }, 1000);

}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
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

