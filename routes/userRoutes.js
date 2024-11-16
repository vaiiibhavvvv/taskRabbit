import express from 'express';
import { Router } from 'express';

import {register,login,updateProfile } from '../controller/userController';

import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.put('./upadate',authMiddleware,updateProfile);

export default userRouter;