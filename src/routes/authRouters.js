import express from 'express';
import authLoginController from '../controllers/auth/authLoginController';
import refreshToken from '../controllers/token/refreshTokenController';
import recaptchaMiddleware from '../middleware/recaptchaMiddleware';

const router = express.Router();

router.post('/login', recaptchaMiddleware.verifyRecaptcha, authLoginController);
router.post('/refreshToken', refreshToken);

export default router;