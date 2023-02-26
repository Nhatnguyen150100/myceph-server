import express from 'express';
import treatmentPlanControllers from '../controllers/treatmentPlanControllers';
import middlewareController from '../middleware/middlewareController';
import patientMiddleware from '../middleware/patientMiddleware';

const router = express.Router();

router.get('/:id', middlewareController.verifyToken, patientMiddleware.checkPatientExists, treatmentPlanControllers.getAllTreatmentPlan);
router.get('/getSelectedTreatmentPlan/:id', middlewareController.verifyToken, patientMiddleware.checkPatientExists, treatmentPlanControllers.getSelectedTreatmentPlan);
router.post('/createPlan/:id', middlewareController.verifyToken, patientMiddleware.checkPatientExists ,treatmentPlanControllers.createTreatmentPlan);
router.put('/updatePlan/:id', middlewareController.verifyToken, patientMiddleware.checkPatientExists ,treatmentPlanControllers.updateTreatmentPlan);
router.delete('/deletePlan/:id', middlewareController.verifyToken, patientMiddleware.checkPatientExists, treatmentPlanControllers.deleteTreatmentPlan);

export default router;