'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _scheduleServices = _interopRequireDefault(require("../services/scheduleServices"));
var scheduleControllers = {
  getPropertiesClinic: function () {
    var _getPropertiesClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$scheduleServic, status, message, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _scheduleServices["default"].getPropertiesClinic(req.params.id);
          case 3:
            _yield$scheduleServic = _context.sent;
            status = _yield$scheduleServic.status;
            message = _yield$scheduleServic.message;
            data = _yield$scheduleServic.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            _winston["default"].schedule.error(_context.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    function getPropertiesClinic(_x, _x2) {
      return _getPropertiesClinic.apply(this, arguments);
    }
    return getPropertiesClinic;
  }(),
  getAllAppointments: function () {
    var _getAllAppointments = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$scheduleServic2, status, message, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _scheduleServices["default"].getAllAppointments(req.params.id, req.query.idDoctor, req.query.idPatient);
          case 3:
            _yield$scheduleServic2 = _context2.sent;
            status = _yield$scheduleServic2.status;
            message = _yield$scheduleServic2.message;
            data = _yield$scheduleServic2.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context2.next = 14;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            _winston["default"].schedule.error(_context2.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function getAllAppointments(_x3, _x4) {
      return _getAllAppointments.apply(this, arguments);
    }
    return getAllAppointments;
  }(),
  createAppointment: function () {
    var _createAppointment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _yield$scheduleServic3, status, message, data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _scheduleServices["default"].createAppointment(req.params.id, req.body);
          case 3:
            _yield$scheduleServic3 = _context3.sent;
            status = _yield$scheduleServic3.status;
            message = _yield$scheduleServic3.message;
            data = _yield$scheduleServic3.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context3.next = 14;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            _winston["default"].schedule.error(_context3.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    function createAppointment(_x5, _x6) {
      return _createAppointment.apply(this, arguments);
    }
    return createAppointment;
  }(),
  updateAppointment: function () {
    var _updateAppointment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _yield$scheduleServic4, status, message, data;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _scheduleServices["default"].updateAppointment(req.params.id, req.query.idAppointment, req.body);
          case 3:
            _yield$scheduleServic4 = _context4.sent;
            status = _yield$scheduleServic4.status;
            message = _yield$scheduleServic4.message;
            data = _yield$scheduleServic4.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context4.next = 14;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            _winston["default"].schedule.error(_context4.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    function updateAppointment(_x7, _x8) {
      return _updateAppointment.apply(this, arguments);
    }
    return updateAppointment;
  }(),
  deleteAppointment: function () {
    var _deleteAppointment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var _yield$scheduleServic5, status, message, data;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _scheduleServices["default"].deleteAppointment(req.params.id, req.query.idAppointment);
          case 3:
            _yield$scheduleServic5 = _context5.sent;
            status = _yield$scheduleServic5.status;
            message = _yield$scheduleServic5.message;
            data = _yield$scheduleServic5.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context5.next = 14;
            break;
          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            _winston["default"].schedule.error(_context5.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 10]]);
    }));
    function deleteAppointment(_x9, _x10) {
      return _deleteAppointment.apply(this, arguments);
    }
    return deleteAppointment;
  }()
};
var _default = scheduleControllers;
exports["default"] = _default;