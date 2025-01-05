const apikey = '3e16949d2f5a8264c9012f69836d8e43';
const baseUrl = 'https://api.weatherstack.com/current';

const button = document.querySelector('button');
const input = document.querySelector('input');
const detailsBox = document.querySelector('.details-box');
const windDetails = document.querySelector('.wind-details');
const humidityDetails = document.querySelector('.humidity-details');
const errorBox = document.querySelector('.error-box');
const weatherBox = document.querySelector('.weather-box');

async function fetchData(location) {
  try {
    clearError();
    const url = `${baseUrl}?access_key=${apikey}&query=${location}`;
    const response = await axios.get(url);

    if (response.data.error) {
      throw new Error(response.data.error.info);
    }
    return response.data.current;
  } catch (error) {
    displayError(`Error fetching weather: ${error.message}`);
  }
}

function displayError(message) {
  errorBox.innerHTML = `
    <div class="cloud">☁️</div>
    <p>${message}</p>
  `;
  errorBox.style.display = 'block';
  weatherBox.style.display = 'none';
}

function clearError() {
  errorBox.innerHTML = '';
  errorBox.style.display = 'none';
}

function clearAll() {
  detailsBox.innerHTML = '';
  windDetails.innerHTML = '';
  humidityDetails.innerHTML = '';

  clearError();
}

function renderData(data, location) {
  weatherBox.style.display = 'block';
  if (!data) {
    displayError('No data to render');
    return;
  }

  detailsBox.innerHTML = '';
  windDetails.innerHTML = '';
  humidityDetails.innerHTML = '';

  const tempDetails = document.createElement('div');

  tempDetails.innerHTML = `
    <p>Weather in ${location}</p>
    <img src="${data.weather_icons[0]}" alt="weather icon" class="temp-icon"/>
    <p>Temperature: ${data.temperature}°C</p>
    <p class="desc">Description: ${data.weather_descriptions[0]}</p>
  `;
  detailsBox.appendChild(tempDetails);

  const windDetail = document.createElement('div');

  windDetail.innerHTML = `
    <img src="weather.png" alt="wind speed icon" class="weather-icon">
    <p>Wind Speed</p>
    <p>${data.wind_speed}km/h</p>
  `;
  windDetails.appendChild(windDetail);

  const humidityDetail = document.createElement('div');

  humidityDetail.innerHTML = `
    <img src="humidity.png" alt="humidity icon" class="weather-icon">
    <p>Humidity</p>
    <p>${data.humidity}%</p>
  `;
  humidityDetails.appendChild(humidityDetail);
}

button.addEventListener('click', async () => {
  const location = input.value.trim();
  if (!location) {
    displayError('Enter a location');
    return;
  }
  try {
    clearError();
    const weatherData = await fetchData(location);
    if (!weatherData) {
      displayError(
        'Enter a valid location or check your internet connection and try again.'
      );
      return;
    }
    renderData(weatherData, location);
  } catch (error) {
    displayError(`Error fetching weather: ${error.message}`);
  }
});
