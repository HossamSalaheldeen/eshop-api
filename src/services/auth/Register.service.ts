import userModel from "../../models/User.model";
import userService from "../User.service";

class RegisterService {
    isUserExist = async (registerReq: RegisterRequest): Promise<boolean> => {
        const {email} = registerReq;
        const isExist = await userModel.exists({email});
        return !!isExist;
    };

    storeNewUser = async (registerReq: RegisterRequest) => {
        return await userService.create(registerReq);
    };

}

const registerService: RegisterService = new RegisterService();
export default registerService;