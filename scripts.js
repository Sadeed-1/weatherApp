function getWeather() {
    const apiKey = '642fe1588d077dc2010badf3b4b30ebd'; // Replace 'YOUR_API_KEY' with your actual API key
    const city = document.getElementById('cityInput').value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        displayWeather(response);
      } else {
        alert('Error fetching weather data. Please try again.');
      }
    };
    xhr.send();
  }
  
  function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">${weatherData.name}, ${weatherData.sys.country}</h2>
          <p class="card-text">Current Time: ${new Date().toLocaleString()}</p>
          <p class="card-text">Temperature: ${weatherData.main.temp} °C</p>
          <p class="card-text">Weather: ${weatherData.weather[0].description}</p>
          <p class="card-text">Humidity: ${weatherData.main.humidity}%</p>
          <p class="card-text">Wind Speed: ${weatherData.wind.speed} m/s</p>
        </div>
      </div>
    `;
  }
  