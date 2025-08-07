import postmanRequest from 'postman-request';

const geoCode = (address, callback) => {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(address)}&limit=1&appid=${encodeURIComponent(process.env.OPENWEATHERMAP_API_KEY)}`;

    postmanRequest({ url: geoUrl, json: true }, (error, { body } ) => {
        if (error) {
            callback('Unable to connect to the geo services!', undefined);
        } else if (!Array.isArray(body) || body.length === 0) {
            callback(`Location not found for "${address}". Try a more specific city name.`, undefined);
        } else {
            const { lat, lon, name, country, state } = body[0];
            callback(undefined, {
                lat,
                lon,
                loc: `${name}, ${country}, ${state || ''}`
            });
        }
    });
};

export default geoCode;