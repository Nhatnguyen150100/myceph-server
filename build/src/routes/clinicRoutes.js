"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _clinicControllers = _interopRequireDefault(require("../controllers/clinicControllers"));
var _clinicMiddleware = _interopRequireDefault(require("../middleware/clinicMiddleware"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var router = _express["default"].Router();
router.get('/', _middlewareController["default"].verifyToken, _clinicControllers["default"].getAllClinic);
router.post('/createClinic/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicDontExists, _clinicControllers["default"].createNewClinic);
router.get('/getAllDoctorFromClinic/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _clinicControllers["default"].getAllDoctorInClinic);
router.get('/getInformationClinic/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _clinicControllers["default"].getInformationClinic);
router.put('/updateInformationClinic/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _clinicControllers["default"].updateInformationClinic);
router.post('/addDoctorToClinic/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _clinicControllers["default"].addDoctorToClinic);
router.put('/updateRoleOfDoctor/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _clinicControllers["default"].updateRoleOfDoctor);
router["delete"]('/deleteDoctorFromClinic/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _clinicControllers["default"].deleteDoctorFromClinic);
router["delete"]('/deleteClinic/:id', _middlewareController["default"].verifyToken, _clinicMiddleware["default"].checkClinicExists, _clinicControllers["default"].deleteClinic);
var _default = router;
exports["default"] = _default;