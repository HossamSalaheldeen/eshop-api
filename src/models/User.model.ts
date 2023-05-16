import {Model, model, Schema} from "mongoose";
import bcrypt from "bcrypt";

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, {}, IUserMethods>({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
},{timestamps: true});

userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePasswords = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

const userModel = model<IUser, UserModel>('User', userSchema);
export default userModel;