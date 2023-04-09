"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _roomOfClinicControllers = _interopRequireDefault(require("../controllers/roomOfClinicControllers"));
var _clinicMiddleware = _interopRequireDefault(require("../middleware/clinicMiddleware"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var router = _express["default"].Router();

// id là idClinic - id của phòng khám
router.get('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _roomOfClinicControllers["default"].getRoomClinic);
router.post('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _roomOfClinicControllers["default"].createRoom);
router.put('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _roomOfClinicControllers["default"].updateRoom);
router["delete"]('/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _roomOfClinicControllers["default"].deleteRoom);
var _default = router;
exports["default"] = _default;