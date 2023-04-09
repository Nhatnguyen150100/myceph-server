'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _models = _interopRequireDefault(require("../models"));
var statusOfClinicServices = {
  getStatusClinic: function getStatusClinic(idClinic) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var listStatus;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _models["default"].StatusOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicStatus: idClinic
                }
              });
            case 3:
              listStatus = _context.sent;
              if (listStatus.length >= 0) {
                resolve({
                  status: 200,
                  message: 'get status from clinic successfully',
                  data: listStatus
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get status from clinic failed',
                  data: []
                });
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              _winston["default"].statusOfClinic.error(_context.t0);
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
  createStatus: function createStatus(idClinic, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var createStatusClinic, listStatus;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _models["default"].StatusOfClinic.create({
                idClinicStatus: idClinic,
                nameStatus: data.nameStatus,
                colorStatus: data.colorStatus
              });
            case 3:
              createStatusClinic = _context2.sent;
              if (!createStatusClinic) {
                _context2.next = 11;
                break;
              }
              _context2.next = 7;
              return _models["default"].StatusOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicStatus: idClinic
                }
              });
            case 7:
              listStatus = _context2.sent;
              resolve({
                status: 200,
                message: 'create status successfully',
                data: listStatus
              });
              _context2.next = 12;
              break;
            case 11:
              resolve({
                status: 202,
                message: 'create status failed',
                data: []
              });
            case 12:
              _context2.next = 18;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              _winston["default"].statusOfClinic.error(_context2.t0);
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
  updateStatus: function updateStatus(idClinic, idStatus, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
        var updateStatusClinic, listStatus;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _models["default"].StatusOfClinic.update({
                nameStatus: data.nameStatus,
                colorStatus: data.colorStatus
              }, {
                where: {
                  id: idStatus
                }
              });
            case 3:
              updateStatusClinic = _context3.sent;
              if (!updateStatusClinic) {
                _context3.next = 11;
                break;
              }
              _context3.next = 7;
              return _models["default"].StatusOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicStatus: idClinic
                }
              });
            case 7:
              listStatus = _context3.sent;
              resolve({
                status: 200,
                message: 'update status successfully',
                data: listStatus
              });
              _context3.next = 12;
              break;
            case 11:
              resolve({
                status: 202,
                message: 'update status failed',
                data: []
              });
            case 12:
              _context3.next = 18;
              break;
            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              _winston["default"].statusOfClinic.error(_context3.t0);
              reject(_context3.t0);
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 14]]);
      }));
      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  },
  deleteStatus: function deleteStatus(idClinic, idStatus) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
        var checkAppointmentWithStatus, deleteStatusClinic, listStatus;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _models["default"].Schedule.findOne({
                where: {
                  idStatus: idStatus
                }
              });
            case 3:
              checkAppointmentWithStatus = _context4.sent;
              if (!checkAppointmentWithStatus) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", resolve({
                status: 202,
                message: "This status cannot be deleted because it is being used to create an appointment"
              }));
            case 6:
              _context4.next = 8;
              return _models["default"].StatusOfClinic.destroy({
                where: {
                  id: idStatus
                },
                force: true
              });
            case 8:
              deleteStatusClinic = _context4.sent;
              if (!deleteStatusClinic) {
                _context4.next = 16;
                break;
              }
              _context4.next = 12;
              return _models["default"].StatusOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicStatus: idClinic
                }
              });
            case 12:
              listStatus = _context4.sent;
              resolve({
                status: 200,
                message: 'delete status successfully',
                data: listStatus
              });
              _context4.next = 17;
              break;
            case 16:
              resolve({
                status: 202,
                message: 'delete status failed',
                data: []
              });
            case 17:
              _context4.next = 23;
              break;
            case 19:
              _context4.prev = 19;
              _context4.t0 = _context4["catch"](0);
              _winston["default"].statusOfClinic.error(_context4.t0);
              reject(_context4.t0);
            case 23:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 19]]);
      }));
      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
};
var _default = statusOfClinicServices;
exports["default"] = _default;