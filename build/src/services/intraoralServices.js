'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var db = require("../models");
var intraoralServices = {
  getIntraoral: function getIntraoral(idPatient) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var intraoral;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return db.IntraOral.findOne({
                where: {
                  idIntraOral: idPatient
                }
              });
            case 3:
              intraoral = _context.sent;
              if (intraoral) {
                resolve({
                  status: 200,
                  message: 'get intra-oral successfully',
                  data: intraoral
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get intra-oral failed',
                  data: {}
                });
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              _winston["default"].intraoral.error(_context.t0);
              reject(_context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  updateIntraoral: function updateIntraoral(idPatient, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var dataUpdate, intraoralUpdate, newIntraoral;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dataUpdate = {
                oralHygiene: data.oralHygiene,
                dentition: data.dentition,
                caries: data.caries,
                missing: data.missing,
                wearingTeeth: data.wearingTeeth,
                detalAldevelopment: data.detalAldevelopment,
                otherProblems: data.otherProblems,
                archForm: data.archForm,
                rightCanine: data.rightCanine,
                rightMolar: data.rightMolar,
                leftCanine: data.leftCanine,
                leftMolar: data.leftMolar,
                overjet: data.overjet,
                overbite: data.overbite,
                curveOfSpee: data.curveOfSpee,
                cant: data.cant,
                posteriorRight: data.posteriorRight,
                posteriorLeft: data.posteriorLeft,
                upperMidline: data.upperMidline,
                lowerMidline: data.lowerMidline,
                deviate: data.deviate,
                crCoDiscrepancy: data.crCoDiscrepancy,
                maximumMouthOpening: data.maximumMouthOpening,
                guidanceOnProtrusion: data.guidanceOnProtrusion,
                guidanceOnRight: data.guidanceOnRight,
                guidanceOnLeft: data.guidanceOnLeft,
                musculature: data.musculature,
                swallowingPattern: data.swallowingPattern,
                historyOfTMD: data.historyOfTMD
              };
              _context2.next = 4;
              return db.IntraOral.update(dataUpdate, {
                where: {
                  idIntraoral: idPatient
                }
              });
            case 4:
              intraoralUpdate = _context2.sent;
              if (!intraoralUpdate) {
                _context2.next = 12;
                break;
              }
              _context2.next = 8;
              return db.IntraOral.findOne({
                where: {
                  idIntraOral: idPatient
                }
              });
            case 8:
              newIntraoral = _context2.sent;
              resolve({
                status: 200,
                message: 'update intra-oral successfully',
                data: newIntraoral
              });
              _context2.next = 13;
              break;
            case 12:
              resolve({
                status: 202,
                message: 'update intra-oral failed',
                data: null
              });
            case 13:
              _context2.next = 19;
              break;
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              _winston["default"].intraoral.error(_context2.t0);
              reject(_context2.t0);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 15]]);
      }));
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
};
var _default = intraoralServices;
exports["default"] = _default;