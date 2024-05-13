import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'
import express from 'express'
const app = express()

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("mongo db connection established successfully", connect.connection.host);
    } catch (error) {
        console.log("mongo db connection error", error);
        process.exit(1)
    }
}

export default connectDB