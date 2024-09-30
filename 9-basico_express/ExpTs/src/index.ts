import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import logger from './middlewares/logger';
import router from './routers';
import { engine } from 'express-handlebars';
import sass from 'node-sass-middleware';

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

app.use(sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: 'compressed',
    prefix: '/css',
}));

app.use('/css', express.static(`${process.cwd()}/public/css`));

app.listen(PORT, () => {
    console.log(`App running at port: ${PORT}`);
});