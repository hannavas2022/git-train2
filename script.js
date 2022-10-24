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
  let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiLink).then(showTemperature);
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
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let days = ["Sun", "Mon", "Tue", "Wen", "Thu"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
      <div class="col">
   <p class="nextdays">${day}<br /></p>
              <img src="IMG/suncloud.jpg" alt="SunCloud" />
              <p class="nextdaystemperatute">°C</p>
              <img src="IMG/clearmoon.jpg" alt="ClearMoon" />
              <p class="nextdaystemperatute">°C</p>
              </div>`;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
displayForecast();
