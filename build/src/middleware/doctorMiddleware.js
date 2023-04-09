"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var db = require("../models");
var doctorMiddleware = {
  checkDoctorExistsById: function () {
    var _checkDoctorExistsById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var idDoctor, doctor;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            idDoctor = req.params.id;
            _context.next = 4;
            return db.Doctor.findOne({
              where: {
                id: idDoctor
              }
            });
          case 4:
            doctor = _context.sent;
            if (!doctor) {
              _context.next = 10;
              break;
            }
            req.doctor = doctor;
            next();
            _context.next = 11;
            break;
          case 10:
            return _context.abrupt("return", res.status(404).json({
              message: 'Email doctor is not found'
            }));
          case 11:
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              message: 'server error'
            }));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 13]]);
    }));
    function checkDoctorExistsById(_x, _x2, _x3) {
      return _checkDoctorExistsById.apply(this, arguments);
    }
    return checkDoctorExistsById;
  }(),
  checkDoctorExistsByIdFromBody: function () {
    var _checkDoctorExistsByIdFromBody = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      var idDoctor, doctor;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            idDoctor = req.body.idDoctor;
            if (idDoctor) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return", res.status(404).json({
              message: 'id doctor is not found'
            }));
          case 4:
            _context2.next = 6;
            return db.Doctor.findOne({
              where: {
                id: idDoctor
              }
            });
          case 6:
            doctor = _context2.sent;
            if (!doctor) {
              _context2.next = 12;
              break;
            }
            req.doctor = doctor;
            next();
            _context2.next = 13;
            break;
          case 12:
            return _context2.abrupt("return", res.status(404).json({
              message: 'doctor is not found'
            }));
          case 13:
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              message: 'server error'
            }));
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 15]]);
    }));
    function checkDoctorExistsByIdFromBody(_x4, _x5, _x6) {
      return _checkDoctorExistsByIdFromBody.apply(this, arguments);
    }
    return checkDoctorExistsByIdFromBody;
  }(),
  checkDoctorExistsByEmail: function () {
    var _checkDoctorExistsByEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
      var emailDoctor, doctor;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            emailDoctor = req.params.email;
            _context3.next = 4;
            return db.Doctor.findOne({
              where: {
                email: emailDoctor
              }
            });
          case 4:
            doctor = _context3.sent;
            if (!doctor) {
              _context3.next = 10;
              break;
            }
            req.doctor = doctor;
            next();
            _context3.next = 11;
            break;
          case 10:
            return _context3.abrupt("return", res.status(404).json({
              message: 'Email doctor is not found'
            }));
          case 11:
            _context3.next = 16;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              message: 'server error'
            }));
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    function checkDoctorExistsByEmail(_x7, _x8, _x9) {
      return _checkDoctorExistsByEmail.apply(this, arguments);
    }
    return checkDoctorExistsByEmail;
  }(),
  checkDoctorDontExistsByEmail: function () {
    var _checkDoctorDontExistsByEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
      var emailDoctor, doctor;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            emailDoctor = req.body.email;
            _context4.next = 4;
            return db.Doctor.findOne({
              where: {
                email: emailDoctor
              }
            });
          case 4:
            doctor = _context4.sent;
            if (doctor) {
              _context4.next = 9;
              break;
            }
            next();
            _context4.next = 10;
            break;
          case 9:
            return _context4.abrupt("return", res.status(404).json({
              message: 'Email doctor is already exists'
            }));
          case 10:
            _context4.next = 15;
            break;
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).json({
              message: 'server error'
            }));
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 12]]);
    }));
    function checkDoctorDontExistsByEmail(_x10, _x11, _x12) {
      return _checkDoctorDontExistsByEmail.apply(this, arguments);
    }
    return checkDoctorDontExistsByEmail;
  }()
};
var _default = doctorMiddleware;
exports["default"] = _default;