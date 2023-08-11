let now = new Date();

let h4 = document.querySelector("h4");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let currentDay = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
h4.innerHTML = `${currentDay},${hours}:${minutes}`;
function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let city = document.querySelector("#city");
  city.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", changeCity);

function convertToFahrenhiet(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp-now");
  temperatureElement.innerHTML = 86;
}
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp-now");
  temperatureElement.innerHTML = 30;
}

let fahrenhietLink = document.querySelector("#fahrenhiet-link");
fahrenhietLink.addEventListener("click", convertToFahrenhiet);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function showTemperature(response) {
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp-now");
  temperatureElement.innerHTML = `${temperature}`;
}
function handleSumbit(name) {
  let apiKey = "be81f193e065bf5feb2d944c7336968b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${name}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}
function changeCity(event) {
  event.preventDefault();
  let name = document.querySelector("#search-city-input").value;
  handleSumbit(name);
}
function getLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "imperial";
  let apiKey = "be81f193e065bf5feb2d944c7336968b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${name}&lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
function showCurrentLocaiton(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "imperial";
  let apiKey = "be81f193e065bf5feb2d944c7336968b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q&lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
function getcurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentLocaiton);
}
let newButton = document.querySelector("#current-location");
newButton.addEventListener("click", getcurrentLocation);
