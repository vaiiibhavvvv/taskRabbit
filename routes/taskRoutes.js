import express from 'express';
 import {createTask,updateTask,getTask,deleteTask } from '../controller/taskController';
 import {authMiddleware} from '../middleware/authMiddleware';

 const router = express.Router();

 router.get('/',authMiddleware,getTask);
 router.post('/',authMiddleware,createTask);
 router.put('/:id',authMiddleware,updateTask);
 router.delete('/:id',authMiddleware,deleteTask);

 export default router;