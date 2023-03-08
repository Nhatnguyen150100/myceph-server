import express from 'express';
import treatmentHistoryControllers from '../controllers/treatmentHistoryControllers';
import middlewareController from '../middleware/middlewareController';
import patientMiddleware from '../middleware/patientMiddleware';

const router = express.Router();

router.get('/:id', middlewareController.verifyToken, patientMiddleware.checkPatient, treatmentHistoryControllers.getTreatmentHistory);
router.post('/createHistory/:id', middlewareController.verifyToken, patientMiddleware.checkPatient ,treatmentHistoryControllers.createTreatmentHistory);
router.put('/updateHistory/:id', middlewareController.verifyToken, patientMiddleware.checkPatient ,treatmentHistoryControllers.updateTreatmentHistory);
router.delete('/deleteHistory/:id', middlewareController.verifyToken, patientMiddleware.checkPatient, treatmentHistoryControllers.deleteTreatmentHistory);

export default router;