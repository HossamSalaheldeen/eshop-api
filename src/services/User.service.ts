import userModel from "../models/User.model";

class UserService {
    create = async (user: IUser) => {
        return await userModel.create(user);
    };
}

const userService: UserService = new UserService();
export default userService;