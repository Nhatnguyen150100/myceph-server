import express from 'express';
import doctorController from '../controllers/doctorController';
import doctorMiddleware from '../middleware/doctorMiddleware';
import middlewareController from '../middleware/middlewareController';
import recaptchaMiddleware from '../middleware/recaptchaMiddleware';

const router = express.Router();

router.post('/register', recaptchaMiddleware.verifyRecaptcha, doctorMiddleware.checkDoctorDontExistsByEmail, doctorController.sendVerifyEmailDoctor);
router.get('/getInformationDoctor/:email', middlewareController.verifyToken, doctorMiddleware.checkDoctorExistsByEmail ,doctorController.getInformationDoctor);
router.get('/getAllClinicFromDoctor/:id', middlewareController.verifyToken, doctorMiddleware.checkDoctorExistsById ,doctorController.getAllClinicFromDoctor);
router.put('/updateInformation/:id', middlewareController.verifyToken, doctorMiddleware.checkDoctorExistsById ,doctorController.updateInformationDoctor);
router.get('/verify', doctorController.verifyEmailDoctor);
router.get('/resetPassword', doctorController.verifyResetEmailDoctor);
router.post('/resetPassword', doctorController.sendVerifyEmailResetPasswordDoctor);
router.post('/findDoctorEmail/:email', recaptchaMiddleware.verifyRecaptcha, doctorMiddleware.checkDoctorExistsByEmail, doctorController.findDoctorEmail);

export default router;