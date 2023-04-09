"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _historyControllers = _interopRequireDefault(require("../controllers/historyControllers"));
var _doctorMiddleware = _interopRequireDefault(require("../middleware/doctorMiddleware"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var _patientMiddleware = _interopRequireDefault(require("../middleware/patientMiddleware"));
var router = _express["default"].Router();
router.get('/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _historyControllers["default"].getHistory);
router.put('/updateHistory/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _doctorMiddleware["default"].checkDoctorExistsByIdFromBody, _historyControllers["default"].updateHistory);
var _default = router;
exports["default"] = _default;