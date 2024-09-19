// Node Modules
// import path from 'path';

// 3rd Party Modules
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { handleError } from '../middlewares/errorMiddleware.js';
import AppError from '../errors/AppError.js';
import countryAPI from '../components/country/countryAPI.js';

const app = express();

// Developer Modules

app.use(morgan('common'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/countries', countryAPI)
app.get('/', (req, res) => {
    res.send('Made With ❤ In Sri Lanka')
})
  
app.use(handleError)

export default app