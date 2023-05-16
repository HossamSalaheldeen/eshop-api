import mongoose from 'mongoose';
import env from "../utilities/validateEnv";


class DatabaseConnection {
    connect = async () => {

        await mongoose.connect(`${env.DB_URL}/${env.DB_DATABASE}`,).then((data) => {
            console.log(`mongodb connected with server: ${data.connection.host}`);
        });
    }
}

const databaseConnection: DatabaseConnection = new DatabaseConnection();
export default databaseConnection;