let ageCalculator = document.querySelector(".ageCalculator");
let dayError = document.querySelector("#day-error");
let monthError = document.querySelector("#month-error");
let yearError = document.querySelector("#year-error");
let dive = document.querySelector(".dive");

ageCalculator.addEventListener("submit", handleForm);

let day = 0;
let month = 0;
let year = 0;

dive.innerHTML = `
<h2 class="date"><span>- -</span>Yıl</h2>
<h2 class="date"><span>- -</span>Ay</h2>
<h2 class="date"><span>- -</span>Gün</h2>`;

function handleForm(e) {
  e.preventDefault();
  let FormDat = new FormData(ageCalculator);
  let formObj = Object.fromEntries(FormDat);

  day = formObj.day;
  month = formObj.month;
  year = formObj.year;
  debugger;

  if (
    formObj.day == "" ||
    formObj.day == 0 ||
    formObj.day > 31 ||
    formObj.day < 0
  ) {
    dayError.innerText = "Geçerli bir gün olmalı";
  }

  if (
    formObj.month == "" ||
    formObj.month == 0 ||
    formObj.month > 12 ||
    formObj.month < 0
  ) {
    monthError.innerText = "Geçerli bir ay olmalı";
  }

  if (
    formObj.year == "" ||
    formObj.year == 0 ||
    formObj.year > 2025 ||
    formObj.year < 0
  ) {
    yearError.innerText = "Geçerli bir yıl olmalı";
  }

  let date = new Date(year, month, day);
  let todayDate = new Date();

  let differenceDates = dateDifference(todayDate, date);
  dive.innerHTML = `
    <h2 class="date"><span> ${differenceDates.years}</span>Yıl</h2>
    <h2 class="date"><span> ${differenceDates.months}</span>Ay</h2>
    <h2 class="date"><span> ${differenceDates.days}</span>Gün</h2>`;

  ageCalculator.reset();
}

function dateDifference(todayDate, birthday) {
  let yearToday = todayDate.getFullYear();
  let monthToday = todayDate.getMonth() + 1;
  let dayToday = todayDate.getDate();

  let yearBirthday = birthday.getFullYear();
  let monthBirthday = birthday.getMonth() + 1;
  let dayBirthday = birthday.getDate();

  if (dayToday < dayBirthday) {
    dayToday += 30;
    monthToday -= 1;
  }

  let dayDiff = dayToday - dayBirthday;

  if (monthToday < monthBirthday) {
    monthToday += 12;
    yearToday -= 1;
  }
  let monthDiff = monthToday - monthBirthday;

  let yearDiff = yearToday - yearBirthday;

  let ageCalculator = {
    years: yearDiff,
    months: monthDiff,
    days: dayDiff,
  };

  return ageCalculator;
}
