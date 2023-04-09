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
var treatmentPlanServices = {
  getSelectedTreatmentPlan: function getSelectedTreatmentPlan(idPatient) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var selectedTreatmentPlan;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return db.TreatmentPlan.findOne({
                where: {
                  idTreatmentPlan: idPatient,
                  selected: true
                }
              });
            case 3:
              selectedTreatmentPlan = _context.sent;
              if (selectedTreatmentPlan) {
                resolve({
                  status: 200,
                  message: 'get selected treatment plan successfully',
                  data: selectedTreatmentPlan
                });
              } else {
                resolve({
                  status: 200,
                  message: 'get selected treatment plan failed',
                  data: {}
                });
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              _winston["default"].treatmentPlan.error(_context.t0);
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
  getAllTreatmentPlan: function getAllTreatmentPlan(idPatient) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var allTreatmentPlan;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return db.TreatmentPlan.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                  idTreatmentPlan: idPatient
                }
              });
            case 3:
              allTreatmentPlan = _context2.sent;
              if (allTreatmentPlan.length >= 0) {
                resolve({
                  status: 200,
                  message: 'get all treatment plan successfully',
                  data: allTreatmentPlan
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get all treatment plan failed',
                  data: {}
                });
              }
              _context2.next = 11;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              _winston["default"].treatmentPlan.error(_context2.t0);
              reject(_context2.t0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }));
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  },
  createTreatmentPlan: function createTreatmentPlan(idPatient, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
        var treatmentPlan, allTreatmentPlan;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              if (!data.selected) {
                _context3.next = 4;
                break;
              }
              _context3.next = 4;
              return db.TreatmentPlan.update({
                selected: false
              }, {
                where: {
                  idTreatmentPlan: idPatient
                }
              });
            case 4:
              _context3.next = 6;
              return db.TreatmentPlan.create({
                idTreatmentPlan: idPatient,
                plan: data.plan,
                selected: data.selected
              });
            case 6:
              treatmentPlan = _context3.sent;
              if (!treatmentPlan) {
                _context3.next = 14;
                break;
              }
              _context3.next = 10;
              return db.TreatmentPlan.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                  idTreatmentPlan: idPatient
                }
              });
            case 10:
              allTreatmentPlan = _context3.sent;
              resolve({
                status: 200,
                message: 'create treatment plan successfully',
                data: allTreatmentPlan
              });
              _context3.next = 15;
              break;
            case 14:
              resolve({
                status: 202,
                message: 'create treatment plan failed',
                data: null
              });
            case 15:
              _context3.next = 21;
              break;
            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](0);
              _winston["default"].treatmentPlan.error(_context3.t0);
              reject(_context3.t0);
            case 21:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 17]]);
      }));
      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  },
  updateTreatmentPlan: function updateTreatmentPlan(idPatient, idPlan, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
        var dataUpdate, newPlan, allTreatmentPlan;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              if (!data.selected) {
                _context4.next = 4;
                break;
              }
              _context4.next = 4;
              return db.TreatmentPlan.update({
                selected: false
              }, {
                where: {
                  idTreatmentPlan: idPatient
                }
              });
            case 4:
              dataUpdate = {
                plan: data.plan,
                selected: data.selected
              };
              _context4.next = 7;
              return db.TreatmentPlan.update(dataUpdate, {
                where: {
                  id: idPlan
                }
              });
            case 7:
              newPlan = _context4.sent;
              if (!newPlan) {
                _context4.next = 15;
                break;
              }
              _context4.next = 11;
              return db.TreatmentPlan.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                  idTreatmentPlan: idPatient
                }
              });
            case 11:
              allTreatmentPlan = _context4.sent;
              resolve({
                status: 200,
                message: 'update plan successfully',
                data: allTreatmentPlan
              });
              _context4.next = 16;
              break;
            case 15:
              resolve({
                status: 202,
                message: 'update plan failed',
                data: null
              });
            case 16:
              _context4.next = 22;
              break;
            case 18:
              _context4.prev = 18;
              _context4.t0 = _context4["catch"](0);
              _winston["default"].treatmentPlan.error(_context4.t0);
              reject(_context4.t0);
            case 22:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 18]]);
      }));
      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  },
  deletePlane: function deletePlane(idPatient, idPlan) {
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
        var deletePlan, allTreatmentPlan;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return db.TreatmentPlan.destroy({
                where: {
                  id: idPlan
                },
                force: true
              });
            case 3:
              deletePlan = _context5.sent;
              if (!deletePlan) {
                _context5.next = 11;
                break;
              }
              _context5.next = 7;
              return db.TreatmentPlan.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                  idTreatmentPlan: idPatient
                }
              });
            case 7:
              allTreatmentPlan = _context5.sent;
              resolve({
                status: 200,
                message: 'Delete plan successfully',
                data: allTreatmentPlan
              });
              _context5.next = 12;
              break;
            case 11:
              resolve({
                status: 200,
                message: 'Delete plan failed',
                data: null
              });
            case 12:
              _context5.next = 18;
              break;
            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](0);
              _winston["default"].treatmentPlan.error(_context5.t0);
              reject(_context5.t0);
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 14]]);
      }));
      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }());
  }
};
var _default = treatmentPlanServices;
exports["default"] = _default;