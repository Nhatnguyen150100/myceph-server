'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _libraryImagePatientServices = _interopRequireDefault(require("../services/libraryImagePatientServices"));
var _patientServices = _interopRequireDefault(require("../services/patientServices"));
var libraryImagePatientController = {
  getListImage: function () {
    var _getListImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$libraryImagePa, status, message, data, _yield$libraryImagePa2, _status, _message, _data, _yield$libraryImagePa3, _status2, _message2, _data2;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(req.query.typeImages === 'radiography')) {
              _context.next = 11;
              break;
            }
            _context.next = 4;
            return _libraryImagePatientServices["default"].getListImage(req.params.id, [1, 2, 3, 4]);
          case 4:
            _yield$libraryImagePa = _context.sent;
            status = _yield$libraryImagePa.status;
            message = _yield$libraryImagePa.message;
            data = _yield$libraryImagePa.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context.next = 28;
            break;
          case 11:
            if (!(req.query.typeImages === 'extraoral')) {
              _context.next = 21;
              break;
            }
            _context.next = 14;
            return _libraryImagePatientServices["default"].getListImage(req.params.id, [5, 6, 7, 8, 9]);
          case 14:
            _yield$libraryImagePa2 = _context.sent;
            _status = _yield$libraryImagePa2.status;
            _message = _yield$libraryImagePa2.message;
            _data = _yield$libraryImagePa2.data;
            res.status(_status).json({
              message: _message,
              data: _data
            });
            _context.next = 28;
            break;
          case 21:
            _context.next = 23;
            return _libraryImagePatientServices["default"].getListImage(req.params.id, [10, 11, 12, 13, 14, 15]);
          case 23:
            _yield$libraryImagePa3 = _context.sent;
            _status2 = _yield$libraryImagePa3.status;
            _message2 = _yield$libraryImagePa3.message;
            _data2 = _yield$libraryImagePa3.data;
            res.status(_status2).json({
              message: _message2,
              data: _data2
            });
          case 28:
            _context.next = 34;
            break;
          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](0);
            _winston["default"].libraryImagePatient.error(_context.t0);
            res.status(500).json({
              message: _context.t0
            });
          case 34:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 30]]);
    }));
    function getListImage(_x, _x2) {
      return _getListImage.apply(this, arguments);
    }
    return getListImage;
  }(),
  uploadImage: function () {
    var _uploadImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$libraryImagePa4, status, message, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _libraryImagePatientServices["default"].upLoadImage(req.params.id, req.body, req.body.typeImages);
          case 3:
            _yield$libraryImagePa4 = _context2.sent;
            status = _yield$libraryImagePa4.status;
            message = _yield$libraryImagePa4.message;
            data = _yield$libraryImagePa4.data;
            _patientServices["default"].saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
              res.status(status).json({
                message: message,
                data: data
              });
            });
            _context2.next = 14;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            _winston["default"].libraryImagePatient.error(_context2.t0);
            res.status(500).json({
              message: _context2.t0
            });
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function uploadImage(_x3, _x4) {
      return _uploadImage.apply(this, arguments);
    }
    return uploadImage;
  }(),
  updateArrayImagePatient: function () {
    var _updateArrayImagePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _yield$libraryImagePa5, status, message, data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _libraryImagePatientServices["default"].updateArrayImage(req.params.id, req.body.newDate, req.body.oldDate, req.body.typeImages);
          case 3:
            _yield$libraryImagePa5 = _context3.sent;
            status = _yield$libraryImagePa5.status;
            message = _yield$libraryImagePa5.message;
            data = _yield$libraryImagePa5.data;
            _patientServices["default"].saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
              res.status(status).json({
                message: message,
                data: data
              });
            });
            _context3.next = 14;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            _winston["default"].libraryImagePatient.error(_context3.t0);
            res.status(500).json({
              message: _context3.t0
            });
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    function updateArrayImagePatient(_x5, _x6) {
      return _updateArrayImagePatient.apply(this, arguments);
    }
    return updateArrayImagePatient;
  }(),
  updateImagePatient: function () {
    var _updateImagePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _yield$libraryImagePa6, status, message, data;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _libraryImagePatientServices["default"].updateImage(req.params.id, req.body.idImage, req.body.consultationDate, req.body.typeImage, req.body.linkImage, req.body.typeImages);
          case 3:
            _yield$libraryImagePa6 = _context4.sent;
            status = _yield$libraryImagePa6.status;
            message = _yield$libraryImagePa6.message;
            data = _yield$libraryImagePa6.data;
            _patientServices["default"].saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
              res.status(status).json({
                message: message,
                data: data
              });
            });
            _context4.next = 14;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            _winston["default"].libraryImagePatient.error(_context4.t0);
            res.status(500).json({
              message: _context4.t0
            });
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    function updateImagePatient(_x7, _x8) {
      return _updateImagePatient.apply(this, arguments);
    }
    return updateImagePatient;
  }(),
  deleteImagePatient: function () {
    var _deleteImagePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var _yield$libraryImagePa7, status, message, data, _yield$libraryImagePa8, _status3, _message3, _data3, _yield$libraryImagePa9, _status4, _message4, _data4;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (!(req.query.typeImages === 'radiography')) {
              _context5.next = 11;
              break;
            }
            _context5.next = 4;
            return _libraryImagePatientServices["default"].deleteImage(req.params.id, req.query.idImage, [1, 2, 3, 4]);
          case 4:
            _yield$libraryImagePa7 = _context5.sent;
            status = _yield$libraryImagePa7.status;
            message = _yield$libraryImagePa7.message;
            data = _yield$libraryImagePa7.data;
            _patientServices["default"].saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
              res.status(status).json({
                message: message,
                data: data
              });
            });
            _context5.next = 28;
            break;
          case 11:
            if (!(req.query.typeImages === 'extraoral')) {
              _context5.next = 21;
              break;
            }
            _context5.next = 14;
            return _libraryImagePatientServices["default"].deleteImage(req.params.id, req.query.idImage, [5, 6, 7, 8, 9]);
          case 14:
            _yield$libraryImagePa8 = _context5.sent;
            _status3 = _yield$libraryImagePa8.status;
            _message3 = _yield$libraryImagePa8.message;
            _data3 = _yield$libraryImagePa8.data;
            _patientServices["default"].saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
              res.status(_status3).json({
                message: _message3,
                data: _data3
              });
            });
            _context5.next = 28;
            break;
          case 21:
            _context5.next = 23;
            return _libraryImagePatientServices["default"].deleteImage(req.params.id, req.query.idImage, [10, 11, 12, 13, 14, 15]);
          case 23:
            _yield$libraryImagePa9 = _context5.sent;
            _status4 = _yield$libraryImagePa9.status;
            _message4 = _yield$libraryImagePa9.message;
            _data4 = _yield$libraryImagePa9.data;
            _patientServices["default"].saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
              res.status(_status4).json({
                message: _message4,
                data: _data4
              });
            });
          case 28:
            _context5.next = 34;
            break;
          case 30:
            _context5.prev = 30;
            _context5.t0 = _context5["catch"](0);
            _winston["default"].libraryImagePatient.error(_context5.t0);
            res.status(500).json({
              message: _context5.t0
            });
          case 34:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 30]]);
    }));
    function deleteImagePatient(_x9, _x10) {
      return _deleteImagePatient.apply(this, arguments);
    }
    return deleteImagePatient;
  }()
};
var _default = libraryImagePatientController;
exports["default"] = _default;