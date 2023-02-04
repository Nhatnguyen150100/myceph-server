import express from 'express';
import doctorController from '../controllers/doctorController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

router.post('/register', doctorController.registerDoctorController);
router.get('/getInformationDoctor', middlewareController.verifyToken, doctorController.getInformationDoctor);
router.get('/getAllClinicFromDoctor/:id', middlewareController.verifyToken, doctorController.gettAllClinicFromDoctor);
router.put('/updateInformation/:id', middlewareController.verifyToken, doctorController.updateInformationDoctor);

export default router;