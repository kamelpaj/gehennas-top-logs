require('dotenv').config();
import express from 'express';
import {moltenCore, onyxia, blackwingLair} from './zones';

const WARCRAFTLOGS_API_KEY = process.env.WARCRAFTLOGS_API_KEY;
const app = express();
const port = 3000;


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));