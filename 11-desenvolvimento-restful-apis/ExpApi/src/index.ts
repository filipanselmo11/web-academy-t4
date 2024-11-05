import express from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';
import router from './router';
import cookieParser from 'cookie-parser';
import session from './middlewares/session';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

dotenv.config();
validateEnv();

const app = express();

const PORT = process.env.PORT ?? 3333;

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cookieParser());
app.use(express.json());
app.use(session());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
});