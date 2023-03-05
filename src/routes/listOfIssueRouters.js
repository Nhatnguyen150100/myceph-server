import express from 'express';
import listOfIssueControllers from '../controllers/listOfIssueController';
import middlewareController from '../middleware/middlewareController';
import patientMiddleware from '../middleware/patientMiddleware';

const router = express.Router();

router.get('/:id', middlewareController.verifyToken, patientMiddleware.checkPatient, listOfIssueControllers.getListOfIssue);
router.post('/createIssue/:id', middlewareController.verifyToken, patientMiddleware.checkPatient ,listOfIssueControllers.createIssue);
router.put('/updateIssue/:id', middlewareController.verifyToken, patientMiddleware.checkPatient ,listOfIssueControllers.updateIssue);
router.delete('/deleteIssue/:id', middlewareController.verifyToken, patientMiddleware.checkPatient, listOfIssueControllers.deleteIssue);

export default router;