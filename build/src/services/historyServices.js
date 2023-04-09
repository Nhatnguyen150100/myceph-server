'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var db = require("../models");
var historyServices = {
  getHistory: function getHistory(idPatient) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var history;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return db.History.findOne({
                where: {
                  idHistory: idPatient
                }
              });
            case 3:
              history = _context.sent;
              if (history) {
                resolve({
                  status: 200,
                  message: 'get history of patient successfully',
                  data: history
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get history of patient failed',
                  data: {}
                });
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              _winston["default"].history.error(_context.t0);
              reject(_context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  updateHistory: function updateHistory(idPatient, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var dataUpdate, updateNewHistory, newHistory;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dataUpdate = {
                dentalHistory: data.dentalHistory,
                medicalHistory: data.medicalHistory,
                cvmi: data.cvmi,
                otherMethodToEvaluate: data.otherMethodToEvaluate,
                respiration: data.respiration,
                habits: data.habits,
                familyHistory: data.familyHistory,
                compliance: data.compliance
              };
              _context2.next = 4;
              return db.History.update(dataUpdate, {
                where: {
                  idHistory: idPatient
                }
              });
            case 4:
              updateNewHistory = _context2.sent;
              if (!updateNewHistory) {
                _context2.next = 12;
                break;
              }
              _context2.next = 8;
              return db.History.findOne({
                where: {
                  idHistory: idPatient
                }
              });
            case 8:
              newHistory = _context2.sent;
              resolve({
                status: 200,
                message: 'updated history successfully',
                data: newHistory
              });
              _context2.next = 13;
              break;
            case 12:
              resolve({
                status: 202,
                message: 'update history failed',
                data: null
              });
            case 13:
              _context2.next = 19;
              break;
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              _winston["default"].history.error(_context2.t0);
              reject(_context2.t0);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 15]]);
      }));
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
};
var _default = historyServices;
exports["default"] = _default;