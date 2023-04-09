"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _treatmentHistoryControllers = _interopRequireDefault(require("../controllers/treatmentHistoryControllers"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var _patientMiddleware = _interopRequireDefault(require("../middleware/patientMiddleware"));
var router = _express["default"].Router();
router.get('/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _treatmentHistoryControllers["default"].getTreatmentHistory);
router.post('/createHistory/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _treatmentHistoryControllers["default"].createTreatmentHistory);
router.put('/updateHistory/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _treatmentHistoryControllers["default"].updateTreatmentHistory);
router["delete"]('/deleteHistory/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _treatmentHistoryControllers["default"].deleteTreatmentHistory);
var _default = router;
exports["default"] = _default;