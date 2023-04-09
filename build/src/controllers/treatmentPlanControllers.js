'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _require = require("../services/patientServices"),
  patientServices = _require["default"];
var _require2 = require("../services/treatmentPlanServices"),
  treatmentPlanServices = _require2["default"];
var treatmentPlanControllers = {
  createTreatmentPlan: function () {
    var _createTreatmentPlan = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$treatmentPlanS, status, message, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return treatmentPlanServices.createTreatmentPlan(req.params.id, req.body);
          case 3:
            _yield$treatmentPlanS = _context.sent;
            status = _yield$treatmentPlanS.status;
            message = _yield$treatmentPlanS.message;
            data = _yield$treatmentPlanS.data;
            patientServices.saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
              res.status(status).json({
                message: message,
                data: data
              });
            });
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            _winston["default"].treatmentPlan.error(_context.t0);
            res.status(500).json({
              message: _context.t0
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    function createTreatmentPlan(_x, _x2) {
      return _createTreatmentPlan.apply(this, arguments);
    }
    return createTreatmentPlan;
  }(),
  getSelectedTreatmentPlan: function () {
    var _getSelectedTreatmentPlan = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$treatmentPlanS2, status, message, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return treatmentPlanServices.getSelectedTreatmentPlan(req.params.id);
          case 3:
            _yield$treatmentPlanS2 = _context2.sent;
            status = _yield$treatmentPlanS2.status;
            message = _yield$treatmentPlanS2.message;
            data = _yield$treatmentPlanS2.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context2.next = 14;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            _winston["default"].treatmentPlan.error(_context2.t0);
            res.status(500).json({
              message: _context2.t0
            });
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function getSelectedTreatmentPlan(_x3, _x4) {
      return _getSelectedTreatmentPlan.apply(this, arguments);
    }
    return getSelectedTreatmentPlan;
  }(),
  getAllTreatmentPlan: function () {
    var _getAllTreatmentPlan = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _yield$treatmentPlanS3, status, message, data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return treatmentPlanServices.getAllTreatmentPlan(req.params.id);
          case 3:
            _yield$treatmentPlanS3 = _context3.sent;
            status = _yield$treatmentPlanS3.status;
            message = _yield$treatmentPlanS3.message;
            data = _yield$treatmentPlanS3.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context3.next = 14;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            _winston["default"].treatmentPlan.error(_context3.t0);
            res.status(500).json({
              message: _context3.t0
            });
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    function getAllTreatmentPlan(_x5, _x6) {
      return _getAllTreatmentPlan.apply(this, arguments);
    }
    return getAllTreatmentPlan;
  }(),
  updateTreatmentPlan: function () {
    var _updateTreatmentPlan = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _yield$treatmentPlanS4, status, message, data;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return treatmentPlanServices.updateTreatmentPlan(req.params.id, req.query.idPlan, req.body);
          case 3:
            _yield$treatmentPlanS4 = _context4.sent;
            status = _yield$treatmentPlanS4.status;
            message = _yield$treatmentPlanS4.message;
            data = _yield$treatmentPlanS4.data;
            patientServices.saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
              res.status(status).json({
                message: message,
                data: data
              });
            });
            _context4.next = 14;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            _winston["default"].treatmentPlan.error(_context4.t0);
            res.status(500).json({
              message: _context4.t0
            });
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    function updateTreatmentPlan(_x7, _x8) {
      return _updateTreatmentPlan.apply(this, arguments);
    }
    return updateTreatmentPlan;
  }(),
  deleteTreatmentPlan: function () {
    var _deleteTreatmentPlan = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var _yield$treatmentPlanS5, status, message, data;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return treatmentPlanServices.deletePlane(req.params.id, req.query.idPlan);
          case 3:
            _yield$treatmentPlanS5 = _context5.sent;
            status = _yield$treatmentPlanS5.status;
            message = _yield$treatmentPlanS5.message;
            data = _yield$treatmentPlanS5.data;
            patientServices.saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
              res.status(status).json({
                message: message,
                data: data
              });
            });
            _context5.next = 14;
            break;
          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            _winston["default"].treatmentPlan.error(_context5.t0);
            res.status(500).json({
              message: _context5.t0
            });
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 10]]);
    }));
    function deleteTreatmentPlan(_x9, _x10) {
      return _deleteTreatmentPlan.apply(this, arguments);
    }
    return deleteTreatmentPlan;
  }()
};
var _default = treatmentPlanControllers;
exports["default"] = _default;