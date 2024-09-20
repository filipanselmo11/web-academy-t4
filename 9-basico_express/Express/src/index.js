const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT ?? 4455;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`App running at port: ${PORT}`);
});