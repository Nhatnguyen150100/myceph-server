'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var db = require("../models");
var _require = require("sequelize"),
  Op = _require.Op;
var patientServices = {
  createNewPatient: function createNewPatient(data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var newPatient, patientHistory, patientExtraOral, patientIntraOral, patientRadiography, patientDiagnosisAndTreatment, _newPatient, _patientHistory, _patientExtraOral, _patientIntraOral, _patientRadiography, _patientDiagnosisAndTreatment;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (!data.idDoctor) {
                _context.next = 24;
                break;
              }
              _context.next = 4;
              return db.Patient.create({
                fullName: data.fullName,
                birthday: new Date(data.birthday),
                gender: data.gender,
                note: data.note,
                idPatientOfDoctor: data.idDoctor
              });
            case 4:
              newPatient = _context.sent;
              if (!newPatient) {
                _context.next = 22;
                break;
              }
              _context.next = 8;
              return db.History.create({
                idHistory: newPatient.id
              });
            case 8:
              patientHistory = _context.sent;
              _context.next = 11;
              return db.ExtraOral.create({
                idExtraoral: newPatient.id
              });
            case 11:
              patientExtraOral = _context.sent;
              _context.next = 14;
              return db.IntraOral.create({
                idIntraoral: newPatient.id
              });
            case 14:
              patientIntraOral = _context.sent;
              _context.next = 17;
              return db.Radiography.create({
                idRadiography: newPatient.id
              });
            case 17:
              patientRadiography = _context.sent;
              _context.next = 20;
              return db.DiagnosisAndTreatment.create({
                idDiagnosisAndTreatment: newPatient.id
              });
            case 20:
              patientDiagnosisAndTreatment = _context.sent;
              if (patientHistory && patientExtraOral && patientIntraOral && patientRadiography && patientDiagnosisAndTreatment) resolve({
                status: 200,
                message: 'create patient successfully'
              });
            case 22:
              _context.next = 44;
              break;
            case 24:
              _context.next = 26;
              return db.Patient.create({
                fullName: data.fullName,
                birthday: new Date(data.birthday),
                gender: data.gender,
                note: data.note,
                idPatientOfClinic: data.idClinic
              });
            case 26:
              _newPatient = _context.sent;
              if (!_newPatient) {
                _context.next = 44;
                break;
              }
              _context.next = 30;
              return db.History.create({
                idHistory: _newPatient.id
              });
            case 30:
              _patientHistory = _context.sent;
              _context.next = 33;
              return db.ExtraOral.create({
                idExtraoral: _newPatient.id
              });
            case 33:
              _patientExtraOral = _context.sent;
              _context.next = 36;
              return db.IntraOral.create({
                idIntraoral: _newPatient.id
              });
            case 36:
              _patientIntraOral = _context.sent;
              _context.next = 39;
              return db.Radiography.create({
                idRadiography: _newPatient.id
              });
            case 39:
              _patientRadiography = _context.sent;
              _context.next = 42;
              return db.DiagnosisAndTreatment.create({
                idDiagnosisAndTreatment: _newPatient.id
              });
            case 42:
              _patientDiagnosisAndTreatment = _context.sent;
              if (_patientHistory && _patientExtraOral && _patientIntraOral && _patientRadiography && _patientDiagnosisAndTreatment) resolve({
                status: 200,
                message: 'create patient successfully'
              });
            case 44:
              reject({
                status: 202,
                message: 'create patient failed'
              });
              _context.next = 50;
              break;
            case 47:
              _context.prev = 47;
              _context.t0 = _context["catch"](0);
              reject(_context.t0);
            case 50:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 47]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  deletePatient: function deletePatient(idPatient) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var deletePatient;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return db.History.destroy({
                where: {
                  idHistory: idPatient
                },
                force: true
              });
            case 3:
              _context2.next = 5;
              return db.ExtraOral.destroy({
                where: {
                  idExtraOral: idPatient
                },
                force: true
              });
            case 5:
              _context2.next = 7;
              return db.IntraOral.destroy({
                where: {
                  idIntraOral: idPatient
                },
                force: true
              });
            case 7:
              _context2.next = 9;
              return db.Radiography.destroy({
                where: {
                  idRadiography: idPatient
                },
                force: true
              });
            case 9:
              _context2.next = 11;
              return db.DiagnosisAndTreatment.destroy({
                where: {
                  idDiagnosisAndTreatment: idPatient
                },
                force: true
              });
            case 11:
              _context2.next = 13;
              return db.ListOfIssue.destroy({
                where: {
                  idListOfIssue: idPatient
                },
                force: true
              });
            case 13:
              _context2.next = 15;
              return db.TreatmentPlan.destroy({
                where: {
                  idTreatmentPlan: idPatient
                },
                force: true
              });
            case 15:
              _context2.next = 17;
              return db.TreatmentHistory.destroy({
                where: {
                  idTreatmentHistory: idPatient
                },
                force: true
              });
            case 17:
              _context2.next = 19;
              return db.LibraryImagePatient.destroy({
                where: {
                  idPatientImage: idPatient
                },
                force: true
              });
            case 19:
              _context2.next = 21;
              return db.SharePatient.destroy({
                where: {
                  idSharedPatient: idPatient
                },
                force: true
              });
            case 21:
              _context2.next = 23;
              return db.Patient.destroy({
                where: {
                  id: idPatient
                },
                force: true
              });
            case 23:
              deletePatient = _context2.sent;
              if (deletePatient) {
                resolve({
                  status: 200,
                  message: 'Patient deleted successfully'
                });
              } else {
                resolve({
                  status: 202,
                  message: 'Patient deleted failed'
                });
              }
              _context2.next = 30;
              break;
            case 27:
              _context2.prev = 27;
              _context2.t0 = _context2["catch"](0);
              reject(_context2.t0);
            case 30:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 27]]);
      }));
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  },
  getSharedPatientOfDoctor: function getSharedPatientOfDoctor(idDoctor, page, pageSize, nameSearch) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
        var count, start, listPatient;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return db.Patient.count({
                include: [{
                  model: db.SharePatient,
                  where: {
                    idOwnerDoctor: idDoctor,
                    idSharedPatientOfClinic: (0, _defineProperty2["default"])({}, Op.is, null)
                  }
                }],
                where: {
                  fullName: (0, _defineProperty2["default"])({}, Op.substring, "".concat(nameSearch))
                }
              });
            case 3:
              count = _context3.sent;
              start = (page - 1) * pageSize;
              _context3.next = 7;
              return db.Patient.findAll({
                include: [{
                  model: db.SharePatient,
                  where: {
                    idOwnerDoctor: idDoctor,
                    idSharedPatientOfClinic: (0, _defineProperty2["default"])({}, Op.is, null)
                  }
                }],
                offset: start,
                limit: Number(pageSize),
                order: [['createdAt', 'DESC']],
                where: {
                  fullName: (0, _defineProperty2["default"])({}, Op.substring, "".concat(nameSearch))
                },
                raw: true
              });
            case 7:
              listPatient = _context3.sent;
              if (listPatient.length > 0) {
                resolve({
                  status: 200,
                  message: 'get patient successfully',
                  data: listPatient,
                  count: count
                });
              } else {
                resolve({
                  status: 200,
                  message: 'get patient failed',
                  data: [],
                  count: 0
                });
              }
              _context3.next = 14;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              reject(_context3.t0);
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
  getSharedPatientOfDoctorInClinic: function getSharedPatientOfDoctorInClinic(idDoctor, idClinic, page, pageSize, nameSearch) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
        var count, start, listPatient;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return db.Patient.count({
                include: [{
                  model: db.SharePatient,
                  where: {
                    idOwnerDoctor: idDoctor,
                    idSharedPatientOfClinic: idClinic
                  }
                }],
                where: {
                  fullName: (0, _defineProperty2["default"])({}, Op.substring, "".concat(nameSearch))
                }
              });
            case 3:
              count = _context4.sent;
              start = (page - 1) * pageSize;
              _context4.next = 7;
              return db.Patient.findAll({
                include: [{
                  model: db.SharePatient,
                  where: {
                    idOwnerDoctor: idDoctor,
                    idSharedPatientOfClinic: idClinic
                  }
                }],
                offset: start,
                limit: Number(pageSize),
                order: [['createdAt', 'DESC']],
                where: {
                  fullName: (0, _defineProperty2["default"])({}, Op.substring, "".concat(nameSearch))
                },
                raw: true
              });
            case 7:
              listPatient = _context4.sent;
              if (listPatient.length > 0) {
                resolve({
                  status: 200,
                  message: 'get patient successfully',
                  data: listPatient,
                  count: count
                });
              } else {
                resolve({
                  status: 200,
                  message: 'get patient failed',
                  data: [],
                  count: 0
                });
              }
              _context4.next = 14;
              break;
            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              reject(_context4.t0);
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 11]]);
      }));
      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  },
  getPatientListForDoctor: function getPatientListForDoctor(idDoctor, page, pageSize, nameSearch) {
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
        var count, start, listPatient;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return db.Patient.count({
                where: {
                  fullName: (0, _defineProperty2["default"])({}, Op.substring, "".concat(nameSearch)),
                  idPatientOfDoctor: idDoctor
                }
              });
            case 3:
              count = _context5.sent;
              start = (page - 1) * pageSize;
              _context5.next = 7;
              return db.Patient.findAll({
                offset: start,
                limit: Number(pageSize),
                order: [['createdAt', 'DESC']],
                where: {
                  idPatientOfDoctor: idDoctor,
                  fullName: (0, _defineProperty2["default"])({}, Op.substring, "".concat(nameSearch))
                },
                raw: true
              });
            case 7:
              listPatient = _context5.sent;
              if (listPatient.length > 0) {
                resolve({
                  status: 200,
                  message: 'get patient successfully',
                  data: listPatient,
                  count: count
                });
              } else {
                resolve({
                  status: 200,
                  message: 'get patient failed',
                  data: [],
                  count: 0
                });
              }
              _context5.next = 14;
              break;
            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](0);
              reject(_context5.t0);
            case 14:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 11]]);
      }));
      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }());
  },
  getPatientListForClinic: function getPatientListForClinic(idClinic, page, pageSize, nameSearch) {
    return new Promise( /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(resolve, reject) {
        var count, start, listPatient;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return db.Patient.count({
                where: {
                  fullName: (0, _defineProperty2["default"])({}, Op.substring, "".concat(nameSearch)),
                  idPatientOfClinic: idClinic
                }
              });
            case 3:
              count = _context6.sent;
              start = (page - 1) * pageSize;
              _context6.next = 7;
              return db.Patient.findAll({
                offset: start,
                limit: Number(pageSize),
                order: [['createdAt', 'DESC']],
                where: {
                  idPatientOfClinic: idClinic,
                  fullName: (0, _defineProperty2["default"])({}, Op.substring, "".concat(nameSearch))
                },
                raw: true
              });
            case 7:
              listPatient = _context6.sent;
              if (listPatient.length > 0) {
                resolve({
                  status: 200,
                  message: 'get patient successfully',
                  data: listPatient,
                  count: count
                });
              } else {
                resolve({
                  status: 200,
                  message: 'get patient failed',
                  data: [],
                  count: 0
                });
              }
              _context6.next = 14;
              break;
            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](0);
              reject(_context6.t0);
            case 14:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 11]]);
      }));
      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }());
  },
  updateInformationPatient: function updateInformationPatient(id, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(resolve, reject) {
        var dataUpdate, isSelectedPlan, checkUpdatePatient, patient, getUpdateByDoctor, diagnose, selectedPlan;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              dataUpdate = {
                fullName: data.fullName,
                gender: data.gender,
                birthday: new Date(data.birthday),
                consulationDate: new Date(data.consulationDate),
                phoneNumber: data.phoneNumber,
                address: data.address,
                chiefcomplaint: data.chiefcomplaint,
                note: data.note,
                updateByDoctor: data.updateByDoctor
              };
              if (!data.diagnose) {
                _context7.next = 5;
                break;
              }
              _context7.next = 5;
              return db.DiagnosisAndTreatment.update({
                diagnose: data.diagnose
              }, {
                where: {
                  idDiagnosisAndTreatment: id
                }
              });
            case 5:
              if (!data.selectedPlan) {
                _context7.next = 16;
                break;
              }
              _context7.next = 8;
              return db.TreatmentPlan.findOne({
                where: {
                  idTreatmentPlan: id,
                  selected: true
                }
              });
            case 8:
              isSelectedPlan = _context7.sent;
              if (!(isSelectedPlan === null)) {
                _context7.next = 14;
                break;
              }
              _context7.next = 12;
              return db.TreatmentPlan.create({
                idTreatmentPlan: id,
                plan: data.selectedPlan,
                selected: true
              });
            case 12:
              _context7.next = 16;
              break;
            case 14:
              _context7.next = 16;
              return db.TreatmentPlan.update({
                plan: data.selectedPlan
              }, {
                where: {
                  idTreatmentPlan: id,
                  selected: true
                }
              });
            case 16:
              _context7.next = 18;
              return db.Patient.update(dataUpdate, {
                where: {
                  id: id
                }
              });
            case 18:
              checkUpdatePatient = _context7.sent;
              if (!checkUpdatePatient) {
                _context7.next = 35;
                break;
              }
              _context7.next = 22;
              return db.Patient.findOne({
                where: {
                  id: id
                }
              });
            case 22:
              patient = _context7.sent;
              _context7.next = 25;
              return db.Doctor.findOne({
                attributes: [['fullName', 'fullNameDoctor'], 'email'],
                where: {
                  id: data.updateByDoctor
                }
              });
            case 25:
              getUpdateByDoctor = _context7.sent;
              _context7.next = 28;
              return db.DiagnosisAndTreatment.findOne({
                attributes: ['diagnose'],
                where: {
                  idDiagnosisAndTreatment: id
                }
              });
            case 28:
              diagnose = _context7.sent;
              _context7.next = 31;
              return db.TreatmentPlan.findOne({
                attributes: ['plan'],
                where: {
                  idTreatmentPlan: id,
                  selected: true
                }
              });
            case 31:
              selectedPlan = _context7.sent;
              resolve({
                status: 200,
                message: 'update information patient successfully',
                data: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, patient), diagnose), selectedPlan), getUpdateByDoctor)
              });
              _context7.next = 37;
              break;
            case 35:
              _winston["default"].patient.error(checkUpdatePatient);
              resolve({
                status: 202,
                message: 'update information patient failed'
              });
            case 37:
              _context7.next = 43;
              break;
            case 39:
              _context7.prev = 39;
              _context7.t0 = _context7["catch"](0);
              _winston["default"].patient.error(_context7.t0);
              reject(_context7.t0);
            case 43:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 39]]);
      }));
      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }());
  },
  saveUpdateDoctor: function saveUpdateDoctor(idPatient, idDoctor) {
    return new Promise( /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(resolve, reject) {
        var newUpdateDoctor;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return db.Patient.update({
                updateByDoctor: idDoctor
              }, {
                where: {
                  id: idPatient
                }
              });
            case 3:
              newUpdateDoctor = _context8.sent;
              if (newUpdateDoctor) resolve();
              _context8.next = 10;
              break;
            case 7:
              _context8.prev = 7;
              _context8.t0 = _context8["catch"](0);
              reject(_context8.t0);
            case 10:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 7]]);
      }));
      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    }());
  },
  getUpdateDoctor: function getUpdateDoctor(idPatient) {
    return new Promise( /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(resolve, reject) {
        var updateDoctor;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return db.Patient.findOne({
                attributes: ['updateByDoctor'],
                where: {
                  id: idPatient
                }
              });
            case 3:
              updateDoctor = _context9.sent;
              if (updateDoctor) resolve(updateDoctor);
              _context9.next = 10;
              break;
            case 7:
              _context9.prev = 7;
              _context9.t0 = _context9["catch"](0);
              reject(_context9.t0);
            case 10:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[0, 7]]);
      }));
      return function (_x17, _x18) {
        return _ref9.apply(this, arguments);
      };
    }());
  }
};
var _default = patientServices;
exports["default"] = _default;