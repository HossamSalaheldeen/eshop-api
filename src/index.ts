import app from "./Server";
import * as dotenv from 'dotenv';

// Handling uncaught Exception
process.on("uncaughtException", (err: Error) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server for handling uncaught exception`);
});

dotenv.config();
app.start();

// unhandled promise rejection
process.on("unhandledRejection", (err: any) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`shutting down the server for unhandle promise rejection`);
});