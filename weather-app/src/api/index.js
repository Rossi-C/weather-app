

export const getWeatherData = async (cityName, countryCode) => {
    const apiKey = '6c7251e821c348e7a6680bfec62adfa8';
    const countryLower = countryCode.toLowerCase();
    let units;
    if (countryLower === 'us' || countryLower === 'mm' || countryLower === 'lr') {
        units = 'imperial';
    } else {
        units = 'metric';
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}&units=${units}`;
    const response = await fetch(url);
    const weather = await response.json();
    return weather
}