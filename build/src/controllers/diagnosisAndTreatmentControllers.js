'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _patientServices = _interopRequireDefault(require("../services/patientServices"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _require = require("../services/diagnosisandtreatmentServices"),
  diagnosisandtreatmentServices = _require["default"];
var diagnosisAndTreatmentControllers = {
  getDiagnosisAndTreatment: function () {
    var _getDiagnosisAndTreatment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _yield$diagnosisandtr, status, message, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return diagnosisandtreatmentServices.getDiagnosisAndTreatment(req.params.id);
          case 3:
            _yield$diagnosisandtr = _context.sent;
            status = _yield$diagnosisandtr.status;
            message = _yield$diagnosisandtr.message;
            data = _yield$diagnosisandtr.data;
            _patientServices["default"].getUpdateDoctor(req.params.id)["finally"](function (value) {
              res.status(status).json(_objectSpread({
                message: message,
                data: data
              }, value));
            });
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(400).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    function getDiagnosisAndTreatment(_x, _x2) {
      return _getDiagnosisAndTreatment.apply(this, arguments);
    }
    return getDiagnosisAndTreatment;
  }(),
  updateDiagnosisAndTreatment: function () {
    var _updateDiagnosisAndTreatment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$diagnosisandtr2, status, message, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return diagnosisandtreatmentServices.updateDiagnosisAndTreatment(req.params.id, req.body);
          case 3:
            _yield$diagnosisandtr2 = _context2.sent;
            status = _yield$diagnosisandtr2.status;
            message = _yield$diagnosisandtr2.message;
            data = _yield$diagnosisandtr2.data;
            _patientServices["default"].saveUpdateDoctor(req.params.id, req.body.idDoctor)["finally"](function () {
              res.status(status).json({
                message: message,
                data: data
              });
            });
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            res.status(400).json({
              message: 'server error'
            });
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function updateDiagnosisAndTreatment(_x3, _x4) {
      return _updateDiagnosisAndTreatment.apply(this, arguments);
    }
    return updateDiagnosisAndTreatment;
  }()
};
var _default = diagnosisAndTreatmentControllers;
exports["default"] = _default;