"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _listOfIssueController = _interopRequireDefault(require("../controllers/listOfIssueController"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var _patientMiddleware = _interopRequireDefault(require("../middleware/patientMiddleware"));
var router = _express["default"].Router();
router.get('/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _listOfIssueController["default"].getListOfIssue);
router.post('/createIssue/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _listOfIssueController["default"].createIssue);
router.put('/updateIssue/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _listOfIssueController["default"].updateIssue);
router["delete"]('/deleteIssue/:id', _middlewareController["default"].verifyToken, _patientMiddleware["default"].checkPatient, _listOfIssueController["default"].deleteIssue);
var _default = router;
exports["default"] = _default;