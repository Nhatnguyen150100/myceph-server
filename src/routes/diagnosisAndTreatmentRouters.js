import express from 'express';
import diagnosisAndTreatmentControllers from '../controllers/diagnosisAndTreatmentControllers';
import doctorMiddleware from '../middleware/doctorMiddleware';
import middlewareController from '../middleware/middlewareController';
import patientMiddleware from '../middleware/patientMiddleware';

const router = express.Router();

router.get('/:id', middlewareController.verifyToken, patientMiddleware.checkPatientExists, diagnosisAndTreatmentControllers.getDiagnosisAndTreatment);
router.put('/updateDiagnosisAndTreatment/:id', middlewareController.verifyToken, patientMiddleware.checkPatientExists, doctorMiddleware.checkDoctorExistsByIdFromBody ,diagnosisAndTreatmentControllers.updateDiagnosisAndTreatment);

export default router;