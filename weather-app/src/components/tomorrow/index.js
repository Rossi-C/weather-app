import { moment } from 'react-moment';
import { fetch } from 'react-fetch';
import { stringify } from 'query-string';

function WeatherData() {

    const getTimelineURL = "https://api.tomorrow.io/v4/timelines";

    const apikey = '4lTlG3SN03VBAewVK9tAnZFs4ZgaRIoV';

    let location = [40.758, -73.9855];

    const fields = [
        "precipitationIntensity",
        "precipitationType",
        "windSpeed",
        "windGust",
        "windDirection",
        "temperature",
        "temperatureApparent",
        "cloudCover",
        "cloudBase",
        "cloudCeiling",
        "weatherCode",
    ];

    const units = 'imperial';

    const timesteps = ["current", "1h", "1d"];

    const now = moment.utc();
    const startTime = moment.utc(now).add(0, 'minutes').toISOString();
    const endTime = moment.utc(now).add(1, 'days').toISOString();

    const timezone = 'Americ/New_York';

    const getTimelineParameters = stringify({
        apikey,
        location,
        fields,
        units,
        timesteps,
        startTime,
        endTime,
        timezone,
    }, { arrayFormat: "comma" });

    fetch(getTimelineURL + "?" + getTimelineParameters, { method: "GET", compress: true })
        .then((result) => result.json())
        .then((json) => console.log(json))
        .catch((error) => console.error(`error: ${error}`));
}

export default WeatherData;