import express from 'express';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig()

const app = express();
const PORT = process.env.PORT ?? 4455;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`App running at port: ${PORT}`);
});