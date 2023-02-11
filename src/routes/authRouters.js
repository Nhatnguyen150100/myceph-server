import express from 'express';
import authLoginController from '../controllers/auth/authLoginController';
import recaptchaMiddleware from '../middleware/recaptchaMiddleware';

const router = express.Router();

router.post('/login', recaptchaMiddleware.verifyRecaptcha, authLoginController);

export default router;