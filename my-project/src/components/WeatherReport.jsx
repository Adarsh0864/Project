import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherReport() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_NEW_API_KEY' with your new, active API key from OpenWeatherMap
    const apiKey = '393d7d16c110acc3d729af09e3f33943';
    const city = 'London'; // You can change this to any city you want
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log('Fetching weather data from:', apiUrl);

    axios.get(apiUrl)
      .then(response => {
        console.log('API Response:', response.data);
        setWeather(response.data);
      })
      .catch(error => {
        console.error("Error fetching weather data", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-green-50 p-4 rounded-lg shadow-md mt-8">
      {weather ? (
        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-4">Weather in {weather.name}</h3>
          <p className="text-gray-700">Temperature: {weather.main.temp}°C</p>
          <p className="text-gray-700">Condition: {weather.weather[0].description}</p>
          <p className="text-gray-700">Humidity: {weather.main.humidity}%</p>
        </div>
      ) : (
        <p className="text-gray-700">Loading weather data... Please check the console for details.</p>
      )}
    </div>
  );
}

export default WeatherReport;