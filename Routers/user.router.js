import express from 'express';
import { registerUser, loginUser, getUserInfo } from '../Controllers/user.controller.js';
import authMiddleware from '../Middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, getUserInfo);

export default router;