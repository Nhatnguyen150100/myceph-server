import express from 'express';
import authLoginController from '../controllers/auth/authLoginController';

const router = express.Router();

router.post('/login', authLoginController);

export default router;