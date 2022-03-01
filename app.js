let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".minute");
let secHand = document.querySelector(".second");
let dateCont = document.querySelector(".date span");
const digitalEl = document.querySelector(".digital");
const digitalDate = document.querySelector(".digital-date");
const toggle = document.querySelector(".btn-icon");
const footerDate = document.querySelector("footer span");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

toggle.addEventListener("click", () => {
  const html = document.querySelector("html");
  if (html.classList.contains("light")) {
    html.classList.remove("light");
    toggle.innerHTML = `<i class="fas fa-sun"></i>`;
  } else {
    html.classList.add("light");
    toggle.innerHTML = `<i class="fas fa-moon"></i>`;
    console.log("fa-sun");
  }
});

// for the hour hand to move from a number to that same number it needs to move 12 times
// the whole rotation is 360 deg so the hour hand moves by 360/12 for every hour

// the minute hand moves 60 times to get one hour same as the sec hand 60 times for 1 minute

// the whole rotation is 360 deg so the sec and min hand rotates by 360/60 for every min or sec.

function setTime() {
  const time = new Date();

  const hours = time.getHours();
  const min = time.getMinutes();
  const second = time.getSeconds();
  const date = time.getDate();
  const day = time.getDay();
  const month = time.getMonth();
  const hourFormat = hours >= 13 ? hours % 12 : hours;
  const ampm = hours > 12 ? "PM" : "AM";

  const hourRotate = (360 / 12) * hours + min / 2;
  hourHand.style.transform = `translate(-50%,-100%) rotate(${hourRotate}deg)`;

  const minRotate = (360 / 60) * min;
  minHand.style.transform = `translate(-50%,-100%) rotate(${minRotate}deg)`;

  const secRotate = (360 / 60) * second;
  secHand.style.transform = `translate(-50%,-100%) rotate(${secRotate}deg)`;

  dateCont.innerText = date;

  digitalEl.innerHTML = `<span>${hourFormat}</span><span>:${
    min < 10 ? `0${min}` : min
  }</span> ${ampm}`;
  digitalDate.innerHTML = `<span>${week[day]} ${months[month]} ${date}</span>`;
  footerDate.innerText = `${time.getFullYear()}`;
}

setTime();

setInterval(setTime, 1000);
