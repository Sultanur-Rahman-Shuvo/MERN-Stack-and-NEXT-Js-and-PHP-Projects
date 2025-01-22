import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const fetchWeather = async () => {
        if (!city.trim()) {
            setError("City name cannot be empty");
            return;
        }

        setError(null);
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"ce66539edcdaa4b953f88493dbe8edaf"}&units=metric`
            );
            setWeather(response.data);
        } catch (err) {
            console.error("Error fetching weather data", err);
            setError("Unable to fetch weather data. Please try again.");
        }
    };

    const handleClick = () => {
        fetchWeather();
    };

    return (
        <div className="weather-container">
            <input
                type="text"
                placeholder="Enter a city name"
                value={city}
                onChange={handleCityChange}
            />
            <button onClick={handleClick}>Get Weather</button>
            {error && <p className="error">{error}</p>}
            {weather && (
                <div className="weather-info">
                    <h1>{weather.name}</h1>
                    <p>Temp is {weather.main.temp}°C</p>
                    <h2>{weather.weather[0].description}</h2>
                </div>
            )}
        </div>
    );
};

export default Weather;
