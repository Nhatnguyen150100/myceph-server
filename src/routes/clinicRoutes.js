import express from 'express';
import clinicControllers from '../controllers/clinicControllers';

const router = express.Router();

router.get('/', clinicControllers.getAllClinic);
router.post('/create-clinic/:id', clinicControllers.createNewClinic);

export default router;