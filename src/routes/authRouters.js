'use-strict'
import express from 'express';
import authControllers from '../controllers/auth/authControllers';
import passportJsVerify from '../controllers/token/passportJsVerify';
import refreshTokenController from '../controllers/token/refreshTokenController';
import middlewareController from '../middleware/middlewareController';
import recaptchaMiddleware from '../middleware/recaptchaMiddleware';

const router = express.Router();

router.post('/login', recaptchaMiddleware.verifyRecaptcha, passportJsVerify.authenticate, authControllers.login);
router.post('/refreshToken', refreshTokenController);
router.post('/logout', middlewareController.verifyToken, authControllers.logout);

export default router;