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
var roomOfClinicServices = {
  getRoomClinic: function getRoomClinic(idClinic) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var listRoom;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _models["default"].RoomOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicRoom: idClinic
                }
              });
            case 3:
              listRoom = _context.sent;
              if (listRoom.length >= 0) {
                resolve({
                  status: 200,
                  message: 'get rooms from clinic successfully',
                  data: listRoom
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get rooms from clinic failed',
                  data: []
                });
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              _winston["default"].roomOfClinic.error(_context.t0);
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
  createRoom: function createRoom(idClinic, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var createRoomClinic, listRoom;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _models["default"].RoomOfClinic.create({
                idClinicRoom: idClinic,
                nameRoom: data.nameRoom,
                colorRoom: data.colorRoom
              });
            case 3:
              createRoomClinic = _context2.sent;
              if (!createRoomClinic) {
                _context2.next = 11;
                break;
              }
              _context2.next = 7;
              return _models["default"].RoomOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicRoom: idClinic
                }
              });
            case 7:
              listRoom = _context2.sent;
              resolve({
                status: 200,
                message: 'create room successfully',
                data: listRoom
              });
              _context2.next = 12;
              break;
            case 11:
              resolve({
                status: 202,
                message: 'create room failed',
                data: []
              });
            case 12:
              _context2.next = 18;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              _winston["default"].roomOfClinic.error(_context2.t0);
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
  updateRoom: function updateRoom(idClinic, idRoom, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
        var updateRoomClinic, listRoom;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _models["default"].RoomOfClinic.update({
                nameRoom: data.nameRoom,
                colorRoom: data.colorRoom
              }, {
                where: {
                  id: idRoom
                }
              });
            case 3:
              updateRoomClinic = _context3.sent;
              if (!updateRoomClinic) {
                _context3.next = 11;
                break;
              }
              _context3.next = 7;
              return _models["default"].RoomOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicRoom: idClinic
                }
              });
            case 7:
              listRoom = _context3.sent;
              resolve({
                status: 200,
                message: 'update room successfully',
                data: listRoom
              });
              _context3.next = 12;
              break;
            case 11:
              resolve({
                status: 202,
                message: 'update room failed',
                data: []
              });
            case 12:
              _context3.next = 18;
              break;
            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              _winston["default"].roomOfClinic.error(_context3.t0);
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
  deleteRoom: function deleteRoom(idClinic, idRoom) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
        var checkAppointmentWithRoom, deleteRoomClinic, listRoom;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _models["default"].Schedule.findOne({
                where: {
                  idRoom: idRoom
                }
              });
            case 3:
              checkAppointmentWithRoom = _context4.sent;
              if (!checkAppointmentWithRoom) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", resolve({
                status: 202,
                message: "This room cannot be deleted because it is being used to create an appointment"
              }));
            case 6:
              _context4.next = 8;
              return _models["default"].RoomOfClinic.destroy({
                where: {
                  id: idRoom
                }
              });
            case 8:
              deleteRoomClinic = _context4.sent;
              if (!deleteRoomClinic) {
                _context4.next = 16;
                break;
              }
              _context4.next = 12;
              return _models["default"].RoomOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicRoom: idClinic
                }
              });
            case 12:
              listRoom = _context4.sent;
              resolve({
                status: 200,
                message: 'delete room successfully',
                data: listRoom
              });
              _context4.next = 17;
              break;
            case 16:
              resolve({
                status: 202,
                message: 'delete room failed',
                data: []
              });
            case 17:
              _context4.next = 23;
              break;
            case 19:
              _context4.prev = 19;
              _context4.t0 = _context4["catch"](0);
              _winston["default"].roomOfClinic.error(_context4.t0);
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
var _default = roomOfClinicServices;
exports["default"] = _default;