import {Router} from "express";
import userController from "../controllers/User.controller";

class UserRoute {
    private _userRouter: Router;

    constructor() {
        this._userRouter = Router();
    }

    get userRouter(): Router {
        this.exposeUserRoutes();
        return this._userRouter;
    }

    private exposeUserRoutes(): void {
        this._userRouter.get('/users', userController.index);
        this._userRouter.post('/users', userController.store);
        this._userRouter.get('/users/:id', userController.show);
        this._userRouter.put('/users/:id', userController.update);
        this._userRouter.delete('/users/:id', userController.destroy);
        this._userRouter.delete('/users', userController.destroyAll);
    }
}

const userRoutes: UserRoute = new UserRoute();

export default userRoutes;