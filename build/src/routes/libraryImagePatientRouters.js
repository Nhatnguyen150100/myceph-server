"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _libraryImagePatientControllers = _interopRequireDefault(require("../controllers/libraryImagePatientControllers"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var _patientMiddleware = _interopRequireDefault(require("../middleware/patientMiddleware"));
var router = _express["default"].Router();
router.get('/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _libraryImagePatientControllers["default"].getListImage);
router.post('/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _libraryImagePatientControllers["default"].uploadImage);
router.put('/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _libraryImagePatientControllers["default"].updateImagePatient);
router.put('/updateArrayImage/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _libraryImagePatientControllers["default"].updateArrayImagePatient);
router["delete"]('/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _libraryImagePatientControllers["default"].deleteImagePatient);
var _default = router;
exports["default"] = _default;