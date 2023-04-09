'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _statusOfClinicServices = _interopRequireDefault(require("../services/statusOfClinicServices"));
var statusOfClinicControllers = {
  getStatusClinic: function () {
    var _getStatusClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$statusOfClinic, status, message, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _statusOfClinicServices["default"].getStatusClinic(req.params.id);
          case 3:
            _yield$statusOfClinic = _context.sent;
            status = _yield$statusOfClinic.status;
            message = _yield$statusOfClinic.message;
            data = _yield$statusOfClinic.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            _winston["default"].statusOfClinic.error(_context.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    function getStatusClinic(_x, _x2) {
      return _getStatusClinic.apply(this, arguments);
    }
    return getStatusClinic;
  }(),
  createStatus: function () {
    var _createStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$statusOfClinic2, status, message, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _statusOfClinicServices["default"].createStatus(req.params.id, req.body);
          case 3:
            _yield$statusOfClinic2 = _context2.sent;
            status = _yield$statusOfClinic2.status;
            message = _yield$statusOfClinic2.message;
            data = _yield$statusOfClinic2.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context2.next = 14;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            _winston["default"].statusOfClinic.error(_context2.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function createStatus(_x3, _x4) {
      return _createStatus.apply(this, arguments);
    }
    return createStatus;
  }(),
  updateStatus: function () {
    var _updateStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _yield$statusOfClinic3, status, message, data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _statusOfClinicServices["default"].updateStatus(req.params.id, req.body.idStatus, req.body);
          case 3:
            _yield$statusOfClinic3 = _context3.sent;
            status = _yield$statusOfClinic3.status;
            message = _yield$statusOfClinic3.message;
            data = _yield$statusOfClinic3.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context3.next = 14;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            _winston["default"].statusOfClinic.error(_context3.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    function updateStatus(_x5, _x6) {
      return _updateStatus.apply(this, arguments);
    }
    return updateStatus;
  }(),
  deleteStatus: function () {
    var _deleteStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _yield$statusOfClinic4, status, message, data;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _statusOfClinicServices["default"].deleteStatus(req.params.id, req.query.idStatus);
          case 3:
            _yield$statusOfClinic4 = _context4.sent;
            status = _yield$statusOfClinic4.status;
            message = _yield$statusOfClinic4.message;
            data = _yield$statusOfClinic4.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context4.next = 14;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            _winston["default"].statusOfClinic.error(_context4.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    function deleteStatus(_x7, _x8) {
      return _deleteStatus.apply(this, arguments);
    }
    return deleteStatus;
  }()
};
var _default = statusOfClinicControllers;
exports["default"] = _default;