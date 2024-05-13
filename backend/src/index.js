import { app } from './app.js'
import { config } from 'dotenv';
config();

import connectDB from "./db/db.js"

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`server is running on port ${process.env.PORT}`)
        })
    })
    .catch(() => {
        console.log("mongo db connection failed")
    })