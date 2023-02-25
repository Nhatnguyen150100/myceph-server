import express from 'express';
import sharePatientController from '../controllers/sharePatientController';
import middlewareController from '../middleware/middlewareController';
const router  = express.Router();

router.post('/sharePatient', middlewareController.verifyToken, sharePatientController.sharePatient);
router.post('/removeSharePatient', middlewareController.verifyToken, sharePatientController.removeSharePatient);
router.put('/updateRoleOfOwnerDoctor', middlewareController.verifyToken, sharePatientController.updateRoleOfOwnerDoctor);
router.get('/getDoctorSharedPatient/:idSharedPatientOfDoctor', middlewareController.verifyToken, sharePatientController.getDoctorSharedPatient);
router.get('/getAllDoctorSharePatient/:idSharedPatientOfDoctor', middlewareController.verifyToken, sharePatientController.getAllDoctorSharePatient);
router.get('/getListSharePatientOfDoctor/:idSharedPatientOfDoctor', middlewareController.verifyToken, sharePatientController.getListSharePatientOfDoctor);
router.delete('/deleteShareDoctor/:idSharedPatientOfDoctor', middlewareController.verifyToken, sharePatientController.deleteShareDoctor);
router.get('/getListSharePatientOfDoctorInClinic/:idSharedPatientOfClinic', middlewareController.verifyToken, sharePatientController.getListSharePatientOfDoctorInClinic);
router.get('/getListSharePatientOfCurrentDoctor/:idOwnerDoctor', middlewareController.verifyToken, sharePatientController.getListSharePatientOfCurrentDoctor);


export default router;