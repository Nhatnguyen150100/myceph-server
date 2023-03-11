import express from 'express';
import libraryImagePatientController from '../controllers/libraryImagePatientControllers';
import middlewareController from '../middleware/middlewareController';
import patientMiddleware from '../middleware/patientMiddleware';

const router = express.Router();

router.get('/:id', middlewareController.verifyToken, patientMiddleware.checkPatient, libraryImagePatientController.getListImage);
router.post('/:id', middlewareController.verifyToken, patientMiddleware.checkPatient, libraryImagePatientController.uploadImage);
router.put('/:id', middlewareController.verifyToken, patientMiddleware.checkPatient, libraryImagePatientController.updateImagePatient);
router.delete('/:id', middlewareController.verifyToken, patientMiddleware.checkPatient, libraryImagePatientController.deleteImagePatient);

export default router;