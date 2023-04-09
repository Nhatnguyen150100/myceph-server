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
var listOfIssueServices = {
  getListOfIssue: function getListOfIssue(idPatient) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var listOfIssue;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return db.ListOfIssue.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                  idListOfIssue: idPatient
                }
              });
            case 3:
              listOfIssue = _context.sent;
              if (listOfIssue.length >= 0) {
                resolve({
                  status: 200,
                  message: 'get list of issues successfully',
                  data: listOfIssue
                });
              } else {
                resolve({
                  staus: 202,
                  message: 'get list of issues failed',
                  data: {}
                });
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              _winston["default"].listOfIssue.error(_context.t0);
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
  createIssue: function createIssue(idPatient, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var newIssue, listOfIssue;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return db.ListOfIssue.create({
                idListOfIssue: idPatient,
                issue: data.issue,
                treatmentObject: data.treatmentObject,
                treatmentMethod: data.treatmentMethod,
                priotized: data.priotized
              });
            case 3:
              newIssue = _context2.sent;
              if (!newIssue) {
                _context2.next = 11;
                break;
              }
              _context2.next = 7;
              return db.ListOfIssue.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                  idListOfIssue: idPatient
                }
              });
            case 7:
              listOfIssue = _context2.sent;
              resolve({
                status: 200,
                message: 'create issue successfully',
                data: listOfIssue
              });
              _context2.next = 12;
              break;
            case 11:
              resolve({
                status: 202,
                message: 'create issue failed',
                data: null
              });
            case 12:
              _context2.next = 18;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              _winston["default"].listOfIssue.error(_context2.t0);
              reject(_context2.t0);
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 14]]);
      }));
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  },
  updateIssue: function updateIssue(idPatient, idIssue, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
        var dataUpdate, newIssue, listOfIssue;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              dataUpdate = {
                issue: data.issue,
                treatmentObject: data.treatmentObject,
                treatmentMethod: data.treatmentMethod,
                priotized: data.priotized
              };
              _context3.next = 4;
              return db.ListOfIssue.update(dataUpdate, {
                where: {
                  id: idIssue
                }
              });
            case 4:
              newIssue = _context3.sent;
              if (!newIssue) {
                _context3.next = 12;
                break;
              }
              _context3.next = 8;
              return db.ListOfIssue.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                  idListOfIssue: idPatient
                }
              });
            case 8:
              listOfIssue = _context3.sent;
              resolve({
                status: 200,
                message: 'update issue successfully',
                data: listOfIssue
              });
              _context3.next = 13;
              break;
            case 12:
              resolve({
                status: 202,
                message: 'update issue failed',
                data: null
              });
            case 13:
              _context3.next = 19;
              break;
            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](0);
              _winston["default"].listOfIssue.error(_context3.t0);
              reject(_context3.t0);
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 15]]);
      }));
      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  },
  deleteIssue: function deleteIssue(idPatient, idIssue) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
        var deleteIssue, listOfIssue;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return db.ListOfIssue.destroy({
                where: {
                  id: idIssue
                },
                force: true
              });
            case 3:
              deleteIssue = _context4.sent;
              if (!deleteIssue) {
                _context4.next = 11;
                break;
              }
              _context4.next = 7;
              return db.ListOfIssue.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                  idListOfIssue: idPatient
                }
              });
            case 7:
              listOfIssue = _context4.sent;
              resolve({
                status: 200,
                message: 'Delete issue successfully',
                data: listOfIssue
              });
              _context4.next = 12;
              break;
            case 11:
              resolve({
                status: 200,
                message: 'Delete issue failed',
                data: null
              });
            case 12:
              _context4.next = 18;
              break;
            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              _winston["default"].listOfIssue.error(_context4.t0);
              reject(_context4.t0);
            case 18:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 14]]);
      }));
      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
};
var _default = listOfIssueServices;
exports["default"] = _default;