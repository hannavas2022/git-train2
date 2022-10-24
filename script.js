// Date
let now = new Date();
let currentDate = document.querySelector(".currentdate");
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wensday",
  "Thuesday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Jule",
  "August",
  "September",
  "October",
  "November",
  "Desember",
];
let month = months[now.getMonth()];
currentDate.innerHTML = `${day}, ${date} ${month}`;

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
  return days[day];
}

//City

function searchTown(event) {
  event.preventDefault();
  let input = document.querySelector("#inputtown");
  let currentTown = document.querySelector(".currenttown");
  currentTown.innerHTML = `${input.value}`;
  searchCity(input.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", searchTown);

function searchCity(city) {
  let apiKey = "2718952144ed077c12e7c160fb6fc351";
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiLink).then(showTemperature);
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "2718952144ed077c12e7c160fb6fc351";
  let apiLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log(apiLink);
  axios.get(apiLink).then(displayForecast);
}
function showTemperature(response) {
  celsiusTemp = response.data.main.temp;
  document.querySelector("#todayTemperature").innerHTML =
    Math.round(celsiusTemp);
  document.querySelector("#hum").innerHTML = response.data.main.humidity;
  document.querySelector("#speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#vis").innerHTML = response.data.visibility / 1000;
  document.querySelector("#condition").innerHTML =
    response.data.weather[0].main;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

  getForecast(response.data.coord);
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col">
   <p class="nextdays">${formatDay(forecastDay.dt)}<br /></p>
              <img src="http://openweathermap.org/img/wn/${
                response.data.weather[0].icon
              }@2x.png"/>
              <p class="nextdaystemperatute">${Math.round(
                forecastDay.temp.max
              )}°C</p>
              <p class="nextdaystemperatute">${Math.round(
                forecastDay.temp.min
              )}°C</p>
              </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
