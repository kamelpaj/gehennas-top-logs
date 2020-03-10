require('dotenv').config();
import express from 'express';
import axios from 'axios';
import {moltenCore, onyxia, blackwingLair} from './zones';

const WARCRAFTLOGS_API_KEY = process.env.WARCRAFTLOGS_API_KEY;
const baseUrl = 'https://classic.warcraftlogs.com:443/v1';
const app = express();
const port = 3000;

console.log(Date.now())

/*
axios.get(`${baseUrl}/rankings/encounter/670?server=Gehennas&region=EU&page=1&api_key=${WARCRAFTLOGS_API_KEY}`).then( (response) => {
    console.log(response.data);
}).catch((response) => {
    console.log(response);
});
*/
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));