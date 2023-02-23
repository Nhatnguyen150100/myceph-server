import express from 'express';
import authControllers from '../controllers/auth/authControllers';
import refreshToken from '../controllers/token/refreshTokenController';
import middlewareController from '../middleware/middlewareController';
import recaptchaMiddleware from '../middleware/recaptchaMiddleware';

const router = express.Router();

router.post('/login', recaptchaMiddleware.verifyRecaptcha, authControllers.login);
router.post('/refreshToken', refreshToken);
router.post('/logout', middlewareController.verifyToken, authControllers.logout);

export default router;