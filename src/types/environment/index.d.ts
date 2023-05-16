declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_PORT: string
            DB_URL: string
            JWT_SECRET_KEY: string
            JWT_EXPIRATION_TIME: string
        }
    }
}
export {};