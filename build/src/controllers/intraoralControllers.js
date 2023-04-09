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
var _require = require("../services/intraoralServices"),
  intraoralServices = _require["default"];
var intraoralControllers = {
  getIntraoral: function () {
    var _getIntraoral = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$intraoralServi, status, message, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return intraoralServices.getIntraoral(req.params.id);
          case 3:
            _yield$intraoralServi = _context.sent;
            status = _yield$intraoralServi.status;
            message = _yield$intraoralServi.message;
            data = _yield$intraoralServi.data;
            res.status(status).json({
              message: message,
              data: data
            });
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            _winston["default"].intraoral.error(_context.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    function getIntraoral(_x, _x2) {
      return _getIntraoral.apply(this, arguments);
    }
    return getIntraoral;
  }(),
  updateIntraoral: function () {
    var _updateIntraoral = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$intraoralServi2, status, message, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return intraoralServices.updateIntraoral(req.params.id, req.body);
          case 3:
            _yield$intraoralServi2 = _context2.sent;
            status = _yield$intraoralServi2.status;
            message = _yield$intraoralServi2.message;
            data = _yield$intraoralServi2.data;
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
            _winston["default"].intraoral.error(_context2.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function updateIntraoral(_x3, _x4) {
      return _updateIntraoral.apply(this, arguments);
    }
    return updateIntraoral;
  }()
};
var _default = intraoralControllers;
exports["default"] = _default;