import express from 'express';
import doctorController from '../controllers/doctorController';

const router = express.Router();

router.post('/register', doctorController.registerDoctorController);

export default router;