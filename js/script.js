"use strict";

const apiKey = "515b2218d12223666e8d44a6107a7c03";
const city = "Krakow";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      displayWeather(data);
    } else {
      document.getElementById(
        "weather"
      ).innerHTML = `<p>Error: ${data.message}</p>`;
    }
  } catch (error) {
    document.getElementById("weather").innerHTML = `<p>Error fetching data</p>`;
  }
}

function displayWeather(data) {
  const weatherDiv = document.getElementById("weather");
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const city = data.name;
  const country = data.sys.country;

  weatherDiv.innerHTML = `
    <h2>${city}, ${country}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Condition: ${description}</p>
  `;
}

getWeather();

document.getElementById("refreshBtn").addEventListener("click", getWeather);
