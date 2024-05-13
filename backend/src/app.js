import express from 'express';
const app = express();
import cors from 'cors';


//middleware 
app.use(express.json());
app.use(cors())

//import route
import todoRoutes from './routes/todo.route.js';

//config routes
app.use('/api', todoRoutes)
export { app }