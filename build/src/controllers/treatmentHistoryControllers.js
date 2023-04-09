'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _require = require("../services/patientServices"),
  patientServices = _require["default"];
var _require2 = require("../services/treatmentHistoryServices"),
  treatmentHistoryServices = _require2["default"];
var treatmentHistoryControllers = {
  createTreatmentHistory: function () {
    var _createTreatmentHistory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$treatmentHisto, status, message, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return treatmentHistoryServices.createTreatmentHistory(req.params.id, req.body);
          case 3:
            _yield$treatmentHisto = _context.sent;
            status = _yield$treatmentHisto.status;
            message = _yield$treatmentHisto.message;
            data = _yield$treatmentHisto.data;
            patientServices.saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
              res.status(status).json({
                message: message,
                data: data
              });
            });
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            _winston["default"].treatmentHistory.error(_context.t0);
            res.status(500).json({
              message: _context.t0
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    function createTreatmentHistory(_x, _x2) {
      return _createTreatmentHistory.apply(this, arguments);
    }
    return createTreatmentHistory;
  }(),
  getTreatmentHistory: function () {
    var _getTreatmentHistory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$treatmentHisto2, status, message, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return treatmentHistoryServices.getTreatmentHistory(req.params.id);
          case 3:
            _yield$treatmentHisto2 = _context2.sent;
            status = _yield$treatmentHisto2.status;
            message = _yield$treatmentHisto2.message;
            data = _yield$treatmentHisto2.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context2.next = 14;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            _winston["default"].treatmentHistory.error(_context2.t0);
            res.status(500).json({
              message: _context2.t0
            });
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function getTreatmentHistory(_x3, _x4) {
      return _getTreatmentHistory.apply(this, arguments);
    }
    return getTreatmentHistory;
  }(),
  updateTreatmentHistory: function () {
    var _updateTreatmentHistory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _yield$treatmentHisto3, status, message, data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return treatmentHistoryServices.updateTreatmentHistory(req.params.id, req.query.idHistory, req.body);
          case 3:
            _yield$treatmentHisto3 = _context3.sent;
            status = _yield$treatmentHisto3.status;
            message = _yield$treatmentHisto3.message;
            data = _yield$treatmentHisto3.data;
            patientServices.saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
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
            _winston["default"].treatmentHistory.error(_context3.t0);
            res.status(500).json({
              message: _context3.t0
            });
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    function updateTreatmentHistory(_x5, _x6) {
      return _updateTreatmentHistory.apply(this, arguments);
    }
    return updateTreatmentHistory;
  }(),
  deleteTreatmentHistory: function () {
    var _deleteTreatmentHistory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _yield$treatmentHisto4, status, message, data;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return treatmentHistoryServices.deleteTreatmentHistory(req.params.id, req.query.idHistory);
          case 3:
            _yield$treatmentHisto4 = _context4.sent;
            status = _yield$treatmentHisto4.status;
            message = _yield$treatmentHisto4.message;
            data = _yield$treatmentHisto4.data;
            patientServices.saveUpdateDoctor(req.params.id, req.query.idDoctor)["finally"](function () {
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
            _winston["default"].treatmentHistory.error(_context4.t0);
            res.status(500).json({
              message: _context4.t0
            });
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    function deleteTreatmentHistory(_x7, _x8) {
      return _deleteTreatmentHistory.apply(this, arguments);
    }
    return deleteTreatmentHistory;
  }()
};
var _default = treatmentHistoryControllers;
exports["default"] = _default;