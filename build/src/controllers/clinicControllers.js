'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _clinicServices = _interopRequireDefault(require("../services/clinicServices"));
var _doctorServices = _interopRequireDefault(require("../services/doctorServices"));
var clinicControllers = {
  getAllClinic: function () {
    var _getAllClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$clinicServices, message, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _clinicServices["default"].getAllClinic();
          case 3:
            _yield$clinicServices = _context.sent;
            message = _yield$clinicServices.message;
            data = _yield$clinicServices.data;
            res.status(200).json({
              message: message,
              data: data
            });
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            _winston["default"].clinic.error(_context.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    function getAllClinic(_x, _x2) {
      return _getAllClinic.apply(this, arguments);
    }
    return getAllClinic;
  }(),
  getAllDoctorInClinic: function () {
    var _getAllDoctorInClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$clinicServices2, status, message, data, count, indexOfElement, elementIndex;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _clinicServices["default"].getAllDoctorInClinic(req.params.id, req.query.page, req.query.pageSize, req.query.nameSearch);
          case 3:
            _yield$clinicServices2 = _context2.sent;
            status = _yield$clinicServices2.status;
            message = _yield$clinicServices2.message;
            data = _yield$clinicServices2.data;
            count = _yield$clinicServices2.count;
            indexOfElement = data.findIndex(function (element) {
              return element.email === req.query.currentEmailDoctor;
            });
            if (data && indexOfElement >= 0) {
              elementIndex = data[indexOfElement];
              data.splice(indexOfElement, 1);
              data.unshift(elementIndex);
            }
            res.status(status).json({
              message: message,
              data: data,
              count: count
            });
            _context2.next = 17;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            _winston["default"].clinic.error(_context2.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }));
    function getAllDoctorInClinic(_x3, _x4) {
      return _getAllDoctorInClinic.apply(this, arguments);
    }
    return getAllDoctorInClinic;
  }(),
  createNewClinic: function () {
    var _createNewClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _yield$clinicServices3, idClinic, status, message;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _clinicServices["default"].createNewClinic(req.params.id, req.body);
          case 3:
            _yield$clinicServices3 = _context3.sent;
            idClinic = _yield$clinicServices3.idClinic;
            status = _yield$clinicServices3.status;
            message = _yield$clinicServices3.message;
            res.status(status).json({
              message: message,
              idClinic: idClinic
            });
            _context3.next = 14;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            _winston["default"].clinic.error(_context3.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    function createNewClinic(_x5, _x6) {
      return _createNewClinic.apply(this, arguments);
    }
    return createNewClinic;
  }(),
  updateRoleOfDoctor: function () {
    var _updateRoleOfDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _yield$clinicServices4, status, message;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _clinicServices["default"].updateRoleOfDoctor(req.params.id, req.body.idDoctor, req.body.roleOfDoctor);
          case 3:
            _yield$clinicServices4 = _context4.sent;
            status = _yield$clinicServices4.status;
            message = _yield$clinicServices4.message;
            res.status(status).json({
              message: message
            });
            _context4.next = 13;
            break;
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            _winston["default"].clinic.error(_context4.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 9]]);
    }));
    function updateRoleOfDoctor(_x7, _x8) {
      return _updateRoleOfDoctor.apply(this, arguments);
    }
    return updateRoleOfDoctor;
  }(),
  deleteDoctorFromClinic: function () {
    var _deleteDoctorFromClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var _yield$clinicServices5, status, message;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _clinicServices["default"].deleteDoctorFromClinic(req.clinic.id, req.query.idDoctor);
          case 3:
            _yield$clinicServices5 = _context5.sent;
            status = _yield$clinicServices5.status;
            message = _yield$clinicServices5.message;
            res.status(status).json({
              message: message
            });
            _context5.next = 13;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            _winston["default"].clinic.error(_context5.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 9]]);
    }));
    function deleteDoctorFromClinic(_x9, _x10) {
      return _deleteDoctorFromClinic.apply(this, arguments);
    }
    return deleteDoctorFromClinic;
  }(),
  addDoctorToClinic: function () {
    var _addDoctorToClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var _yield$doctorServices, statusDoctor, messageDoctor, doctor, _yield$clinicServices6, status, message;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _doctorServices["default"].getDoctorFromEmail(req.body.email);
          case 3:
            _yield$doctorServices = _context6.sent;
            statusDoctor = _yield$doctorServices.statusDoctor;
            messageDoctor = _yield$doctorServices.messageDoctor;
            doctor = _yield$doctorServices.doctor;
            if (!statusDoctor) {
              _context6.next = 16;
              break;
            }
            _context6.next = 10;
            return _clinicServices["default"].addDoctorToClinic(req.params.id, doctor.id, req.body.roleOfDoctor);
          case 10:
            _yield$clinicServices6 = _context6.sent;
            status = _yield$clinicServices6.status;
            message = _yield$clinicServices6.message;
            res.status(status).json({
              message: message
            });
            _context6.next = 18;
            break;
          case 16:
            _winston["default"].clinic.error(error);
            res.status(500).json({
              message: 'server error'
            });
          case 18:
            _context6.next = 24;
            break;
          case 20:
            _context6.prev = 20;
            _context6.t0 = _context6["catch"](0);
            _winston["default"].clinic.error(_context6.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 24:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 20]]);
    }));
    function addDoctorToClinic(_x11, _x12) {
      return _addDoctorToClinic.apply(this, arguments);
    }
    return addDoctorToClinic;
  }(),
  getInformationClinic: function () {
    var _getInformationClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var clinic;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            try {
              clinic = req.clinic;
              res.status(200).json({
                message: 'get information clinic successfully',
                data: clinic
              });
            } catch (error) {
              _winston["default"].clinic.error(error);
              res.status(500).json({
                message: 'server error'
              });
            }
          case 1:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    function getInformationClinic(_x13, _x14) {
      return _getInformationClinic.apply(this, arguments);
    }
    return getInformationClinic;
  }(),
  updateInformationClinic: function () {
    var _updateInformationClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
      var _yield$clinicServices7, status, message;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _clinicServices["default"].updateClinicInformation(req.params.id, req.body);
          case 3:
            _yield$clinicServices7 = _context8.sent;
            status = _yield$clinicServices7.status;
            message = _yield$clinicServices7.message;
            res.status(status).json({
              message: message
            });
            _context8.next = 13;
            break;
          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](0);
            _winston["default"].clinic.error(_context8.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 9]]);
    }));
    function updateInformationClinic(_x15, _x16) {
      return _updateInformationClinic.apply(this, arguments);
    }
    return updateInformationClinic;
  }(),
  deleteClinic: function () {
    var _deleteClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
      var _yield$clinicServices8, status, message;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _clinicServices["default"].deleteClinic(req.clinic.id);
          case 3:
            _yield$clinicServices8 = _context9.sent;
            status = _yield$clinicServices8.status;
            message = _yield$clinicServices8.message;
            res.status(status).json({
              message: message
            });
            _context9.next = 13;
            break;
          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](0);
            _winston["default"].clinic.error(_context9.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 9]]);
    }));
    function deleteClinic(_x17, _x18) {
      return _deleteClinic.apply(this, arguments);
    }
    return deleteClinic;
  }()
};
var _default = clinicControllers;
exports["default"] = _default;