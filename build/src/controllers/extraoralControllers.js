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
var _require = require("../services/extraoralServices"),
  extraoralServices = _require["default"];
var extraoralControllers = {
  getExtraoral: function () {
    var _getExtraoral = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$extraoralServi, status, message, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return extraoralServices.getExtraoral(req.params.id);
          case 3:
            _yield$extraoralServi = _context.sent;
            status = _yield$extraoralServi.status;
            message = _yield$extraoralServi.message;
            data = _yield$extraoralServi.data;
            _winston["default"].extraoral.info(data);
            res.status(status).json({
              message: message,
              data: data
            });
            _context.next = 15;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            _winston["default"].extraoral.error(_context.t0);
            res.status(500).json({
              message: _context.t0
            });
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    function getExtraoral(_x, _x2) {
      return _getExtraoral.apply(this, arguments);
    }
    return getExtraoral;
  }(),
  updateExtraoral: function () {
    var _updateExtraoral = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$extraoralServi2, status, message, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return extraoralServices.updateExtraoral(req.params.id, req.body);
          case 3:
            _yield$extraoralServi2 = _context2.sent;
            status = _yield$extraoralServi2.status;
            message = _yield$extraoralServi2.message;
            data = _yield$extraoralServi2.data;
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
            _winston["default"].extraoral.error(_context2.t0);
            res.status(500).json({
              message: _context2.t0
            });
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function updateExtraoral(_x3, _x4) {
      return _updateExtraoral.apply(this, arguments);
    }
    return updateExtraoral;
  }()
};
var _default = extraoralControllers;
exports["default"] = _default;