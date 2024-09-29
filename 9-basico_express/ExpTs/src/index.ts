import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import logger from './middlewares/logger';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 4455;


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(logger('complete'));

app.get('/info', (req, res) => {
    res.send('Página de Informações');
});

app.use(logger('simple'));

app.get('/sobre', (req, res) => {
    res.send('Page sobre');
});

app.listen(PORT, () => {
    console.log(`App running at port: ${PORT}`);
});