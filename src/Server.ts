import express, {Express} from "express";
import cors from "cors";
import routes from "./routes/Routes";
import databaseConnection from "./database/DatabaseConnection";
import env from "./utilities/validateEnv";
import morgan from "morgan";

class Server {
    private app: Express;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'))
        this.app.use(routes.router);
        this.app.use((req, res, next) => {
            res.status(404).send("Route not found");
        });
    }

    start = async () => {
        await databaseConnection.connect();
        routes.exposeRoutes();

        this.app.listen(env.APP_PORT, () => {
            console.log(`server listening on port ${env.APP_PORT}`);
        });
    }
}

const app: Server = new Server();
export default app;