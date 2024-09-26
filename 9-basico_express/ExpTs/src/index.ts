import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 4455;


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`App running at port: ${PORT}`);
});