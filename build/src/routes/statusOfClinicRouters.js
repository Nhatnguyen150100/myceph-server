"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _statusOfClinicControllers = _interopRequireDefault(require("../controllers/statusOfClinicControllers"));
var _clinicMiddleware = _interopRequireDefault(require("../middleware/clinicMiddleware"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var router = _express["default"].Router();

// id là idClinic - id của phòng khám
router.get('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _statusOfClinicControllers["default"].getStatusClinic);
router.post('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _statusOfClinicControllers["default"].createStatus);
router.put('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _statusOfClinicControllers["default"].updateStatus);
router["delete"]('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _statusOfClinicControllers["default"].deleteStatus);
var _default = router;
exports["default"] = _default;