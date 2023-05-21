import {Request, Response} from "express";
import userModel from "../models/User.model";

class UserController {
    index = async (req: Request, res: Response) => {
        console.log("index users");
        let users = await userModel.find({}).exec();
        res.send(users);
    }
    store = async (req: Request, res: Response) => {
        let user = await userModel.create(req.body);
        console.log(user);
        res.send({message: "success"});
    }

    show = async (req: Request, res: Response) => {
        let user = await userModel.findById(req.params.id).exec();
        res.send(user);
    }

    update = async (req: Request, res: Response) => {
        let user = await userModel.findByIdAndUpdate(req.params.id, req.body).exec();
        res.send(user);
    }

    destroy = async (req: Request, res: Response) => {
        await userModel.findByIdAndRemove(req.params.id).exec();
        res.send("deleted");
    }

    destroyAll = async (req: Request, res: Response) => {
        await userModel.deleteMany({}).exec();
        res.send("deleted");
    }
}

const userController: UserController = new UserController();
export default userController;