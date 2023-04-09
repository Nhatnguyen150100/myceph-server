'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _patientServices = _interopRequireDefault(require("../services/patientServices"));
var _require = require("../services/listOfIssueServices"),
  listOfIssueServices = _require["default"];
var listOfIssueControllers = {
  getListOfIssue: function () {
    var _getListOfIssue = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$listOfIssueSer, status, message, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return listOfIssueServices.getListOfIssue(req.params.id);
          case 3:
            _yield$listOfIssueSer = _context.sent;
            status = _yield$listOfIssueSer.status;
            message = _yield$listOfIssueSer.message;
            data = _yield$listOfIssueSer.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            _winston["default"].listOfIssue.error(_context.t0);
            res.status(500).json({
              message: _context.t0
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    function getListOfIssue(_x, _x2) {
      return _getListOfIssue.apply(this, arguments);
    }
    return getListOfIssue;
  }(),
  createIssue: function () {
    var _createIssue = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$listOfIssueSer2, status, message, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return listOfIssueServices.createIssue(req.params.id, req.body);
          case 3:
            _yield$listOfIssueSer2 = _context2.sent;
            status = _yield$listOfIssueSer2.status;
            message = _yield$listOfIssueSer2.message;
            data = _yield$listOfIssueSer2.data;
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
            _winston["default"].listOfIssue.error(_context2.t0);
            res.status(500).json({
              message: _context2.t0
            });
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function createIssue(_x3, _x4) {
      return _createIssue.apply(this, arguments);
    }
    return createIssue;
  }(),
  updateIssue: function () {
    var _updateIssue = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _yield$listOfIssueSer3, status, message, data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return listOfIssueServices.updateIssue(req.params.id, req.query.idIssue, req.body);
          case 3:
            _yield$listOfIssueSer3 = _context3.sent;
            status = _yield$listOfIssueSer3.status;
            message = _yield$listOfIssueSer3.message;
            data = _yield$listOfIssueSer3.data;
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
            _winston["default"].listOfIssue.error(_context3.t0);
            res.status(500).json({
              message: _context3.t0
            });
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    function updateIssue(_x5, _x6) {
      return _updateIssue.apply(this, arguments);
    }
    return updateIssue;
  }(),
  deleteIssue: function () {
    var _deleteIssue = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _yield$listOfIssueSer4, status, message, data;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return listOfIssueServices.deleteIssue(req.params.id, req.query.idIssue);
          case 3:
            _yield$listOfIssueSer4 = _context4.sent;
            status = _yield$listOfIssueSer4.status;
            message = _yield$listOfIssueSer4.message;
            data = _yield$listOfIssueSer4.data;
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
            _winston["default"].listOfIssue.error(_context4.t0);
            res.status(500).json({
              message: _context4.t0
            });
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    function deleteIssue(_x7, _x8) {
      return _deleteIssue.apply(this, arguments);
    }
    return deleteIssue;
  }()
};
var _default = listOfIssueControllers;
exports["default"] = _default;