import express from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';
import router from './router';
import cookieParser from 'cookie-parser';
import session from './middlewares/session';

dotenv.config();
validateEnv();

const app = express();

const PORT = process.env.PORT ?? 3333;

// app.use("/api", swaggerExpress.serve, swaggerUiExpress.setup(swaggerJson));

app.use(cookieParser());
app.use(express.json());
app.use(session());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
});