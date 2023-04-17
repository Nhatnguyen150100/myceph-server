import express from 'express';
import lateralCephController from '../controllers/lateralCephController';
import middlewareController from '../middleware/middlewareController';
import patientMiddleware from '../middleware/patientMiddleware';

const router = express.Router();

router.get('/getListFontSideImages/:id', middlewareController.verifyToken, patientMiddleware.checkPatient, lateralCephController.getListFontSideImages);

export default router;