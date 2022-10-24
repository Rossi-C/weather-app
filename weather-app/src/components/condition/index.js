import cloudy from './images/cloudy.png';
import drizzle from './images/drizzle.png';
import mist from './images/mist.png';
import rain from './images/rain.png';
import snow from './images/snow.png';
import sun from './images/sun.png';
import thunderstorm from './images/thunderstorm.png';
import tornado from './images/tornado.png';

function WeatherCondition({ description, weatherId }) {

    const weatherLogo = () => {
        if (weatherId >= 801) return cloudy;
        else if (weatherId === 800) return sun;
        else if (weatherId === 781) return tornado;
        else if (weatherId <= 771 && weatherId >= 701) return mist;
        else if (weatherId <= 622 && weatherId >= 600) return snow;
        else if (weatherId <= 531 && weatherId >= 520) return rain;
        else if (weatherId === 511) return snow;
        else if (weatherId <= 504 && weatherId >= 500) return rain;
        else if (weatherId <= 321 && weatherId >= 300) return drizzle;
        else if (weatherId <= 232) return thunderstorm;
        else return null;
    }

    console.log(weatherId)

    return (
        <div className='box'>
            <p>Weather Condition</p>
            <img src={weatherLogo()} alt='weather logo' />
            <p>{description}</p>
        </div>
    )
}

export default WeatherCondition;