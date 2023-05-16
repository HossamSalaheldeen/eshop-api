import jwt from "jsonwebtoken"
import env from "../../utilities/validateEnv";

class LoginService {

    generateNewToken = (user: IUser) => {
        return jwt.sign(
            {email: user.email},
            env.JWT_SECRET_KEY,
            {expiresIn: env.JWT_EXPIRATION_TIME}
        );
    };

}

const loginService: LoginService = new LoginService();

export default loginService;