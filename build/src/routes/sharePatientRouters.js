"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _sharePatientController = _interopRequireDefault(require("../controllers/sharePatientController"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var _patientMiddleware = _interopRequireDefault(require("../middleware/patientMiddleware"));
var router = _express["default"].Router();
router.post('/sharePatient', _middlewareController["default"].verifyToken, _sharePatientController["default"].sharePatient);
router.post('/removeSharePatient', _middlewareController["default"].verifyToken, _sharePatientController["default"].removeSharePatient);
router.put('/updateRoleOfOwnerDoctor', _middlewareController["default"].verifyToken, _sharePatientController["default"].updateRoleOfOwnerDoctor);
router.get('/getDoctorSharedPatient/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _sharePatientController["default"].getDoctorSharedPatient);
router.get('/getAllDoctorSharePatient/:idSharedPatientOfDoctor', _middlewareController["default"].verifyToken, _sharePatientController["default"].getAllDoctorSharePatient);
router.get('/getListSharePatientOfDoctor/:idSharedPatientOfDoctor', _middlewareController["default"].verifyToken, _sharePatientController["default"].getListSharePatientOfDoctor);
router["delete"]('/deleteShareDoctor/:idSharedPatientOfDoctor', _middlewareController["default"].verifyToken, _sharePatientController["default"].deleteShareDoctor);
router.get('/getListSharePatientOfDoctorInClinic/:idSharedPatientOfClinic', _middlewareController["default"].verifyToken, _sharePatientController["default"].getListSharePatientOfDoctorInClinic);
router.get('/getListSharePatientOfCurrentDoctor/:idOwnerDoctor', _middlewareController["default"].verifyToken, _sharePatientController["default"].getListSharePatientOfCurrentDoctor);
var _default = router;
exports["default"] = _default;