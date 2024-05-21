import express from 'express';
const app = express();
import cors from 'cors';


//middleware 
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust origin if needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

//import route
import todoRoutes from './routes/todo.route.js';
import userRoutes from './routes/user.route.js'

//config routes
app.use('/api', todoRoutes)
app.use('/api', userRoutes)

export { app }