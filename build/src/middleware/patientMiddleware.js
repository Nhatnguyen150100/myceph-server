"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var db = require("../models");
var patientMiddleware = {
  checkPatientExists: function () {
    var _checkPatientExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var idPatient, patient, diagnose, selectedPlan, updateBydoctor;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            idPatient = req.params.id;
            _context.next = 4;
            return db.Patient.findOne({
              where: {
                id: idPatient
              }
            });
          case 4:
            patient = _context.sent;
            if (!patient) {
              _context.next = 23;
              break;
            }
            _context.next = 8;
            return db.DiagnosisAndTreatment.findOne({
              attributes: ['diagnose'],
              where: {
                idDiagnosisAndTreatment: idPatient
              }
            });
          case 8:
            diagnose = _context.sent;
            _winston["default"].app.info(diagnose);
            _context.next = 12;
            return db.TreatmentPlan.findOne({
              attributes: ['plan'],
              where: {
                idTreatmentPlan: idPatient,
                selected: true
              }
            });
          case 12:
            selectedPlan = _context.sent;
            _context.next = 15;
            return db.Doctor.findOne({
              attributes: [['fullName', 'fullNameDoctor'], 'email'],
              where: {
                id: req.query.updateBydoctor
              }
            });
          case 15:
            updateBydoctor = _context.sent;
            req.updateBydoctor = updateBydoctor;
            req.diagnose = diagnose;
            req.selectedPlan = selectedPlan;
            req.patient = patient;
            next();
            _context.next = 24;
            break;
          case 23:
            return _context.abrupt("return", res.status(404).json({
              message: 'Patient not found'
            }));
          case 24:
            _context.next = 30;
            break;
          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](0);
            _winston["default"].patient.error(_context.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 30:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 26]]);
    }));
    function checkPatientExists(_x, _x2, _x3) {
      return _checkPatientExists.apply(this, arguments);
    }
    return checkPatientExists;
  }(),
  checkPatientExistsFromQuery: function () {
    var _checkPatientExistsFromQuery = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      var idPatient, patient;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            idPatient = req.query.idPatient;
            _context2.next = 4;
            return db.Patient.findOne({
              where: {
                id: idPatient
              }
            });
          case 4:
            patient = _context2.sent;
            if (!patient) {
              _context2.next = 10;
              break;
            }
            req.patient = patient;
            next();
            _context2.next = 11;
            break;
          case 10:
            return _context2.abrupt("return", res.status(404).json({
              message: 'Patient not found'
            }));
          case 11:
            _context2.next = 17;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            _winston["default"].patient.error(_context2.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }));
    function checkPatientExistsFromQuery(_x4, _x5, _x6) {
      return _checkPatientExistsFromQuery.apply(this, arguments);
    }
    return checkPatientExistsFromQuery;
  }(),
  checkPatient: function () {
    var _checkPatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
      var idPatient, patient;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            idPatient = req.params.id;
            _context3.next = 4;
            return db.Patient.findOne({
              where: {
                id: idPatient
              }
            });
          case 4:
            patient = _context3.sent;
            if (!patient) {
              _context3.next = 10;
              break;
            }
            req.patient = patient;
            next();
            _context3.next = 11;
            break;
          case 10:
            return _context3.abrupt("return", res.status(404).json({
              message: 'Patient not found'
            }));
          case 11:
            _context3.next = 17;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            _winston["default"].patient.error(_context3.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    function checkPatient(_x7, _x8, _x9) {
      return _checkPatient.apply(this, arguments);
    }
    return checkPatient;
  }()
};
var _default = patientMiddleware;
exports["default"] = _default;