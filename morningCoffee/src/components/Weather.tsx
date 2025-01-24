import React, { useEffect, useState } from 'react';

const Weather = ({ location }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=YOUR_API_KEY`);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const data = await response.json();
                setWeather(data[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [location]);

    if (loading) return <div>Loading weather...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Current Weather</h2>
            <p>{weather.WeatherText}</p>
            <p>Temperature: {weather.Temperature.Metric.Value}°C</p>
        </div>
    );
};

export default Weather;