import dotenv from "dotenv"
dotenv.config()

export const config = {
    HTTPS: {
        URL_BASE: process.env.URL_BASE,
        AUTHORIZATION: process.env.AUTH
    }
}