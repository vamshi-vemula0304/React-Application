import React, { useState } from 'react';
import Image from 'next/image';
import Styles from '../styles/weather.module.css'

const WeatherApp: React.FC = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState<any>(null);
    const [error, setError] = useState('');

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=2e76711908df9dce575e0142da4ff107" + "&units=metric"
            );
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
                setError('');
            } else {
                setError('Unable to fetch weather data.');
                setWeatherData(null);
            }
        } catch (error) {
            setError('An error occurred while fetching weather data.');
            setWeatherData(null);
        }
    };

    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchWeatherData();
    };

    return (
        <div className={Styles.centerContainer}>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <div className={Styles.inputContainer}>
                    <input
                        type="text"
                        value={location}
                        onChange={handleLocationChange}
                        placeholder="Enter a location"
                    />
                    <button className={ Styles.button}type="submit">Get Weather</button>
                </div>
            </form>

            {weatherData && (
                <div className={Styles.weatherContainer}>
                    <h2>Current Weather in {location}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Condition: {weatherData.weather[0].description}</p>
                    <div><Image src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" width={100} height={ 100 } /></div>
                </div>
            )}

            {error && <p>{error}</p>}
        </div>
    );
};

export default WeatherApp;