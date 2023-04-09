'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _patientServices = _interopRequireDefault(require("../services/patientServices"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var patientController = {
  createPatient: function () {
    var _createPatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$patientService, status, message;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _patientServices["default"].createNewPatient(req.body);
          case 3:
            _yield$patientService = _context.sent;
            status = _yield$patientService.status;
            message = _yield$patientService.message;
            res.status(status).json({
              message: message
            });
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            _winston["default"].patient.error(_context.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    function createPatient(_x, _x2) {
      return _createPatient.apply(this, arguments);
    }
    return createPatient;
  }(),
  getPatient: function () {
    var _getPatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var updateBydoctor, patient, diagnose, selectedPlan;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            try {
              updateBydoctor = req.updateBydoctor;
              patient = req.patient;
              diagnose = req.diagnose;
              selectedPlan = req.selectedPlan;
              res.status(200).json({
                message: 'get patient information successfully',
                data: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, patient), diagnose), selectedPlan), updateBydoctor)
              });
            } catch (error) {
              _winston["default"].patient.error(error);
              res.status(500).json({
                message: 'server error'
              });
            }
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function getPatient(_x3, _x4) {
      return _getPatient.apply(this, arguments);
    }
    return getPatient;
  }(),
  getSharedPatientOfDoctor: function () {
    var _getSharedPatientOfDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _yield$patientService2, status, message, data, count;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _patientServices["default"].getSharedPatientOfDoctor(req.params.id, req.query.page, req.query.pageSize, req.query.nameSearch);
          case 3:
            _yield$patientService2 = _context3.sent;
            status = _yield$patientService2.status;
            message = _yield$patientService2.message;
            data = _yield$patientService2.data;
            count = _yield$patientService2.count;
            res.status(status).json({
              message: message,
              data: data,
              count: count
            });
            _context3.next = 15;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            _winston["default"].patient.error(_context3.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    function getSharedPatientOfDoctor(_x5, _x6) {
      return _getSharedPatientOfDoctor.apply(this, arguments);
    }
    return getSharedPatientOfDoctor;
  }(),
  getSharedPatientOfDoctorInClinic: function () {
    var _getSharedPatientOfDoctorInClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _yield$patientService3, status, message, data, count;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _patientServices["default"].getSharedPatientOfDoctorInClinic(req.params.id, req.query.idClinic, req.query.page, req.query.pageSize, req.query.nameSearch);
          case 3:
            _yield$patientService3 = _context4.sent;
            status = _yield$patientService3.status;
            message = _yield$patientService3.message;
            data = _yield$patientService3.data;
            count = _yield$patientService3.count;
            res.status(status).json({
              message: message,
              data: data,
              count: count
            });
            _context4.next = 15;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            _winston["default"].patient.error(_context4.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 11]]);
    }));
    function getSharedPatientOfDoctorInClinic(_x7, _x8) {
      return _getSharedPatientOfDoctorInClinic.apply(this, arguments);
    }
    return getSharedPatientOfDoctorInClinic;
  }(),
  getPatientListForDoctor: function () {
    var _getPatientListForDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var _yield$patientService4, status, message, data, count;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _patientServices["default"].getPatientListForDoctor(req.params.id, req.query.page, req.query.pageSize, req.query.nameSearch);
          case 3:
            _yield$patientService4 = _context5.sent;
            status = _yield$patientService4.status;
            message = _yield$patientService4.message;
            data = _yield$patientService4.data;
            count = _yield$patientService4.count;
            res.status(status).json({
              message: message,
              data: data,
              count: count
            });
            _context5.next = 15;
            break;
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            _winston["default"].patient.error(_context5.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 15:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 11]]);
    }));
    function getPatientListForDoctor(_x9, _x10) {
      return _getPatientListForDoctor.apply(this, arguments);
    }
    return getPatientListForDoctor;
  }(),
  getPatientListForClinic: function () {
    var _getPatientListForClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var _yield$patientService5, status, message, data, count;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _patientServices["default"].getPatientListForClinic(req.params.id, req.query.page, req.query.pageSize, req.query.nameSearch);
          case 3:
            _yield$patientService5 = _context6.sent;
            status = _yield$patientService5.status;
            message = _yield$patientService5.message;
            data = _yield$patientService5.data;
            count = _yield$patientService5.count;
            res.status(status).json({
              message: message,
              data: data,
              count: count
            });
            _context6.next = 15;
            break;
          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);
            _winston["default"].patient.error(_context6.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 11]]);
    }));
    function getPatientListForClinic(_x11, _x12) {
      return _getPatientListForClinic.apply(this, arguments);
    }
    return getPatientListForClinic;
  }(),
  deletePatient: function () {
    var _deletePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var _yield$patientService6, status, message;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _patientServices["default"].deletePatient(req.params.id);
          case 3:
            _yield$patientService6 = _context7.sent;
            status = _yield$patientService6.status;
            message = _yield$patientService6.message;
            res.status(status).json({
              message: message
            });
            _context7.next = 13;
            break;
          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            _winston["default"].patient.error(_context7.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 9]]);
    }));
    function deletePatient(_x13, _x14) {
      return _deletePatient.apply(this, arguments);
    }
    return deletePatient;
  }(),
  updateInformationPatient: function () {
    var _updateInformationPatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
      var _yield$patientService7, status, message, data;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _patientServices["default"].updateInformationPatient(req.params.id, req.body);
          case 3:
            _yield$patientService7 = _context8.sent;
            status = _yield$patientService7.status;
            message = _yield$patientService7.message;
            data = _yield$patientService7.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context8.next = 14;
            break;
          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](0);
            _winston["default"].patient.error(_context8.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 10]]);
    }));
    function updateInformationPatient(_x15, _x16) {
      return _updateInformationPatient.apply(this, arguments);
    }
    return updateInformationPatient;
  }()
};
var _default = patientController;
exports["default"] = _default;