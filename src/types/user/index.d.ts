interface IUser {
    name: string,
    email: string,
    password: string
}

interface IUserMethods {
    comparePasswords(str:string): Promise<boolean>;
}