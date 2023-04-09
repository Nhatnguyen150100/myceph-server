'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _models = _interopRequireWildcard(require("../models"));
var _mailerServices = _interopRequireDefault(require("./mailerServices"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _mail = _interopRequireDefault(require("../config/mail.config"));
var _sequelize = require("sequelize");
var _winston = _interopRequireDefault(require("../config/winston"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var salt = _bcrypt["default"].genSaltSync(10);
var parentDir = _path["default"].join(__dirname, '..');
var privateKey = _fs["default"].readFileSync(_path["default"].join(parentDir, './controllers/token/private.pem'));
var doctorServices = {
  createNewDoctor: function createNewDoctor(email, password) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _models["default"].Doctor.create({
                email: email,
                password: password
              });
            case 3:
              resolve({
                status: 200,
                message: 'Create new doctor successfully.'
              });
              _context.next = 10;
              break;
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              _winston["default"].doctor.error(_context.t0);
              reject(_context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 6]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  resetPassword: function resetPassword(email, password) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var update;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _models["default"].Doctor.update({
                password: password
              }, {
                where: {
                  email: email
                }
              });
            case 3:
              update = _context2.sent;
              if (update) {
                resolve({
                  status: 200,
                  message: 'reset password successfully'
                });
              } else {
                resolve({
                  status: 202,
                  message: 'reset password failed'
                });
              }
              _context2.next = 11;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              _winston["default"].doctor.error(_context2.t0);
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
  getAllDoctorByEmailSearch: function getAllDoctorByEmailSearch(emailDoctor, currentEmailDoctor) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
        var listDoctor;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _models.sequelize.query("select id,email,fullName,avatar from Doctors where Doctors.email like ? and Doctors.email != ? limit 5", {
                replacements: ['%' + emailDoctor + '%', currentEmailDoctor],
                type: _sequelize.QueryTypes.SELECT
              });
            case 3:
              listDoctor = _context3.sent;
              if (listDoctor.length >= 0) {
                resolve({
                  status: 200,
                  message: 'get list doctor successfully',
                  data: listDoctor
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get list doctor failed',
                  data: []
                });
              }
              _context3.next = 11;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              _winston["default"].doctor.error(_context3.t0);
              reject(_context3.t0);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 7]]);
      }));
      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  },
  sendVerifyEmailResetPassword: function sendVerifyEmailResetPassword(data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
        var hashEmail, hashPassword;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              hashEmail = _jsonwebtoken["default"].sign({
                email: data.email
              }, privateKey, {
                expiresIn: 60 * 3
              });
              _context4.next = 4;
              return _bcrypt["default"].hash(data.password, salt);
            case 4:
              hashPassword = _context4.sent;
              _mailerServices["default"].sendMail(data.email, _mail["default"].HTML_CONTENT_RESETPASSWOR, "".concat(process.env.BASE_URL_SERVER, "/v1/doctor/resetPassword?email=").concat(data.email, "&password=").concat(hashPassword, "&token=").concat(hashEmail)).then(function () {
                resolve({
                  status: 200,
                  message: 'send verify mail successfully'
                });
              })["catch"](function (err) {
                return reject({
                  status: 500,
                  message: 'send verify mail failed'
                });
              });
              _context4.next = 12;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              _winston["default"].doctor.error(_context4.t0);
              reject(_context4.t0);
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
      }));
      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  },
  sendVerifyEmail: function sendVerifyEmail(data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
        var hashEmail, hashPassword;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              hashEmail = _jsonwebtoken["default"].sign({
                email: data.email
              }, privateKey, {
                expiresIn: 60 * 3
              });
              _context5.next = 4;
              return _bcrypt["default"].hash(data.password, salt);
            case 4:
              hashPassword = _context5.sent;
              _mailerServices["default"].sendMail(data.email, _mail["default"].HTML_CONTENT, "".concat(process.env.BASE_URL_SERVER, "/v1/doctor/verify?email=").concat(data.email, "&password=").concat(hashPassword, "&token=").concat(hashEmail)).then(function () {
                resolve({
                  status: 200,
                  message: 'send verify mail successfully'
                });
              })["catch"](function (err) {
                return reject({
                  status: 500,
                  message: 'send verify mail failed'
                });
              });
              _context5.next = 12;
              break;
            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              _winston["default"].doctor.error(_context5.t0);
              reject(_context5.t0);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 8]]);
      }));
      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }());
  },
  getDoctorFromEmail: function getDoctorFromEmail(email) {
    return new Promise( /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(resolve, reject) {
        var doctor;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _models["default"].Doctor.findOne({
                where: {
                  email: email
                }
              });
            case 3:
              doctor = _context6.sent;
              if (doctor) {
                delete doctor.password;
                resolve({
                  statusDoctor: true,
                  messageDoctor: 'get information of doctor successfully',
                  doctor: doctor
                });
              } else {
                resolve({
                  statusDoctor: false,
                  messageDoctor: "can't find information of doctor",
                  doctor: doctor
                });
              }
              _context6.next = 11;
              break;
            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              _winston["default"].doctor.error(_context6.t0);
              reject(_context6.t0);
            case 11:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 7]]);
      }));
      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }());
  },
  updateDoctorInformation: function updateDoctorInformation(idDoctor, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(resolve, reject) {
        var dataUpdate, doctorUpdate, _data;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              dataUpdate = {
                fullName: data.fullName,
                gender: data.gender,
                birthday: new Date(data.birthday),
                avatar: data.avatar,
                phoneNumber: data.phoneNumber,
                speciality: data.speciality,
                diploma: data.diploma,
                position: data.position,
                description: data.description
              };
              _context7.next = 4;
              return _models["default"].Doctor.update(dataUpdate, {
                where: {
                  id: idDoctor
                }
              });
            case 4:
              doctorUpdate = _context7.sent;
              if (!doctorUpdate) {
                _context7.next = 12;
                break;
              }
              _context7.next = 8;
              return _models["default"].Doctor.findOne({
                where: {
                  id: idDoctor
                }
              });
            case 8:
              _data = _context7.sent;
              resolve({
                status: 200,
                message: 'Update information of doctor successfully',
                data: _data
              });
              _context7.next = 13;
              break;
            case 12:
              resolve({
                status: 202,
                message: 'Update information of doctor failed',
                data: null
              });
            case 13:
              _context7.next = 19;
              break;
            case 15:
              _context7.prev = 15;
              _context7.t0 = _context7["catch"](0);
              _winston["default"].doctor.error(_context7.t0);
              reject(_context7.t0);
            case 19:
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
  getAllClinicFromDoctor: function getAllClinicFromDoctor(idDoctor) {
    return new Promise( /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(resolve, reject) {
        var listMember, listClinic, i;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return _models["default"].MemberOfClinic.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                  idDoctor: idDoctor
                }
              });
            case 3:
              listMember = _context8.sent;
              listClinic = [];
              i = 0;
            case 6:
              if (!(i < listMember.length)) {
                _context8.next = 18;
                break;
              }
              _context8.t0 = listClinic;
              _context8.t1 = Object;
              _context8.next = 11;
              return _models["default"].Clinic.findOne({
                where: {
                  id: listMember[i].idClinic
                }
              });
            case 11:
              _context8.t2 = _context8.sent;
              _context8.t3 = {
                roleOfDoctor: listMember[i].roleOfDoctor
              };
              _context8.t4 = _context8.t1.assign.call(_context8.t1, _context8.t2, _context8.t3);
              _context8.t0.push.call(_context8.t0, _context8.t4);
            case 15:
              i++;
              _context8.next = 6;
              break;
            case 18:
              if (listClinic.length >= 0) {
                resolve({
                  status: 200,
                  message: "Get all clinic successfully",
                  data: listClinic
                });
              } else {
                resolve({
                  status: 202,
                  message: "Get all clinic failed",
                  data: listClinic
                });
              }
              _context8.next = 25;
              break;
            case 21:
              _context8.prev = 21;
              _context8.t5 = _context8["catch"](0);
              _winston["default"].doctor.error(_context8.t5);
              reject(_context8.t5);
            case 25:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 21]]);
      }));
      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    }());
  }
};
var _default = doctorServices;
exports["default"] = _default;