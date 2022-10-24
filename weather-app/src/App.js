import './App.css';
import { useState, useEffect } from 'react';
import { getWeatherData } from './api';
import EditLocation from './components/location';
import EditUnits from './components/units';
import WeatherCondition from './components/condition';

function App() {
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [weatherId, setWeatherId] = useState(null);
  const [city, setCity] = useState('Charleston');
  const [country, setCountry] = useState('US');
  const [units, setUnits] = useState('imperial');
  const [err, setErr] = useState(false);

  const updateWeather = async (cityName, countryCode, units) => {
    setErr(false);
    try {
      let { main: { temp, humidity }, weather: [{ description, id }], wind: { speed } } = await getWeatherData(cityName, countryCode, units);
      if (temp || humidity || description || id || speed) {
        setTemp(temp);
        setHumidity(humidity);
        setDescription(description);
        setWeatherId(id);
        setWindSpeed(speed);
      }
    } catch (err) {
      setErr(true);
      console.log(`data not found`);
      console.log(err);
    }
  }

  useEffect(() => {
    updateWeather(city, country, units);
  }, [units])

  const handleClick = async (e) => {
    e.preventDefault();
    await updateWeather(city, country, units);
  }

  return (
    <div className="App">
      <div>
        <h1>Global Weather</h1>
        <p>Enter a city and country and choose a unit of measurement to get started!</p>
      </div>
      <div>
        <EditLocation city={city} setCity={setCity} country={country} setCountry={setCountry} />
      </div>
      <div>
        <EditUnits units={units} setUnits={setUnits} />
      </div>
      <div className='Button'>
        <button
          type='button'
          onClick={handleClick}>
          Search Weather
        </button>
      </div>
      {err ?
        <div className='Description'>
          <p>We cannot find weather information for the city and country.</p>
          <p>Try entering a new location!</p>
        </div>
        :
        <div className='Description'>
          {units === 'imperial' ?
            <p>Temperature: {temp}&deg;F</p>
            :
            <p>Temperature: {temp}&deg;C</p>
          }
          <WeatherCondition description={description} weatherId={weatherId} />
          <p>Humidity: {humidity}% </p>
          {units === 'imperial' ?
            <p>Wind Speed: {windSpeed} Miles per hour </p>
            :
            <p>Wind Speed: {windSpeed} Meters per Second</p>
          }
        </div>
      }
    </div>
  );
}

export default App;
