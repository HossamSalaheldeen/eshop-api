import {cleanEnv, port, str} from "envalid";
import * as dotenv from "dotenv";
dotenv.config();

const env = cleanEnv(process.env, {
    APP_PORT: port(),
    DB_URL:str(),
    DB_DATABASE:str(),
    JWT_SECRET_KEY: str(),
    JWT_EXPIRATION_TIME: str(),
    NODE_ENV: str({choices: ['development', 'test', 'production', 'staging']}),
});

export default env;