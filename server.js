import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import {userRoutes} from './routes/userRoutes';
import {taskRoutes} from './routes/taskRoutes';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'));

//Routes
app.use('/api/users',userRoutes);
app.use('./api/tasks',taskRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT,(req,res)=>{
    console.log(`Server is up and running on ${PORT}`);
})