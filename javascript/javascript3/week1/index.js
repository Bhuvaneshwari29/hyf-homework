//find a cool api excercise

fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
  .then((response) => response.json())
  .then((vehicles) => {
    console.log(vehicles);
  });

//lets create a weather app

const city = document.getElementById("city");
const weatherInput = document.getElementById("weatherInput");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
const clouds = document.getElementById("clouds");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const container = document.getElementById("container");
const detailsBox = document.getElementById("detailsBox");
const message = document.getElementById("message");

// fetch weather data from city
weatherInput.addEventListener("click", getCityWeather);
function getCityWeather() {
  let cityName = city.value;
  if (!cityName) {
    alert("Enter a city name");
  }
  detailsBox.style.visibility = "visible";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f289a9857cc75d109e0ec14d9b852abb`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Enter valid city name");
      }
    })
    .then((weatherData) => {
      renderWeatherStatus(weatherData);
    })
    .catch((error) => {
      alert(error);
    });
}
function renderWeatherStatus(weatherData) {
  let temperature = weatherData.main;
  temperature = Math.round(temperature.temp);
  console.log(temperature);
  temp.innerText = ` ${temperature}°`;
  if (temperature < 1) {
    message.innerText = `Its freezing. wear snowsuit`;
  }
  if (temperature < 10) {
    message.innerText = `Its so cold. Wear a jacket.`;
  }
  if (temperature >= 10 && temperature < 20) {
    message.innerText = `wear a pullover`;
  }
  if (temperature >= 20) {
    message.innerText = `No Jackets. Enjoy the weather`;
  }
  let iconCode = weatherData.weather[0].icon;
  console.log(iconCode);
  const iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
  icon.src = iconurl;

  const cloudiness = weatherData.clouds.all;
  console.log(cloudiness);
  let cloudsDescription = weatherData.weather[0].description;
  console.log(cloudsDescription);
  clouds.innerText = `${cloudiness} % cloudiness with ${cloudsDescription}`;

  let sunriseTime = weatherData.sys.sunrise;
  console.log(sunriseTime);
  let utcMilliSecSunrise = sunriseTime * 1000;
  let actualSunriseTime = new Date(utcMilliSecSunrise);
  actualSunriseTime = actualSunriseTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  sunrise.innerText = actualSunriseTime;

  let sunsetTime = weatherData.sys.sunset;
  console.log(sunsetTime);
  let utcMilliSecSunset = sunsetTime * 1000;
  let actualSunsetTime = new Date(utcMilliSecSunset);
  actualSunsetTime = actualSunsetTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  sunset.innerText = actualSunsetTime;
}
