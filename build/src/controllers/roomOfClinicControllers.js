'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _roomOfClinicServices = _interopRequireDefault(require("../services/roomOfClinicServices"));
var roomOfClinicControllers = {
  getRoomClinic: function () {
    var _getRoomClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$roomOfClinicSe, status, message, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _roomOfClinicServices["default"].getRoomClinic(req.params.id);
          case 3:
            _yield$roomOfClinicSe = _context.sent;
            status = _yield$roomOfClinicSe.status;
            message = _yield$roomOfClinicSe.message;
            data = _yield$roomOfClinicSe.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            _winston["default"].roomOfClinic.error(_context.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    function getRoomClinic(_x, _x2) {
      return _getRoomClinic.apply(this, arguments);
    }
    return getRoomClinic;
  }(),
  createRoom: function () {
    var _createRoom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$roomOfClinicSe2, status, message, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _roomOfClinicServices["default"].createRoom(req.params.id, req.body);
          case 3:
            _yield$roomOfClinicSe2 = _context2.sent;
            status = _yield$roomOfClinicSe2.status;
            message = _yield$roomOfClinicSe2.message;
            data = _yield$roomOfClinicSe2.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context2.next = 14;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            _winston["default"].roomOfClinic.error(_context2.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function createRoom(_x3, _x4) {
      return _createRoom.apply(this, arguments);
    }
    return createRoom;
  }(),
  updateRoom: function () {
    var _updateRoom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _yield$roomOfClinicSe3, status, message, data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _roomOfClinicServices["default"].updateRoom(req.params.id, req.body.idRoom, req.body);
          case 3:
            _yield$roomOfClinicSe3 = _context3.sent;
            status = _yield$roomOfClinicSe3.status;
            message = _yield$roomOfClinicSe3.message;
            data = _yield$roomOfClinicSe3.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context3.next = 14;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            _winston["default"].roomOfClinic.error(_context3.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    function updateRoom(_x5, _x6) {
      return _updateRoom.apply(this, arguments);
    }
    return updateRoom;
  }(),
  deleteRoom: function () {
    var _deleteRoom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _yield$roomOfClinicSe4, status, message, data;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _roomOfClinicServices["default"].deleteRoom(req.params.id, req.query.idRoom);
          case 3:
            _yield$roomOfClinicSe4 = _context4.sent;
            status = _yield$roomOfClinicSe4.status;
            message = _yield$roomOfClinicSe4.message;
            data = _yield$roomOfClinicSe4.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context4.next = 14;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            _winston["default"].roomOfClinic.error(_context4.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    function deleteRoom(_x7, _x8) {
      return _deleteRoom.apply(this, arguments);
    }
    return deleteRoom;
  }()
};
var _default = roomOfClinicControllers;
exports["default"] = _default;