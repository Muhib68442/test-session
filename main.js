// API Key
const apiKey = 'e80cc9da06c883107b481ee037223a1f'; 




const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.city-searchbtn');
const weatherInfoCard = document.querySelector('.weather-info-card');

const tempValue = document.querySelector('.temp');
const feelsLikeValue = document.querySelector('#feelsLike');
const humidityValue = document.querySelector('#humidity');
const windSpeedValue = document.querySelector('#windSpeed');
const sunriseValue = document.querySelector('#sunrise');


console.log(apiKey);


searchBtn.addEventListener('click', () => {
  const city = cityInput.value;

  const link = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&units=metric';
  console.log(link);
  fetch(link)
  .then(response => response.json())
  .then(data => {

    console.log("data", data);

      const { name, main, wind, sys } = data;
      const temperature = main.temp;
      const feelsLike = main.feels_like;
      const humidity = main.humidity;
      const windSpeed = wind.speed;
      const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();

      // Display weather info
      weatherInfoCard.style.display = "block"; // Display the weather info card

      tempValue.textContent = temperature;
      feelsLikeValue.textContent = feelsLike;
      humidityValue.textContent = humidity;
      windSpeedValue.textContent = windSpeed;
      sunriseValue.textContent = sunrise;
    })
    .catch(error => {
      console.error('Error fetching weather data:'+error);
      weatherInfoCard.style.display = "none"; // Hide the weather info card in case of an error
      alert('Error fetching weather data. Please try again later.');
    });
});