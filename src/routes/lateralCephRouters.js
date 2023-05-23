import express from 'express';
import lateralCephController from '../controllers/lateralCephController';
import middlewareController from '../middleware/middlewareController';
import patientMiddleware from '../middleware/patientMiddleware';

const router = express.Router();

router.get('/getListFontSideImages/:id', middlewareController.verifyToken, patientMiddleware.checkPatient, lateralCephController.getListFontSideImages);
router.get('/getImageAnalysis/:id', middlewareController.verifyToken, lateralCephController.getImageAnalysis);
router.post('/setImageAnalysis', middlewareController.verifyToken, lateralCephController.setImageAnalysis);
router.delete('/deleteImageAnalysis/:id', middlewareController.verifyToken, lateralCephController.deleteImageAnalysis);

export default router;