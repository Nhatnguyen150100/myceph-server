"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var db = require("../models");
var clinicMiddleware = {
  checkClinicExists: function () {
    var _checkClinicExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var idClinic, clinic;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            idClinic = req.params.id;
            _context.next = 4;
            return db.Clinic.findOne({
              where: {
                id: idClinic
              }
            });
          case 4:
            clinic = _context.sent;
            if (!clinic) {
              _context.next = 10;
              break;
            }
            req.clinic = clinic;
            next();
            _context.next = 11;
            break;
          case 10:
            return _context.abrupt("return", res.status(404).json({
              message: 'clinic is not found'
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
    function checkClinicExists(_x, _x2, _x3) {
      return _checkClinicExists.apply(this, arguments);
    }
    return checkClinicExists;
  }(),
  checkClinicDontExists: function () {
    var _checkClinicDontExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      var nameClinic, clinic;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            nameClinic = req.body.nameClinic;
            _context2.next = 4;
            return db.Clinic.findOne({
              where: {
                nameClinic: nameClinic
              }
            });
          case 4:
            clinic = _context2.sent;
            if (clinic) {
              _context2.next = 9;
              break;
            }
            next();
            _context2.next = 10;
            break;
          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: 'Name of clinic is already in use'
            }));
          case 10:
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              message: 'server error'
            }));
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    function checkClinicDontExists(_x4, _x5, _x6) {
      return _checkClinicDontExists.apply(this, arguments);
    }
    return checkClinicDontExists;
  }()
};
var _default = clinicMiddleware;
exports["default"] = _default;