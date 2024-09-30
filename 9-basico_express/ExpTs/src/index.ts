import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import logger from './middlewares/logger';
import router from './routers';
import { engine } from 'express-handlebars';
dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 4455;

(async () => {
    const helpers = await import(`${__dirname}/views/helpers/helpers.ts`);
    app.engine('handlebars', engine({ helpers: helpers }));
})();
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

app.use(logger('complete'));
app.use(logger('simple'));
app.use(router);

app.listen(PORT, () => {
    console.log(`App running at port: ${PORT}`);
});