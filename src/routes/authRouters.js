import express from 'express';
import authControllers from '../controllers/auth/authControllers';
import passportJS from '../controllers/token/passportJS';
import refreshTokenController from '../controllers/token/refreshTokenController';
import middlewareController from '../middleware/middlewareController';
import recaptchaMiddleware from '../middleware/recaptchaMiddleware';

const router = express.Router();

router.post('/login', recaptchaMiddleware.verifyRecaptcha, passportJS.authenticate, authControllers.login);
router.post('/refreshToken', refreshTokenController);
router.post('/logout', middlewareController.verifyToken, authControllers.logout);

export default router;