import express from 'express';
import clinicControllers from '../controllers/clinicControllers';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

router.get('/', middlewareController.verifyToken, clinicControllers.getAllClinic);
router.post('/create-clinic/:id', middlewareController.verifyToken, clinicControllers.createNewClinic);
router.get('/getAllDoctorFromClinic/:id', middlewareController.verifyToken, clinicControllers.getAllDoctorInClinic);
router.get('getInformationClinic/:id', middlewareController.verifyToken, clinicControllers.getInformationClinic);
router.put('/updateInformationClinic/:id', middlewareController.verifyToken, clinicControllers.updateInformationClinic);
router.post('/addDoctorToClinic/:id', middlewareController.verifyToken, clinicControllers.addDoctorToClinic);

export default router;