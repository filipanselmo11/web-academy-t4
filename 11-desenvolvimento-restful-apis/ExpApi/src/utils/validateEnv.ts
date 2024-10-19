import {
    cleanEnv,
    str,
    port
} from 'envalid';

const validateEnv = () => {
    cleanEnv(process.env, {
        PORT: port(),
        NODE_ENV: str(),
    });
};

export default validateEnv;