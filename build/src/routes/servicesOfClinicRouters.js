"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _servicesOfClinicControllers = _interopRequireDefault(require("../controllers/servicesOfClinicControllers"));
var _clinicMiddleware = _interopRequireDefault(require("../middleware/clinicMiddleware"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var router = _express["default"].Router();

// id là idClinic - id của phòng khám
router.get('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _servicesOfClinicControllers["default"].getServicesClinic);
router.post('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _servicesOfClinicControllers["default"].createServices);
router.put('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _servicesOfClinicControllers["default"].updateService);
router["delete"]('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _servicesOfClinicControllers["default"].deleteService);
var _default = router;
exports["default"] = _default;