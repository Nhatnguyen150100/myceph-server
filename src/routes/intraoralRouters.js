import express from 'express';
import intraoralControllers from '../controllers/intraoralControllers';
import middlewareController from '../middleware/middlewareController';
import patientMiddleware from '../middleware/patientMiddleware';

const router = express.Router();

router.get('/:id', middlewareController.verifyToken, patientMiddleware.checkPatientExists, intraoralControllers.getIntraoral);
router.put('/updateIntraoral/:id', middlewareController.verifyToken, patientMiddleware.checkPatientExists, intraoralControllers.updateIntraoral);

export default router;