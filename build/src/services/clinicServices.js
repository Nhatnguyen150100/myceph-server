'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireWildcard(require("../models"));
var _sequelize = _interopRequireDefault(require("sequelize"));
var _patientServices = _interopRequireDefault(require("./patientServices"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var clinicServices = {
  getAllClinic: function getAllClinic() {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var listClinic;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _models["default"].Clinic.findAll();
            case 3:
              listClinic = _context.sent;
              resolve({
                message: "Get all clinic successfully",
                data: listClinic
              });
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
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
  getAllDoctorInClinic: function getAllDoctorInClinic(idClinic, page, pageSize, nameSearch) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var start, count, listDoctor, _start, _count, _listDoctor;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (nameSearch) {
                _context2.next = 12;
                break;
              }
              start = (page - 1) * pageSize;
              _context2.next = 5;
              return _models.sequelize.query("select * from Memberofclinics, Doctors where Memberofclinics.idClinic = ? and Memberofclinics.idDoctor = Doctors.id", {
                replacements: [idClinic],
                type: _sequelize["default"].SELECT
              });
            case 5:
              count = _context2.sent;
              _context2.next = 8;
              return _models.sequelize.query("select idDoctor,email,fullName,gender,birthday,speciality,avatar,roleOfDoctor from Memberofclinics, Doctors where Memberofclinics.idClinic = ? and Memberofclinics.idDoctor = Doctors.id limit ?,?", {
                replacements: [idClinic, start, Number(pageSize)],
                type: _sequelize["default"].SELECT
              });
            case 8:
              listDoctor = _context2.sent;
              if (listDoctor.length > 0) {
                resolve({
                  status: 200,
                  message: "Get all doctor successfully",
                  data: listDoctor[0],
                  count: count[0].length
                });
              } else {
                resolve({
                  status: 202,
                  message: "Get all doctor failed",
                  data: listDoctor,
                  count: null
                });
              }
              _context2.next = 20;
              break;
            case 12:
              _start = (page - 1) * pageSize;
              _context2.next = 15;
              return _models.sequelize.query("select * from Memberofclinics, Doctors where Memberofclinics.idClinic = ? and Memberofclinics.idDoctor = Doctors.id and Doctors.fullName like ?", {
                replacements: [idClinic, '%' + nameSearch + '%'],
                type: _sequelize["default"].SELECT
              });
            case 15:
              _count = _context2.sent;
              _context2.next = 18;
              return _models.sequelize.query("select idDoctor,email,fullName,gender,birthday,speciality,avatar,roleOfDoctor from Memberofclinics, Doctors where Memberofclinics.idClinic = ? and Memberofclinics.idDoctor = Doctors.id and Doctors.fullName like ? limit ?,?", {
                replacements: [idClinic, '%' + nameSearch + '%', _start, Number(pageSize)],
                type: _sequelize["default"].SELECT
              });
            case 18:
              _listDoctor = _context2.sent;
              if (_listDoctor.length > 0) {
                resolve({
                  status: 200,
                  message: "Get all doctor successfully",
                  data: _listDoctor[0],
                  count: _count[0].length
                });
              } else {
                resolve({
                  status: 202,
                  message: "Get all doctor failed",
                  data: _listDoctor,
                  count: null
                });
              }
            case 20:
              _context2.next = 25;
              break;
            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](0);
              reject(_context2.t0);
            case 25:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 22]]);
      }));
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  },
  createNewClinic: function createNewClinic(idAdminDoctor, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
        var newClinic, _yield$clinicServices, status;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _models["default"].Clinic.create({
                nameClinic: data.nameClinic,
                emailClinic: data.emailClinic,
                phoneNumberClinic: data.phoneNumberClinic,
                avatarClinic: data.avatarClinic,
                addressClinic: data.addressClinic,
                description: data.description
              });
            case 3:
              newClinic = _context3.sent;
              _context3.next = 6;
              return clinicServices.addDoctorToClinic(newClinic.dataValues.id, idAdminDoctor, "admin");
            case 6:
              _yield$clinicServices = _context3.sent;
              status = _yield$clinicServices.status;
              if (status) {
                resolve({
                  status: 200,
                  message: 'create new clinic successfully',
                  idClinic: newClinic.dataValues.id
                });
              } else {
                resolve({
                  status: 202,
                  message: 'create new clinic failed',
                  idClinic: null
                });
              }
              _context3.next = 14;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              reject({
                error: _context3.t0
              });
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 11]]);
      }));
      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  },
  addDoctorToClinic: function addDoctorToClinic(idClinic, idDoctor, roleOfDoctor) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
        var checkDoctorInClinic, addMemberToClinic;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _models["default"].MemberOfClinic.findOne({
                where: {
                  idClinic: idClinic,
                  idDoctor: idDoctor
                }
              });
            case 3:
              checkDoctorInClinic = _context4.sent;
              if (!checkDoctorInClinic) {
                _context4.next = 8;
                break;
              }
              resolve({
                status: 202,
                message: 'doctor is already in this clinic'
              });
              _context4.next = 12;
              break;
            case 8:
              _context4.next = 10;
              return _models["default"].MemberOfClinic.create({
                idClinic: idClinic,
                idDoctor: idDoctor,
                roleOfDoctor: roleOfDoctor
              });
            case 10:
              addMemberToClinic = _context4.sent;
              if (addMemberToClinic) {
                resolve({
                  status: 200,
                  message: 'Add member to clinic successfully'
                });
              } else {
                resolve({
                  status: 202,
                  message: 'Add member to clinic failed'
                });
              }
            case 12:
              _context4.next = 17;
              break;
            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              reject(_context4.t0);
            case 17:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 14]]);
      }));
      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  },
  getInformationClinic: function getInformationClinic(id) {
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
        var clinic;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _models["default"].Clinic.findOne({
                where: {
                  id: id
                }
              });
            case 3:
              clinic = _context5.sent;
              if (clinic) {
                resolve({
                  status: 200,
                  message: 'get information of clinic successfully',
                  data: clinic
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get information of clinic failed',
                  data: {}
                });
              }
              _context5.next = 10;
              break;
            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              reject(_context5.t0);
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 7]]);
      }));
      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }());
  },
  updateClinicInformation: function updateClinicInformation(idClinic, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(resolve, reject) {
        var dataUpdate, clinicUpdate;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              dataUpdate = {
                nameClinic: data.nameClinic,
                emailClinic: data.emailClinic,
                phoneNumberClinic: data.phoneNumberClinic,
                avatarClinic: data.avatarClinic,
                addressClinic: data.addressClinic,
                description: data.description
              };
              _context6.next = 4;
              return _models["default"].Clinic.update(dataUpdate, {
                where: {
                  id: idClinic
                }
              });
            case 4:
              clinicUpdate = _context6.sent;
              if (clinicUpdate) {
                resolve({
                  status: 200,
                  message: 'Update information of clinic successfully'
                });
              } else {
                resolve({
                  status: 202,
                  message: 'Update information of clinic failed'
                });
              }
              _context6.next = 11;
              break;
            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              reject(_context6.t0);
            case 11:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 8]]);
      }));
      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }());
  },
  updateRoleOfDoctor: function updateRoleOfDoctor(idClinic, idDoctor, roleOfDoctor) {
    return new Promise( /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(resolve, reject) {
        var updateRoleOfDoctorRequest;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _models["default"].MemberOfClinic.update({
                roleOfDoctor: roleOfDoctor
              }, {
                where: {
                  idClinic: idClinic,
                  idDoctor: idDoctor
                }
              });
            case 3:
              updateRoleOfDoctorRequest = _context7.sent;
              if (updateRoleOfDoctorRequest) {
                resolve({
                  status: 200,
                  message: 'Update role of doctor successfully'
                });
              } else {
                resolve({
                  status: 202,
                  message: 'Update role of doctor failed'
                });
              }
              _context7.next = 10;
              break;
            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7["catch"](0);
              reject(_context7.t0);
            case 10:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 7]]);
      }));
      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }());
  },
  deleteDoctorFromClinic: function deleteDoctorFromClinic(idClinic, idDoctor) {
    return new Promise( /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(resolve, reject) {
        var checkDoctorInClinic, deleteDoctor;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return _models["default"].MemberOfClinic.findOne({
                where: {
                  idClinic: idClinic,
                  idDoctor: idDoctor
                }
              });
            case 3:
              checkDoctorInClinic = _context8.sent;
              if (!checkDoctorInClinic) resolve({
                status: 202,
                message: 'doctor is not in this clinic'
              });
              _context8.next = 7;
              return _models["default"].MemberOfClinic.destroy({
                where: {
                  idClinic: idClinic,
                  idDoctor: idDoctor
                }
              });
            case 7:
              deleteDoctor = _context8.sent;
              if (deleteDoctor) {
                resolve({
                  status: 200,
                  message: 'doctor deleted successfully'
                });
              } else {
                resolve({
                  status: 202,
                  message: 'doctor deleted successfully'
                });
              }
              _context8.next = 14;
              break;
            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8["catch"](0);
              reject(_context8.t0);
            case 14:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 11]]);
      }));
      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    }());
  },
  deleteClinic: function deleteClinic(idClinic) {
    return new Promise( /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(resolve, reject) {
        var listPatientOfClinic, index, element, deleteMemberOfClinic, deleteClinic;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return _models["default"].Schedule.destroy({
                where: {
                  idClinicSchedule: idClinic
                }
              });
            case 3:
              _context9.next = 5;
              return _models["default"].RoomOfClinic.destroy({
                where: {
                  idClinicRoom: idClinic
                }
              });
            case 5:
              _context9.next = 7;
              return _models["default"].ServicesOfClinic.destroy({
                where: {
                  idClinicService: idClinic
                }
              });
            case 7:
              _context9.next = 9;
              return _models["default"].StatusOfClinic.destroy({
                where: {
                  idClinicStatus: idClinic
                }
              });
            case 9:
              _context9.next = 11;
              return _models["default"].Patient.findAll({
                where: {
                  idPatientOfClinic: idClinic
                }
              });
            case 11:
              listPatientOfClinic = _context9.sent;
              if (!(listPatientOfClinic.length > 0)) {
                _context9.next = 21;
                break;
              }
              index = 0;
            case 14:
              if (!(index < listPatientOfClinic.length)) {
                _context9.next = 21;
                break;
              }
              element = listPatientOfClinic[index];
              _context9.next = 18;
              return _patientServices["default"].deletePatient(element.id);
            case 18:
              index++;
              _context9.next = 14;
              break;
            case 21:
              _context9.next = 23;
              return _models["default"].MemberOfClinic.destroy({
                where: {
                  idClinic: idClinic
                }
              });
            case 23:
              deleteMemberOfClinic = _context9.sent;
              if (!deleteMemberOfClinic) {
                _context9.next = 31;
                break;
              }
              _context9.next = 27;
              return _models["default"].Clinic.destroy({
                where: {
                  idClinicRoom: idClinic
                }
              });
            case 27:
              deleteClinic = _context9.sent;
              if (deleteClinic) {
                resolve({
                  status: 200,
                  message: 'Clinic deleted successfully'
                });
              } else {
                resolve({
                  status: 202,
                  message: 'Clinic deleted failed'
                });
              }
              _context9.next = 32;
              break;
            case 31:
              resolve({
                status: 202,
                message: 'Clinic deleted failed'
              });
            case 32:
              _context9.next = 37;
              break;
            case 34:
              _context9.prev = 34;
              _context9.t0 = _context9["catch"](0);
              reject(_context9.t0);
            case 37:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[0, 34]]);
      }));
      return function (_x17, _x18) {
        return _ref9.apply(this, arguments);
      };
    }());
  }
};
var _default = clinicServices;
exports["default"] = _default;