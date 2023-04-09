'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var _require = require("../services/doctorServices"),
  doctorServices = _require["default"];
var publicKey = _fs["default"].readFileSync(_path["default"].join(__dirname, '/token/public.pem'));
var salt = _bcrypt["default"].genSaltSync(10);
var doctorController = {
  findDoctorEmail: function findDoctorEmail(req, res) {
    var doctor = req.doctor;
    if (doctor) {
      res.status(200).json({
        email: doctor.email
      });
    } else {
      _winston["default"].doctor.error(error);
      res.status(500).json({
        message: 'server error'
      });
    }
  },
  createDoctorDev: function () {
    var _createDoctorDev = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var hashPassword, _yield$doctorServices, status, message;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _bcrypt["default"].hash(req.body.password, salt);
          case 3:
            hashPassword = _context.sent;
            _context.next = 6;
            return doctorServices.createNewDoctor(req.body.email, hashPassword);
          case 6:
            _yield$doctorServices = _context.sent;
            status = _yield$doctorServices.status;
            message = _yield$doctorServices.message;
            res.status(status).json({
              message: message
            });
            _context.next = 16;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            _winston["default"].doctor.error(_context.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    function createDoctorDev(_x, _x2) {
      return _createDoctorDev.apply(this, arguments);
    }
    return createDoctorDev;
  }(),
  sendVerifyEmailDoctor: function () {
    var _sendVerifyEmailDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$doctorServices2, status, message;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return doctorServices.sendVerifyEmail(req.body);
          case 3:
            _yield$doctorServices2 = _context2.sent;
            status = _yield$doctorServices2.status;
            message = _yield$doctorServices2.message;
            res.status(status).json({
              message: message
            });
            _context2.next = 13;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            _winston["default"].doctor.error(_context2.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    function sendVerifyEmailDoctor(_x3, _x4) {
      return _sendVerifyEmailDoctor.apply(this, arguments);
    }
    return sendVerifyEmailDoctor;
  }(),
  sendVerifyEmailResetPasswordDoctor: function () {
    var _sendVerifyEmailResetPasswordDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _yield$doctorServices3, status, message;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return doctorServices.sendVerifyEmailResetPassword(req.body);
          case 3:
            _yield$doctorServices3 = _context3.sent;
            status = _yield$doctorServices3.status;
            message = _yield$doctorServices3.message;
            res.status(status).json({
              message: message
            });
            _context3.next = 13;
            break;
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            _winston["default"].doctor.error(_context3.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 9]]);
    }));
    function sendVerifyEmailResetPasswordDoctor(_x5, _x6) {
      return _sendVerifyEmailResetPasswordDoctor.apply(this, arguments);
    }
    return sendVerifyEmailResetPasswordDoctor;
  }(),
  verifyResetEmailDoctor: function () {
    var _verifyResetEmailDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            try {
              _jsonwebtoken["default"].verify(req.query.token, publicKey, /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(err, email) {
                  var _yield$doctorServices4, status, message;
                  return _regenerator["default"].wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!err) {
                          _context4.next = 4;
                          break;
                        }
                        res.status(500).send("The check email has expired, please go back to the registration page");
                        _context4.next = 10;
                        break;
                      case 4:
                        _context4.next = 6;
                        return doctorServices.resetPassword(req.query.email, req.query.password);
                      case 6:
                        _yield$doctorServices4 = _context4.sent;
                        status = _yield$doctorServices4.status;
                        message = _yield$doctorServices4.message;
                        if (status === 200) res.redirect("".concat(process.env.BASE_URL_CLIENT, "/login"));else res.status(status).send(message);
                      case 10:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x9, _x10) {
                  return _ref.apply(this, arguments);
                };
              }());
            } catch (error) {
              _winston["default"].doctor.error(error);
              res.status(500).json({
                message: 'server error'
              });
            }
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    function verifyResetEmailDoctor(_x7, _x8) {
      return _verifyResetEmailDoctor.apply(this, arguments);
    }
    return verifyResetEmailDoctor;
  }(),
  getAllDoctorByEmailSearch: function () {
    var _getAllDoctorByEmailSearch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var _yield$doctorServices5, status, message, data;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return doctorServices.getAllDoctorByEmailSearch(req.params.email, req.query.currentEmailDoctor);
          case 3:
            _yield$doctorServices5 = _context6.sent;
            status = _yield$doctorServices5.status;
            message = _yield$doctorServices5.message;
            data = _yield$doctorServices5.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context6.next = 14;
            break;
          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            _winston["default"].doctor.error(_context6.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 10]]);
    }));
    function getAllDoctorByEmailSearch(_x11, _x12) {
      return _getAllDoctorByEmailSearch.apply(this, arguments);
    }
    return getAllDoctorByEmailSearch;
  }(),
  verifyEmailDoctor: function () {
    var _verifyEmailDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var doctor, _yield$doctorServices6, status, message;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            doctor = _jsonwebtoken["default"].verify(req.query.token, publicKey);
            if (!doctor) {
              _context7.next = 11;
              break;
            }
            _context7.next = 5;
            return doctorServices.createNewDoctor(req.query.email, req.query.password);
          case 5:
            _yield$doctorServices6 = _context7.sent;
            status = _yield$doctorServices6.status;
            message = _yield$doctorServices6.message;
            if (status === 200) res.status(status).redirect("".concat(process.env.BASE_URL_CLIENT, "/login"));else res.status(status).send(message);
            _context7.next = 12;
            break;
          case 11:
            res.status(400).send('failed to verify token');
          case 12:
            _context7.next = 18;
            break;
          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](0);
            _winston["default"].doctor.error(_context7.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 18:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 14]]);
    }));
    function verifyEmailDoctor(_x13, _x14) {
      return _verifyEmailDoctor.apply(this, arguments);
    }
    return verifyEmailDoctor;
  }(),
  getInformationDoctorById: function () {
    var _getInformationDoctorById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
      var doctor;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            try {
              doctor = req.doctor;
              delete doctor.password;
              res.status(200).json({
                message: 'get information doctor successfully',
                data: doctor
              });
            } catch (error) {
              _winston["default"].doctor.error(error);
              res.status(500).json({
                message: 'server error'
              });
            }
          case 1:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    function getInformationDoctorById(_x15, _x16) {
      return _getInformationDoctorById.apply(this, arguments);
    }
    return getInformationDoctorById;
  }(),
  getInformationDoctor: function () {
    var _getInformationDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
      var doctor;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            try {
              doctor = req.doctor;
              delete doctor.password;
              res.status(200).json({
                message: 'get information doctor successfully',
                data: doctor
              });
            } catch (error) {
              _winston["default"].doctor.error(error);
              res.status(500).json({
                message: 'server error'
              });
            }
          case 1:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    function getInformationDoctor(_x17, _x18) {
      return _getInformationDoctor.apply(this, arguments);
    }
    return getInformationDoctor;
  }(),
  updateInformationDoctor: function () {
    var _updateInformationDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
      var _yield$doctorServices7, status, message, data;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return doctorServices.updateDoctorInformation(req.params.id, req.body);
          case 3:
            _yield$doctorServices7 = _context10.sent;
            status = _yield$doctorServices7.status;
            message = _yield$doctorServices7.message;
            data = _yield$doctorServices7.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context10.next = 14;
            break;
          case 10:
            _context10.prev = 10;
            _context10.t0 = _context10["catch"](0);
            _winston["default"].doctor.error(_context10.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 10]]);
    }));
    function updateInformationDoctor(_x19, _x20) {
      return _updateInformationDoctor.apply(this, arguments);
    }
    return updateInformationDoctor;
  }(),
  getAllClinicFromDoctor: function () {
    var _getAllClinicFromDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
      var _yield$doctorServices8, status, message, data;
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return doctorServices.getAllClinicFromDoctor(req.params.id);
          case 3:
            _yield$doctorServices8 = _context11.sent;
            status = _yield$doctorServices8.status;
            message = _yield$doctorServices8.message;
            data = _yield$doctorServices8.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context11.next = 14;
            break;
          case 10:
            _context11.prev = 10;
            _context11.t0 = _context11["catch"](0);
            _winston["default"].doctor.error(_context11.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 10]]);
    }));
    function getAllClinicFromDoctor(_x21, _x22) {
      return _getAllClinicFromDoctor.apply(this, arguments);
    }
    return getAllClinicFromDoctor;
  }()
};
var _default = doctorController;
exports["default"] = _default;