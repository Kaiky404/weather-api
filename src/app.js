import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import express from 'express';
import hbs from 'hbs';
import forecast from './utils/forecast.js';
import geoCode from './utils/geocode.js';
import dotenv from 'dotenv';

dotenv.config();

const weatherstackKey = process.env.WEATHERSTACK_API_KEY;
console.log(weatherstackKey);
const openweathermapKey = process.env.OPENWEATHERMAP_API_KEY;
console.log(openweathermapKey);

//Define paths for Express config
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const viewsPath = path.join(__dirname, '../templates/views');
const publicDirectoryPath = path.join(__dirname, '..', 'public');
const app = express();
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index',  {
        title: 'Weather',
        name: 'Kaiky F. Silva'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Kaiky F. Silva'   
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Kaiky F. Silva'
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    geoCode(req.query.address, (error, data) => {
        if (error) {
            return res.send({ error });
        }
        
        const { lat, lon, loc } = data;
        
        forecast(lat, lon, (error, data) => {
            if (error) {
                return res.send({ error });
            }
            
            const { forecastLoc } = data;
            
            res.send({
                location: loc,
                forecast: forecastLoc
            });
        });
    });
    
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    
    console.log(req.query);
    req.query
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found',
        name: 'Kaiky F. Silva'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Kaiky F. Silva'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000!');
})
