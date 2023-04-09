"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _treatmentPlanControllers = _interopRequireDefault(require("../controllers/treatmentPlanControllers"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var _patientMiddleware = _interopRequireDefault(require("../middleware/patientMiddleware"));
var router = _express["default"].Router();
router.get('/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _treatmentPlanControllers["default"].getAllTreatmentPlan);
router.get('/getSelectedTreatmentPlan/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _treatmentPlanControllers["default"].getSelectedTreatmentPlan);
router.post('/createPlan/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _treatmentPlanControllers["default"].createTreatmentPlan);
router.put('/updatePlan/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _treatmentPlanControllers["default"].updateTreatmentPlan);
router["delete"]('/deletePlan/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _treatmentPlanControllers["default"].deleteTreatmentPlan);
var _default = router;
exports["default"] = _default;