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
  document.querySelector("#todayTemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#hum").innerHTML = response.data.main.humidity;
  document.querySelector("#speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#vis").innerHTML = response.data.visibility / 1000;
  document.querySelector("#condition").innerHTML =
    response.data.weather[0].main;
}
//function currentLocation(position) {
//let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
//let apiLink = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;

// axios.get(apiLink).then(showTemperature);
//}

//function getCurrentLocation(event) {
// event.preventDefault();
// navigator.geolocation.getCurrentPosition(currentLocation);
//}

//let button = document.querySelector(`#buttonLocation`);
//button.addEventListener("click", getCurrentLocation);

//CurrentLocation
//function currentLocation(position) {
//let lat = position.coords.latitude;
//let lon = position.coords.longitude;
//let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
//let apiLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
//axios.get(apiLink).then(showTemperature);
//}

//
//}
//let button = document.querySelector(`#buttonLocation`);
//button.addEventListener("click", getCurrentLocation);

//let celTempLink = document.querySelector("#celsius");
//let fahrTempLink = document.querySelector("#fahrenheit");

//function getFahrTemp(event) {
//event.preventDefault();
//let celTemp = document.querySelector("#todayTemperature");
//let fahrTemp = Math.round((celTemp.innerHTML * 9) / 5 + 32);
//celTemp.innerHTML = fahrTemp;
//}
//function getCelTemp(event) {
//event.preventDefault();
//let celTemp = document.querySelector("#todayTemperature");
//celTemp.innerHTML = Math.floor(fahrTemp);
//}

//fahrTempLink.addEventListener("click", getFahrTemp);
//celTempLink.addEventListener("click", getCelTemp);
