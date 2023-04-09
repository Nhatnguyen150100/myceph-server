'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _sequelize = require("sequelize");
var _winston = _interopRequireDefault(require("../config/winston"));
var _models = _interopRequireWildcard(require("../models"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var scheduleServices = {
  getPropertiesClinic: function getPropertiesClinic(idClinic) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var allDoctorInClinic, statusOfClinic, serviceOfClinic, roomOfClinic;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _models.sequelize.query("select idDoctor,email,fullName from Memberofclinics, Doctors where Memberofclinics.idClinic = ? and Memberofclinics.idDoctor = Doctors.id", {
                replacements: [idClinic],
                type: _sequelize.QueryTypes.SELECT
              });
            case 3:
              allDoctorInClinic = _context.sent;
              _context.next = 6;
              return _models["default"].StatusOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicStatus: idClinic
                }
              });
            case 6:
              statusOfClinic = _context.sent;
              _context.next = 9;
              return _models["default"].ServicesOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicService: idClinic
                }
              });
            case 9:
              serviceOfClinic = _context.sent;
              _context.next = 12;
              return _models["default"].RoomOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicRoom: idClinic
                }
              });
            case 12:
              roomOfClinic = _context.sent;
              if (allDoctorInClinic.length >= 0 && statusOfClinic.length >= 0 && serviceOfClinic.length >= 0 && roomOfClinic.length >= 0) {
                resolve({
                  status: 200,
                  message: 'get attribute of clinic successfully',
                  data: {
                    doctor: (0, _toConsumableArray2["default"])(allDoctorInClinic),
                    statusOfClinic: (0, _toConsumableArray2["default"])(statusOfClinic),
                    serviceOfClinic: (0, _toConsumableArray2["default"])(serviceOfClinic),
                    roomOfClinic: (0, _toConsumableArray2["default"])(roomOfClinic)
                  }
                });
              } else {
                resolve({
                  status: 200,
                  message: 'get attribute of clinic failed',
                  data: []
                });
              }
              _context.next = 20;
              break;
            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              _winston["default"].schedule.error(_context.t0);
              reject(_context.t0);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 16]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  getAllAppointments: function getAllAppointments(idClinic, idDoctor, idPatient) {
    var messageSuccess = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var messageFailed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var allAppointments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _models["default"].Schedule.findAll({
                where: {
                  idClinicSchedule: idClinic,
                  idDoctorSchedule: idDoctor ? idDoctor : (0, _defineProperty2["default"])({}, _sequelize.Op.not, null),
                  idPatientSchedule: idPatient ? idPatient : (0, _defineProperty2["default"])({}, _sequelize.Op.not, null)
                },
                include: [{
                  model: _models["default"].Doctor,
                  attributes: ['email', 'fullName']
                }, {
                  model: _models["default"].ServicesOfClinic,
                  attributes: ['nameService', 'colorService']
                }, {
                  model: _models["default"].RoomOfClinic,
                  attributes: ['nameRoom', 'colorRoom']
                }, {
                  model: _models["default"].StatusOfClinic,
                  attributes: ['nameStatus', 'colorStatus']
                }, {
                  model: _models["default"].Patient,
                  attributes: ['fullName']
                }],
                raw: true,
                nest: true
              });
            case 3:
              allAppointments = _context2.sent;
              if (allAppointments.length >= 0) {
                resolve({
                  status: 200,
                  message: messageSuccess ? messageSuccess : 'get all appointments successfully',
                  data: allAppointments
                });
              } else {
                resolve({
                  status: 202,
                  message: messageFailed ? messageFailed : 'get all appointments failed',
                  data: []
                });
              }
              _context2.next = 11;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              _winston["default"].schedule.error(_context2.t0);
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
  createAppointment: function createAppointment(idClinic, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
        var create, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _models["default"].Schedule.create({
                idPatientSchedule: data.idPatientSchedule,
                idDoctorSchedule: data.idDoctorSchedule,
                idClinicSchedule: idClinic,
                idStatus: data.idStatus,
                idService: data.idService,
                idRoom: data.idRoom,
                appointmentDate: new Date(data.appointmentDate),
                startTime: data.startTime,
                endTime: data.endTime,
                note: data.note
              });
            case 3:
              create = _context3.sent;
              if (!create) {
                _context3.next = 11;
                break;
              }
              _context3.next = 7;
              return scheduleServices.getAllAppointments(idClinic, '', '', 'create appointment successfully', 'create appointment failed');
            case 7:
              result = _context3.sent;
              resolve(result);
              _context3.next = 12;
              break;
            case 11:
              resolve({
                status: 202,
                message: 'create appointment failed',
                data: []
              });
            case 12:
              _context3.next = 18;
              break;
            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              _winston["default"].schedule.error(_context3.t0);
              reject(_context3.t0);
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 14]]);
      }));
      return function (_x5, _x6) {
        return _ref5.apply(this, arguments);
      };
    }());
  },
  updateAppointment: function updateAppointment(idClinic, idAppointment, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
        var updateData, update, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              updateData = {
                idPatientSchedule: data.idPatientSchedule,
                idDoctorSchedule: data.idDoctorSchedule,
                idStatus: data.idStatus,
                idService: data.idService,
                idRoom: data.idRoom,
                appointmentDate: new Date(data.appointmentDate),
                startTime: data.startTime,
                endTime: data.endTime,
                note: data.note
              };
              _context4.next = 4;
              return _models["default"].Schedule.update(updateData, {
                where: {
                  id: idAppointment
                }
              });
            case 4:
              update = _context4.sent;
              if (!update) {
                _context4.next = 12;
                break;
              }
              _context4.next = 8;
              return scheduleServices.getAllAppointments(idClinic, '', '', 'update appointment successfully', 'update appointment failed');
            case 8:
              result = _context4.sent;
              resolve(result);
              _context4.next = 13;
              break;
            case 12:
              resolve({
                status: 202,
                message: 'update appointments failed',
                data: []
              });
            case 13:
              _context4.next = 19;
              break;
            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              _winston["default"].schedule.error(_context4.t0);
              reject(_context4.t0);
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 15]]);
      }));
      return function (_x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }());
  },
  deleteAppointment: function deleteAppointment(idClinic, idAppointment) {
    return new Promise( /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
        var deleteAppoint, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _models["default"].Schedule.destroy({
                where: {
                  id: idAppointment
                }
              });
            case 3:
              deleteAppoint = _context5.sent;
              if (!deleteAppoint) {
                _context5.next = 11;
                break;
              }
              _context5.next = 7;
              return scheduleServices.getAllAppointments(idClinic, '', '', 'delete appointment successfully', 'delete appointment failed');
            case 7:
              result = _context5.sent;
              resolve(result);
              _context5.next = 12;
              break;
            case 11:
              resolve({
                status: 202,
                message: 'delete appointments failed',
                data: []
              });
            case 12:
              _context5.next = 18;
              break;
            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](0);
              _winston["default"].schedule.error(_context5.t0);
              reject(_context5.t0);
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 14]]);
      }));
      return function (_x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }());
  }
};
var _default = scheduleServices;
exports["default"] = _default;