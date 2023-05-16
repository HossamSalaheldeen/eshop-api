import {Router} from "express";
import authRoutes from "./Auth.route";
import userRoutes from "./User.route";

class Routes {

    private _router: Router;

    constructor() {
        this._router = Router();
    }

    get router(): Router {
        return this._router;
    }


    exposeRoutes(): void {
        this._router.use(authRoutes.authRouter);
        this._router.use(userRoutes.userRouter);
    }
}

const routes: Routes = new Routes();
export default routes;

