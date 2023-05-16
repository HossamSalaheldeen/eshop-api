import {Request, Response} from "express";
import registerService from "../services/auth/Register.service";
import loginService from "../services/auth/Login.service";
import userModel from "../models/User.model";


class AuthController {
    register = async (req: Request, res: Response) => {
        const registerReq: RegisterRequest = req.body as RegisterRequest;
        const isUserExist: boolean = await registerService.isUserExist(registerReq);
        if (isUserExist) {
            res.send("User already exists");
            return;
        }
        await registerService.storeNewUser(registerReq);
        res.send("User registered successfully");
    }

    login = async (req: Request, res: Response) => {
        const loginReq: LoginRequest = req.body as LoginRequest;
        const {email, password} = loginReq;
        const user= await userModel.findOne({email});
        if (!user) {
            res.send("Invalid credentials(email)");
            return;
        }

        const isPasswordMatched: boolean = await user.comparePasswords(password);

        if (!isPasswordMatched) {
            res.send("Invalid credentials(password)");
            return;
        }

        const token: string = loginService.generateNewToken(user);

        res.send(token);
    }

    logout = async (req: Request, res: Response) => {
        res.send("logout");
    }
}

const authController: AuthController = new AuthController();
export default authController;