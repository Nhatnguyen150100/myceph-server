"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _doctorController = _interopRequireDefault(require("../controllers/doctorController"));
var _doctorMiddleware = _interopRequireDefault(require("../middleware/doctorMiddleware"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var _recaptchaMiddleware = _interopRequireDefault(require("../middleware/recaptchaMiddleware"));
var router = _express["default"].Router();
router.get('/:id', _middlewareController["default"].verifyToken, _doctorMiddleware["default"].checkDoctorExistsById, _doctorController["default"].getInformationDoctorById);
router.post('/register', _recaptchaMiddleware["default"].verifyRecaptcha, _doctorMiddleware["default"].checkDoctorDontExistsByEmail, _doctorController["default"].sendVerifyEmailDoctor);
router.get('/getInformationDoctor/:email', _middlewareController["default"].verifyToken, _doctorMiddleware["default"].checkDoctorExistsByEmail, _doctorController["default"].getInformationDoctor);
router.get('/getAllClinicFromDoctor/:id', _middlewareController["default"].verifyToken, _doctorMiddleware["default"].checkDoctorExistsById, _doctorController["default"].getAllClinicFromDoctor);
router.put('/updateInformation/:id', _middlewareController["default"].verifyToken, _doctorMiddleware["default"].checkDoctorExistsById, _doctorController["default"].updateInformationDoctor);
router.get('/verify', _doctorController["default"].verifyEmailDoctor);
router.post('/registerDev', _recaptchaMiddleware["default"].verifyRecaptcha, _doctorMiddleware["default"].checkDoctorDontExistsByEmail, _doctorController["default"].createDoctorDev);
router.get('/resetPassword', _doctorController["default"].verifyResetEmailDoctor);
router.post('/resetPassword', _doctorController["default"].sendVerifyEmailResetPasswordDoctor);
router.post('/findDoctorEmail/:email', _recaptchaMiddleware["default"].verifyRecaptcha, _doctorMiddleware["default"].checkDoctorExistsByEmail, _doctorController["default"].findDoctorEmail);
router.get('/getAllDoctorFromEmailSearch/:email', _middlewareController["default"].verifyToken, _doctorController["default"].getAllDoctorByEmailSearch);
var _default = router;
exports["default"] = _default;