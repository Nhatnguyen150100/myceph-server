'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../models");
var _sequelize = _interopRequireWildcard(require("sequelize"));
var _winston = _interopRequireDefault(require("../config/winston"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var db = require("../models");
var sharePatientServices = {
  sharePatient: function sharePatient(data, idSharedPatient, idOwnerDoctor) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var checkSharePatient, addPatient, _checkSharePatient, _addPatient;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (!data.idSharedPatientOfDoctor) {
                _context.next = 13;
                break;
              }
              _context.next = 4;
              return db.SharePatient.findOne({
                where: {
                  idSharedPatient: idSharedPatient,
                  idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
                  idOwnerDoctor: idOwnerDoctor
                }
              });
            case 4:
              checkSharePatient = _context.sent;
              if (!checkSharePatient) {
                _context.next = 7;
                break;
              }
              return _context.abrupt("return", resolve({
                status: 202,
                message: 'this patient is shared for doctor'
              }));
            case 7:
              _context.next = 9;
              return db.SharePatient.create({
                idSharedPatient: idSharedPatient,
                idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
                idOwnerDoctor: idOwnerDoctor,
                roleOfOwnerDoctor: 'view'
              });
            case 9:
              addPatient = _context.sent;
              if (addPatient) {
                resolve({
                  status: 200,
                  message: 'patient shared successfully'
                });
              } else {
                resolve({
                  status: 202,
                  message: 'patient shared failed'
                });
              }
              _context.next = 22;
              break;
            case 13:
              _context.next = 15;
              return db.SharePatient.findOne({
                where: {
                  idSharedPatient: idSharedPatient,
                  idSharedPatientOfClinic: data.idSharedPatientOfClinic,
                  idOwnerDoctor: idOwnerDoctor
                }
              });
            case 15:
              _checkSharePatient = _context.sent;
              if (!_checkSharePatient) {
                _context.next = 18;
                break;
              }
              return _context.abrupt("return", resolve({
                status: 202,
                message: 'this patient is shared for doctor'
              }));
            case 18:
              _context.next = 20;
              return db.SharePatient.create({
                idSharedPatient: idSharedPatient,
                idSharedPatientOfClinic: data.idSharedPatientOfClinic,
                idOwnerDoctor: idOwnerDoctor,
                roleOfOwnerDoctor: 'view'
              });
            case 20:
              _addPatient = _context.sent;
              if (_addPatient) {
                resolve({
                  status: 200,
                  message: 'patient shared successfully'
                });
              } else {
                resolve({
                  status: 202,
                  message: 'patient shared failed'
                });
              }
            case 22:
              _context.next = 27;
              break;
            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](0);
              reject(_context.t0);
            case 27:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 24]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  removeSharePatient: function removeSharePatient(data, idSharedPatient, idOwnerDoctor) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var checkDoctor, checkClinic;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (!data.idSharedPatientOfDoctor) {
                _context2.next = 14;
                break;
              }
              _context2.next = 4;
              return db.SharePatient.findOne({
                where: {
                  idSharedPatient: idSharedPatient,
                  idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
                  idOwnerDoctor: idOwnerDoctor
                }
              });
            case 4:
              checkDoctor = _context2.sent;
              if (!checkDoctor) {
                _context2.next = 11;
                break;
              }
              _context2.next = 8;
              return db.SharePatient.destroy({
                where: {
                  idSharedPatient: idSharedPatient,
                  idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
                  idOwnerDoctor: idOwnerDoctor
                }
              });
            case 8:
              resolve({
                status: 200,
                message: "remove patient shared by doctor successfully"
              });
              _context2.next = 12;
              break;
            case 11:
              resolve({
                status: 202,
                message: "can't found patient shared by doctor"
              });
            case 12:
              _context2.next = 24;
              break;
            case 14:
              _context2.next = 16;
              return db.SharePatient.findOne({
                where: {
                  idSharedPatient: idSharedPatient,
                  idSharedPatientOfClinic: data.idSharedPatientOfClinic,
                  idOwnerDoctor: idOwnerDoctor
                }
              });
            case 16:
              checkClinic = _context2.sent;
              if (!checkClinic) {
                _context2.next = 23;
                break;
              }
              _context2.next = 20;
              return db.SharePatient.destroy({
                where: {
                  idSharedPatient: idSharedPatient,
                  idSharedPatientOfClinic: data.idSharedPatientOfClinic,
                  idOwnerDoctor: idOwnerDoctor
                }
              });
            case 20:
              resolve({
                status: 200,
                message: "remove patient shared by clinic successfully"
              });
              _context2.next = 24;
              break;
            case 23:
              resolve({
                status: 202,
                message: "can't found patient shared by clinic"
              });
            case 24:
              _context2.next = 29;
              break;
            case 26:
              _context2.prev = 26;
              _context2.t0 = _context2["catch"](0);
              reject(_context2.t0);
            case 29:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 26]]);
      }));
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  },
  updateRoleOfOwnerDoctor: function updateRoleOfOwnerDoctor(data, idSharedPatient, idOwnerDoctor, roleOfOwnerDoctor) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
        var checkIsPatientOfDoctor, _checkIsPatientOfDoctor;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              if (!data.idSharedPatientOfDoctor) {
                _context3.next = 14;
                break;
              }
              _context3.next = 4;
              return db.SharePatient.findOne({
                where: {
                  idSharedPatient: idSharedPatient,
                  idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
                  idOwnerDoctor: idOwnerDoctor
                }
              });
            case 4:
              checkIsPatientOfDoctor = _context3.sent;
              if (!checkIsPatientOfDoctor) {
                _context3.next = 11;
                break;
              }
              _context3.next = 8;
              return db.SharePatient.update({
                roleOfOwnerDoctor: roleOfOwnerDoctor
              }, {
                where: {
                  idSharedPatient: idSharedPatient,
                  idOwnerDoctor: idOwnerDoctor
                }
              });
            case 8:
              resolve({
                status: 200,
                message: 'update role of owner doctor'
              });
              _context3.next = 12;
              break;
            case 11:
              resolve({
                status: 202,
                message: 'doctor is not admin of patient'
              });
            case 12:
              _context3.next = 24;
              break;
            case 14:
              _context3.next = 16;
              return db.SharePatient.findOne({
                where: {
                  idSharedPatient: idSharedPatient,
                  idSharedPatientOfClinic: data.idSharedPatientOfClinic
                }
              });
            case 16:
              _checkIsPatientOfDoctor = _context3.sent;
              if (!_checkIsPatientOfDoctor) {
                _context3.next = 23;
                break;
              }
              _context3.next = 20;
              return db.SharePatient.update({
                roleOfOwnerDoctor: roleOfOwnerDoctor
              }, {
                where: {
                  idSharedPatient: idSharedPatient,
                  idOwnerDoctor: idOwnerDoctor
                }
              });
            case 20:
              resolve({
                status: 200,
                message: 'update role of owner doctor'
              });
              _context3.next = 24;
              break;
            case 23:
              resolve({
                status: 202,
                message: 'clinic is not admin of patient'
              });
            case 24:
              _context3.next = 29;
              break;
            case 26:
              _context3.prev = 26;
              _context3.t0 = _context3["catch"](0);
              reject(_context3.t0);
            case 29:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 26]]);
      }));
      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  },
  getDoctorSharedPatient: function getDoctorSharedPatient(idSharedPatient) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
        var listDoctor;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _winston["default"].app.info(idSharedPatient);
              _context4.next = 4;
              return _models.sequelize.query('select Doctors.id, Doctors.email, Doctors.fullName from Doctors, Sharepatients where Doctors.id = Sharepatients.idOwnerDoctor and Sharepatients.idSharedPatient = ?', {
                replacements: [idSharedPatient],
                type: _sequelize["default"].SELECT
              });
            case 4:
              listDoctor = _context4.sent;
              _winston["default"].sharePatient.info(listDoctor);
              if (listDoctor.length >= 0) {
                resolve({
                  status: 200,
                  message: 'get doctor share patient successfully',
                  data: listDoctor[0]
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get doctor share patient failed',
                  data: []
                });
              }
              _context4.next = 12;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              reject(_context4.t0);
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 9]]);
      }));
      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  },
  getAllDoctorSharePatient: function getAllDoctorSharePatient(idSharedPatientOfDoctor, page, pageSize) {
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
        var count, start, listDoctor;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _models.sequelize.query('select distinct Doctors.id from Doctors, Sharepatients where Doctors.id = Sharepatients.idOwnerDoctor and Sharepatients.idSharedPatientOfDoctor = ?', {
                replacements: [idSharedPatientOfDoctor],
                type: _sequelize["default"].SELECT
              });
            case 3:
              count = _context5.sent;
              if (!(count[0].length > 0)) {
                _context5.next = 12;
                break;
              }
              start = (page - 1) * pageSize;
              _context5.next = 8;
              return _models.sequelize.query('select distinct Doctors.id,fullName,email,avatar,gender,birthday from Doctors, Sharepatients where Doctors.id = Sharepatients.idOwnerDoctor and Sharepatients.idSharedPatientOfDoctor = ? limit ?, ?', {
                replacements: [idSharedPatientOfDoctor, start, Number(pageSize)],
                type: _sequelize["default"].SELECT
              });
            case 8:
              listDoctor = _context5.sent;
              if (listDoctor.length >= 0) {
                resolve({
                  status: 200,
                  message: 'get doctor share patient successfully',
                  data: listDoctor[0],
                  count: count[0].length
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get doctor share patient failed',
                  data: [],
                  count: 0
                });
              }
              _context5.next = 13;
              break;
            case 12:
              resolve({
                status: 200,
                message: 'get doctor share patient successfully',
                data: [],
                count: 0
              });
            case 13:
              _context5.next = 18;
              break;
            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](0);
              reject(_context5.t0);
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 15]]);
      }));
      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }());
  },
  getListSharePatientOfDoctorInClinic: function getListSharePatientOfDoctorInClinic(idSharedPatientOfClinic, idOwnerDoctor, page, pageSize) {
    return new Promise( /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(resolve, reject) {
        var count, start, listPatient;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return db.Patient.count({
                include: [{
                  model: db.SharePatient,
                  where: {
                    idSharedPatientOfClinic: idSharedPatientOfClinic,
                    idOwnerDoctor: idOwnerDoctor
                  }
                }]
              });
            case 3:
              count = _context6.sent;
              if (!(count > 0)) {
                _context6.next = 12;
                break;
              }
              start = (page - 1) * pageSize;
              _context6.next = 8;
              return db.Patient.findAll({
                include: [{
                  model: db.SharePatient,
                  where: {
                    idSharedPatientOfClinic: idSharedPatientOfClinic,
                    idOwnerDoctor: idOwnerDoctor
                  }
                }],
                offset: start,
                limit: Number(pageSize),
                order: [['createdAt', 'DESC']],
                raw: true
              });
            case 8:
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
                  status: 202,
                  message: 'get patient failed',
                  data: [],
                  count: 0
                });
              }
              _context6.next = 13;
              break;
            case 12:
              resolve({
                status: 200,
                message: 'get patient successfully',
                data: [],
                count: 0
              });
            case 13:
              _context6.next = 18;
              break;
            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](0);
              reject(_context6.t0);
            case 18:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 15]]);
      }));
      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }());
  },
  getListSharePatientOfCurrentDoctor: function getListSharePatientOfCurrentDoctor(idOwnerDoctor, page, pageSize, nameSearch) {
    return new Promise( /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(resolve, reject) {
        var count, start, listPatient;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return db.Patient.count({
                include: [{
                  model: db.SharePatient,
                  where: {
                    idSharedPatientOfClinic: (0, _defineProperty2["default"])({}, _sequelize.Op.is, null),
                    idOwnerDoctor: idOwnerDoctor
                  }
                }]
              });
            case 3:
              count = _context7.sent;
              if (!(count > 0)) {
                _context7.next = 12;
                break;
              }
              start = (page - 1) * pageSize;
              _context7.next = 8;
              return db.Patient.findAll({
                include: [{
                  model: db.SharePatient,
                  where: {
                    idSharedPatientOfClinic: (0, _defineProperty2["default"])({}, _sequelize.Op.is, null),
                    idOwnerDoctor: idOwnerDoctor
                  }
                }, {
                  model: db.Doctor,
                  attributes: ['fullName', 'email']
                }],
                offset: start,
                limit: Number(pageSize),
                order: [['createdAt', 'DESC']],
                where: {
                  fullName: (0, _defineProperty2["default"])({}, _sequelize.Op.substring, "".concat(nameSearch))
                },
                raw: true
              });
            case 8:
              listPatient = _context7.sent;
              if (listPatient.length > 0) {
                resolve({
                  status: 200,
                  message: 'get share patient successfully',
                  data: listPatient,
                  count: count
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get share patient failed',
                  data: [],
                  count: 0
                });
              }
              _context7.next = 13;
              break;
            case 12:
              resolve({
                status: 200,
                message: 'get share patient successfully',
                data: [],
                count: 0
              });
            case 13:
              _context7.next = 18;
              break;
            case 15:
              _context7.prev = 15;
              _context7.t0 = _context7["catch"](0);
              reject(_context7.t0);
            case 18:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 15]]);
      }));
      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }());
  },
  getListSharePatientOfDoctor: function getListSharePatientOfDoctor(idSharedPatientOfDoctor, idOwnerDoctor, page, pageSize) {
    return new Promise( /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(resolve, reject) {
        var count, start, listPatient;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return db.Patient.count({
                include: [{
                  model: db.SharePatient,
                  where: {
                    idSharedPatientOfDoctor: idSharedPatientOfDoctor,
                    idOwnerDoctor: idOwnerDoctor
                  }
                }]
              });
            case 3:
              count = _context8.sent;
              if (!(count > 0)) {
                _context8.next = 12;
                break;
              }
              start = (page - 1) * pageSize;
              _context8.next = 8;
              return db.Patient.findAll({
                include: [{
                  model: db.SharePatient,
                  where: {
                    idSharedPatientOfDoctor: idSharedPatientOfDoctor,
                    idOwnerDoctor: idOwnerDoctor
                  }
                }],
                offset: start,
                limit: Number(pageSize),
                order: [['createdAt', 'DESC']],
                raw: true
              });
            case 8:
              listPatient = _context8.sent;
              if (listPatient.length > 0) {
                resolve({
                  status: 200,
                  message: 'get patient successfully',
                  data: listPatient,
                  count: count
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get patient failed',
                  data: [],
                  count: 0
                });
              }
              _context8.next = 13;
              break;
            case 12:
              resolve({
                status: 200,
                message: 'get patient successfully',
                data: [],
                count: 0
              });
            case 13:
              _context8.next = 18;
              break;
            case 15:
              _context8.prev = 15;
              _context8.t0 = _context8["catch"](0);
              reject(_context8.t0);
            case 18:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 15]]);
      }));
      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    }());
  },
  deleteShareDoctor: function deleteShareDoctor(idSharedPatientOfDoctor, idOwnerDoctor) {
    return new Promise( /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(resolve, reject) {
        var checkDoctorSharePatient;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return db.SharePatient.findAll({
                where: {
                  idSharedPatientOfDoctor: idSharedPatientOfDoctor,
                  idOwnerDoctor: idOwnerDoctor
                }
              });
            case 3:
              checkDoctorSharePatient = _context9.sent;
              if (!(checkDoctorSharePatient.length > 0)) {
                _context9.next = 10;
                break;
              }
              _context9.next = 7;
              return db.SharePatient.destroy({
                where: {
                  idSharedPatientOfDoctor: idSharedPatientOfDoctor,
                  idOwnerDoctor: idOwnerDoctor
                }
              });
            case 7:
              resolve({
                status: 200,
                message: 'delete share doctor successfully'
              });
              _context9.next = 11;
              break;
            case 10:
              resolve({
                status: 202,
                message: 'share doctor is not found'
              });
            case 11:
              _context9.next = 16;
              break;
            case 13:
              _context9.prev = 13;
              _context9.t0 = _context9["catch"](0);
              reject(_context9.t0);
            case 16:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[0, 13]]);
      }));
      return function (_x17, _x18) {
        return _ref9.apply(this, arguments);
      };
    }());
  }
};
var _default = sharePatientServices;
exports["default"] = _default;