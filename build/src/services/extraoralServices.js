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
var extraoralServices = {
  getExtraoral: function getExtraoral(idPatient) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var extraoral;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return db.ExtraOral.findOne({
                where: {
                  idExtraOral: idPatient
                }
              });
            case 3:
              extraoral = _context.sent;
              delete extraoral.idExtraOral;
              if (extraoral) {
                resolve({
                  status: 200,
                  message: 'get extra-oral successfully',
                  data: extraoral
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get extra-oral failed',
                  data: null
                });
              }
              _context.next = 12;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              _winston["default"].extraoral.error(_context.t0);
              reject(_context.t0);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  updateExtraoral: function updateExtraoral(idPatient, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var dataUpdate, extraoralUpdate, newExtraOral;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dataUpdate = {
                faceAsymetry: data.faceAsymetry,
                chin: data.chin,
                lipCompetence: data.lipCompetence,
                lipPostureApart: data.lipPostureApart,
                normalNaresExposure: data.normalNaresExposure,
                alarBaseWidth: data.alarBaseWidth,
                lipWidth: data.lipWidth,
                verticalDimensions: data.verticalDimensions,
                overallProfile: data.overallProfile,
                lowerThirdProfile: data.lowerThirdProfile,
                nasolabialAngle: data.nasolabialAngle,
                softTissuePogonion: data.softTissuePogonion,
                mandibularPlaneAngle: data.mandibularPlaneAngle,
                obliqueAnalysis: data.obliqueAnalysis,
                teethDisplay: data.teethDisplay,
                gingivalDisplayLevel: data.gingivalDisplayLevel,
                incisalDisplayMaxillary: data.incisalDisplayMaxillary,
                incisalDisplayMandibular: data.incisalDisplayMandibular,
                smileArc: data.smileArc,
                restPositionIncisalDisplay: data.restPositionIncisalDisplay
              };
              _context2.next = 4;
              return db.ExtraOral.update(dataUpdate, {
                where: {
                  idExtraOral: idPatient
                }
              });
            case 4:
              extraoralUpdate = _context2.sent;
              if (!extraoralUpdate) {
                _context2.next = 12;
                break;
              }
              _context2.next = 8;
              return db.ExtraOral.findOne({
                where: {
                  idExtraOral: idPatient
                }
              });
            case 8:
              newExtraOral = _context2.sent;
              resolve({
                status: 200,
                message: 'update extra-oral successfully',
                data: newExtraOral
              });
              _context2.next = 13;
              break;
            case 12:
              resolve({
                status: 202,
                message: 'update extra-oral failed',
                data: null
              });
            case 13:
              _context2.next = 19;
              break;
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              _winston["default"].extraoral.error(_context2.t0);
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
var _default = extraoralServices;
exports["default"] = _default;