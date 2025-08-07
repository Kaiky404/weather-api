import postmanRequest from 'postman-request';

const forecast = (lat, lon, callback) => {
    const forecastUrl = `https://api.weatherstack.com/current?access_key=${encodeURIComponent(process.env.WEATHERSTACK_API_KEY)}&query=${encodeURIComponent(lat)},${encodeURIComponent(lon)}&units=m`;
    
    postmanRequest({ url: forecastUrl, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to the weather service!', undefined);
        } else if (body.success === false) {
            callback('The lat and lon data was invalid!', undefined);
        } else {
            const { weather_descriptions, temperature, precip } = body.current;
            callback(undefined, {
                forecastLoc: `${weather_descriptions[0]}, ${temperature} degrees out, and ${precip}% chance of rain`
            });
        }
    });
};

export default forecast;
