import './App.css';
import { useState, useEffect } from 'react';
import { getWeatherData } from './api';

function App() {
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [city, setCity] = useState('Charleston');
  const [country, setCountry] = useState('US');
  const [isImperial, setIsImperial] = useState(true);

  const updateWeather = async (cityName, countryCode) => {
    let countryLower = countryCode.toLowerCase();
    try {
      if (countryLower === 'us' || countryLower === 'mm' || countryLower === 'lr') {
        setIsImperial(true);
      } else {
        setIsImperial(false);
      }
      let { main: { temp, humidity }, weather: [{ description }], wind: { speed } } = await getWeatherData(cityName, countryLower);
      console.log(speed);
      if (temp || humidity || description || speed) {
        setTemp(temp);
        setHumidity(humidity);
        setDescription(description);
        setWindSpeed(speed);
      }
    } catch (err) {
      console.log(`data not found`);
      console.log(err);
    }
  }

  useEffect(() => {
    updateWeather(city, country);
    console.log(windSpeed);
  }, [])

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(city, country);
    await updateWeather(city, country);
  }

  return (
    <div className="App">
      <h1>Global Weather</h1>
      <p>Enter your city and country to get started!</p>
      <form>
        <label>
          City:
          <input
            className='Input'
            type='text'
            name='city'
            value={city}
            onChange={e => setCity(e.target.value)} />
        </label>
        <br></br>
        <label>
          Country:
          <input
            className='Input'
            type='text'
            name='country'
            value={country}
            onChange={e => setCountry(e.target.value)} />
        </label>
      </form>
      <button
        className='Input'
        type='button'
        onClick={handleClick}>
        Search Weather
      </button>
      <div className='Description'>
        {isImperial ?
          <p>Temperature: {temp}&deg;F</p>
          :
          <p>Temperature: {temp}&deg;C</p>
        }
        <p>Weather Condition: {description} </p>
        <p>Humidity: {humidity}% </p>
        {isImperial ?
          <p>Wind Speed: {windSpeed} Miles per hour </p>
          :
          <p>Wind Speed: {windSpeed} Meters per Second</p>
        }
      </div>
    </div>
  );
}

export default App;
