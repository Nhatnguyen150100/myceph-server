"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _scheduleControllers = _interopRequireDefault(require("../controllers/scheduleControllers"));
var _clinicMiddleware = _interopRequireDefault(require("../middleware/clinicMiddleware"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var router = _express["default"].Router();
router.get('/getPropertiesClinic/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _scheduleControllers["default"].getPropertiesClinic);
router.get('/getAllAppointments/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _scheduleControllers["default"].getAllAppointments);
router.post('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _scheduleControllers["default"].createAppointment);
router.put('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _scheduleControllers["default"].updateAppointment);
router["delete"]('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _scheduleControllers["default"].deleteAppointment);
var _default = router;
exports["default"] = _default;