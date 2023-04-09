'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _sharePatientServices = _interopRequireDefault(require("../services/sharePatientServices"));
var sharePatientController = {
  sharePatient: function () {
    var _sharePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$sharePatientSe, status, message;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _sharePatientServices["default"].sharePatient(req.body, req.body.idSharedPatient, req.body.idOwnerDoctor);
          case 3:
            _yield$sharePatientSe = _context.sent;
            status = _yield$sharePatientSe.status;
            message = _yield$sharePatientSe.message;
            res.status(status).json({
              message: message
            });
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            _winston["default"].sharePatient.error(_context.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    function sharePatient(_x, _x2) {
      return _sharePatient.apply(this, arguments);
    }
    return sharePatient;
  }(),
  removeSharePatient: function () {
    var _removeSharePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$sharePatientSe2, status, message;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _sharePatientServices["default"].removeSharePatient(req.body, req.body.idSharedPatient, req.body.idOwnerDoctor);
          case 3:
            _yield$sharePatientSe2 = _context2.sent;
            status = _yield$sharePatientSe2.status;
            message = _yield$sharePatientSe2.message;
            res.status(status).json({
              message: message
            });
            _context2.next = 13;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            _winston["default"].sharePatient.error(_context2.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    function removeSharePatient(_x3, _x4) {
      return _removeSharePatient.apply(this, arguments);
    }
    return removeSharePatient;
  }(),
  updateRoleOfOwnerDoctor: function () {
    var _updateRoleOfOwnerDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _yield$sharePatientSe3, status, message;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _sharePatientServices["default"].updateRoleOfOwnerDoctor(req.body, req.body.idSharedPatient, req.body.idOwnerDoctor, req.body.roleOfOwnerDoctor);
          case 3:
            _yield$sharePatientSe3 = _context3.sent;
            status = _yield$sharePatientSe3.status;
            message = _yield$sharePatientSe3.message;
            res.status(status).json({
              message: message
            });
            _context3.next = 13;
            break;
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            _winston["default"].sharePatient.error(_context3.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 9]]);
    }));
    function updateRoleOfOwnerDoctor(_x5, _x6) {
      return _updateRoleOfOwnerDoctor.apply(this, arguments);
    }
    return updateRoleOfOwnerDoctor;
  }(),
  getDoctorSharedPatient: function () {
    var _getDoctorSharedPatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _yield$sharePatientSe4, status, message, data;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _sharePatientServices["default"].getDoctorSharedPatient(req.params.id);
          case 3:
            _yield$sharePatientSe4 = _context4.sent;
            status = _yield$sharePatientSe4.status;
            message = _yield$sharePatientSe4.message;
            data = _yield$sharePatientSe4.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context4.next = 14;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            _winston["default"].sharePatient.error(_context4.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    function getDoctorSharedPatient(_x7, _x8) {
      return _getDoctorSharedPatient.apply(this, arguments);
    }
    return getDoctorSharedPatient;
  }(),
  getAllDoctorSharePatient: function () {
    var _getAllDoctorSharePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var _yield$sharePatientSe5, status, message, data, count;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _sharePatientServices["default"].getAllDoctorSharePatient(req.params.idSharedPatientOfDoctor, req.query.page, req.query.pageSize);
          case 3:
            _yield$sharePatientSe5 = _context5.sent;
            status = _yield$sharePatientSe5.status;
            message = _yield$sharePatientSe5.message;
            data = _yield$sharePatientSe5.data;
            count = _yield$sharePatientSe5.count;
            res.status(status).json({
              message: message,
              data: data,
              count: count
            });
            _context5.next = 15;
            break;
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            _winston["default"].sharePatient.error(_context5.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 15:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 11]]);
    }));
    function getAllDoctorSharePatient(_x9, _x10) {
      return _getAllDoctorSharePatient.apply(this, arguments);
    }
    return getAllDoctorSharePatient;
  }(),
  getListSharePatientOfDoctor: function () {
    var _getListSharePatientOfDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var _yield$sharePatientSe6, status, message, data, count;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _sharePatientServices["default"].getListSharePatientOfDoctor(req.params.idSharedPatientOfDoctor, req.query.idOwnerDoctor, req.query.page, req.query.pageSize);
          case 3:
            _yield$sharePatientSe6 = _context6.sent;
            status = _yield$sharePatientSe6.status;
            message = _yield$sharePatientSe6.message;
            data = _yield$sharePatientSe6.data;
            count = _yield$sharePatientSe6.count;
            res.status(status).json({
              message: message,
              data: data,
              count: count
            });
            _context6.next = 15;
            break;
          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);
            _winston["default"].sharePatient.error(_context6.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 11]]);
    }));
    function getListSharePatientOfDoctor(_x11, _x12) {
      return _getListSharePatientOfDoctor.apply(this, arguments);
    }
    return getListSharePatientOfDoctor;
  }(),
  deleteShareDoctor: function () {
    var _deleteShareDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var _yield$sharePatientSe7, status, message;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _sharePatientServices["default"].deleteShareDoctor(req.params.idSharedPatientOfDoctor, req.query.idOwnerDoctor);
          case 3:
            _yield$sharePatientSe7 = _context7.sent;
            status = _yield$sharePatientSe7.status;
            message = _yield$sharePatientSe7.message;
            res.status(status).json({
              message: message
            });
            _context7.next = 13;
            break;
          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            _winston["default"].sharePatient.error(_context7.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 9]]);
    }));
    function deleteShareDoctor(_x13, _x14) {
      return _deleteShareDoctor.apply(this, arguments);
    }
    return deleteShareDoctor;
  }(),
  getListSharePatientOfDoctorInClinic: function () {
    var _getListSharePatientOfDoctorInClinic = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
      var _yield$sharePatientSe8, status, message, data, count;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _sharePatientServices["default"].getListSharePatientOfDoctorInClinic(req.params.idSharedPatientOfClinic, req.query.idOwnerDoctor, req.query.page, req.query.pageSize);
          case 3:
            _yield$sharePatientSe8 = _context8.sent;
            status = _yield$sharePatientSe8.status;
            message = _yield$sharePatientSe8.message;
            data = _yield$sharePatientSe8.data;
            count = _yield$sharePatientSe8.count;
            res.status(status).json({
              message: message,
              data: data,
              count: count
            });
            _context8.next = 15;
            break;
          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](0);
            _winston["default"].sharePatient.error(_context8.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 15:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 11]]);
    }));
    function getListSharePatientOfDoctorInClinic(_x15, _x16) {
      return _getListSharePatientOfDoctorInClinic.apply(this, arguments);
    }
    return getListSharePatientOfDoctorInClinic;
  }(),
  getListSharePatientOfCurrentDoctor: function () {
    var _getListSharePatientOfCurrentDoctor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
      var _yield$sharePatientSe9, status, message, data, count;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _sharePatientServices["default"].getListSharePatientOfCurrentDoctor(req.params.idOwnerDoctor, req.query.page, req.query.pageSize, req.query.nameSearch);
          case 3:
            _yield$sharePatientSe9 = _context9.sent;
            status = _yield$sharePatientSe9.status;
            message = _yield$sharePatientSe9.message;
            data = _yield$sharePatientSe9.data;
            count = _yield$sharePatientSe9.count;
            res.status(status).json({
              message: message,
              data: data,
              count: count
            });
            _context9.next = 15;
            break;
          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);
            _winston["default"].sharePatient.error(_context9.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 15:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 11]]);
    }));
    function getListSharePatientOfCurrentDoctor(_x17, _x18) {
      return _getListSharePatientOfCurrentDoctor.apply(this, arguments);
    }
    return getListSharePatientOfCurrentDoctor;
  }()
};
var _default = sharePatientController;
exports["default"] = _default;