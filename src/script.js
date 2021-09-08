function showTemperature(response) {
  console.log(response);
  let h3 = document.querySelector("h3");
  h3.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${temperature}° with ${description} in ${response.data.name}`;
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city");
  console.log(city.value);
  let apiKey = "47c351edbacaf9eec91029318849cab0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showLocal(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "47c351edbacaf9eec91029318849cab0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showLocal);
}

let button = document.querySelector("#currentlocation");
button.addEventListener("click", getCurrentPosition);

let now = new Date();
let h5 = document.querySelector("h5");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

let day = days[now.getDay()];
let months = [
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
let month = months[now.getMonth()];

h5.innerHTML = `${day}, ${month} ${date}, ${hours}:${minutes}, ${year}`;
