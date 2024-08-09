const daysElement = document.querySelector("[data-days]")
const hoursElement = document.querySelector("[data-hours]")
const minutesElement = document.querySelector("[data-minutes]")
const secondsElement = document.querySelector("[data-seconds]")

const render = (days, hours, minutes, seconds) => {
    daysElement.innerHTML = String(days).padStart("2", 0);
    hoursElement.innerHTML = String(hours).padStart("2", 0);
    minutesElement.innerHTML = String(minutes).padStart("2", 0);
    secondsElement.innerHTML = String(seconds).padStart("2", 0);
};

const newMonth = "10 Sep 2024";

function countdown() {

    const newMonthDate = new Date(newMonth);
    const currentDate = new Date();

    const totalSeconds = (newMonthDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 24;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);