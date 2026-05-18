import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

export const connection = mysql.createConnection({
        host: process.env.HOST,
        user: proces.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.PORT
})