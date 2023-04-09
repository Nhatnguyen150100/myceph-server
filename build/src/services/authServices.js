'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _winston = _interopRequireDefault(require("../config/winston"));
var db = require("../models");
var authServices = {
  login: function login(email, password) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var doctor, validPassword;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return db.Doctor.findOne({
                where: {
                  email: email
                },
                raw: true
              });
            case 3:
              doctor = _context.sent;
              if (!doctor || Object.keys(doctor).length === 0) {
                resolve({
                  data: null,
                  message: 'Could not find your email'
                });
              }
              _context.next = 7;
              return _bcrypt["default"].compare(password, doctor.password);
            case 7:
              validPassword = _context.sent;
              if (!validPassword) {
                resolve({
                  data: null,
                  message: 'password wrong'
                });
              } else {
                delete doctor.password;
                resolve({
                  data: doctor,
                  message: 'login successfully'
                });
              }
              _context.next = 15;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              _winston["default"].doctor.error(_context.t0);
              reject(_context.t0);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 11]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  logout: function logout(idDoctor, refreshToken) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var token;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return db.RefreshToken.findOne({
                where: {
                  idDoctor: idDoctor,
                  token: refreshToken
                }
              });
            case 3:
              token = _context2.sent;
              if (!token) {
                _context2.next = 10;
                break;
              }
              _context2.next = 7;
              return db.RefreshToken.update({
                isActive: false
              }, {
                where: {
                  idDoctor: idDoctor,
                  token: refreshToken
                },
                force: true
              });
            case 7:
              resolve({
                status: 200,
                message: 'logout successfully'
              });
              _context2.next = 11;
              break;
            case 10:
              resolve({
                status: 202,
                message: 'logout failed'
              });
            case 11:
              _context2.next = 17;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              _winston["default"].token.error(_context2.t0);
              reject(_context2.t0);
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 13]]);
      }));
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
};
var _default = authServices;
exports["default"] = _default;