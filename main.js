const apiKey = '3bbf2d5ba081cb9d6251d7f1eb35cd09';
const cities = ['Paris', 'Tours','Amboise', 'lisboa', 'porto', 'coimbra','Amsterdam','rotterdam','hague','bruges', 'brussels', 'ghent'];

async function fetchWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`);
    const data = await response.json();
    return data;
}

function displayWeather(data, city) {
    const cityElement = document.getElementById(`city-${city.toLowerCase()}`);
    const temperatureElement = document.getElementById(`temperature-${city.toLowerCase()}`);
    const descriptionElement = document.getElementById(`description-${city.toLowerCase()}`);

    //cityElement.textContent = data.name;
    temperatureElement.textContent = `${Math.round(data.main.temp)} °C`;
    descriptionElement.textContent = `${data.weather[0].description}`;
}

document.addEventListener('DOMContentLoaded', async () => {
    for (const city of cities) {
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeather(weatherData, city);
        } catch (error) {
            console.error(`Erro ao buscar dados para ${city}:`, error);
        }
    }
});
