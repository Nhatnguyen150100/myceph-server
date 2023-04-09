"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _patientController = _interopRequireDefault(require("../controllers/patientController"));
var _clinicMiddleware = _interopRequireDefault(require("../middleware/clinicMiddleware"));
var _doctorMiddleware = _interopRequireDefault(require("../middleware/doctorMiddleware"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var _patientMiddleware = _interopRequireDefault(require("../middleware/patientMiddleware"));
var router = _express["default"].Router();
router.get('/getPatient/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatientExists, _patientController["default"].getPatient);
router.get('/getPatientListForDoctor/:id', _middlewareController["default"].verifyToken, _doctorMiddleware["default"].checkDoctorExistsById, _patientController["default"].getPatientListForDoctor);
router.get('/getPatientListForClinic/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _patientController["default"].getPatientListForClinic);
router.post('/createPatient', _middlewareController["default"].verifyToken, _patientController["default"].createPatient);
router["delete"]('/deletePatient/:id', _middlewareController["default"].verifyToken, _patientController["default"].deletePatient);
router.put('/updateInformationPatient/:id', _middlewareController["default"].verifyToken, _patientController["default"].updateInformationPatient);
router.get('/getSharedPatientOfDoctor/:id', _middlewareController["default"].verifyToken, _doctorMiddleware["default"].checkDoctorExistsById, _patientController["default"].getSharedPatientOfDoctor);
router.get('/getSharedPatientOfDoctorInClinic/:id', _middlewareController["default"].verifyToken, _doctorMiddleware["default"].checkDoctorExistsById, _patientController["default"].getSharedPatientOfDoctorInClinic);
var _default = router;
exports["default"] = _default;