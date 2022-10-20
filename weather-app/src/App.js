import './App.css';
import { useState, useEffect } from 'react';
import { getWeatherData } from './api'

function App() {
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);

  const updateWeather = async () => {
    try {
      let WeatherData = await getWeatherData('mcconnells', 'us');
      console.log(WeatherData);
    } catch (err) {
      console.log(`data not found`);
      console.log(err);
    }
  }

  useEffect(() => {
    updateWeather();
  }, [])

  return (
    <div className="App">
      <h1>Poopy</h1>
    </div>
  );
}

export default App;
