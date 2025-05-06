// External libraries
import { useState, useEffect } from 'react';
// Styles
import "./App.css";
// Services
import * as weatherService from './services/weatherService';
import { show, formatWeatherData } from './services/weatherService';
// Components
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

function App() {
  
  const [weather, setWeather] = useState({});

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    setWeather(formatWeatherData(data));
  }

  // console.log('State:', weather);

  useEffect(() => {

    // Define a fetch function:
    const fetchDefaultData = async () => {
      const data = await weatherService.show('New York');
      setWeather(formatWeatherData(data));
    };

    // Call the fetch function when the page loads:
    fetchDefaultData();


  }, []);

  return (
    <>
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
    </>
  );
}

export default App;