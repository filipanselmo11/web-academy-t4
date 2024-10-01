import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
    cleanEnv(process.env, {
        NODE_ENV: str(),
        PORT: port(),
        DIR_LOG: str(),
        DB_SERVER: str()
    });
};

export default validateEnv;