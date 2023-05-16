import {Router} from "express";
import authController from "../controllers/Auth.controller";

class AuthRoute {
    private _authRouter: Router;

    constructor() {
        this._authRouter = Router();
    }

    get authRouter(): Router {
        this.exposeAuthRoutes();
        return this._authRouter;
    }

    private exposeAuthRoutes(): void {
        this._authRouter.post('/register', authController.register);
        this._authRouter.post('/login', authController.login);
        this._authRouter.post('/logout', authController.logout);
    }
}

const authRoutes: AuthRoute = new AuthRoute();

export default authRoutes;