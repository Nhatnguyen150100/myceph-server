'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../config/winston"));
var _models = _interopRequireDefault(require("../models"));
var servicesOfClinicServices = {
  getServicesClinic: function getServicesClinic(idClinic) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var listServices;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _models["default"].ServicesOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicService: idClinic
                }
              });
            case 3:
              listServices = _context.sent;
              if (listServices.length >= 0) {
                resolve({
                  status: 200,
                  message: 'get services from clinic successfully',
                  data: listServices
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get services from clinic failed',
                  data: []
                });
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              _winston["default"].servicesOfClinic.error(_context.t0);
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
  createServices: function createServices(idClinic, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var createServicesClinic, listServices;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _models["default"].ServicesOfClinic.create({
                idClinicService: idClinic,
                nameService: data.nameService,
                colorService: data.colorService
              });
            case 3:
              createServicesClinic = _context2.sent;
              if (!createServicesClinic) {
                _context2.next = 11;
                break;
              }
              _context2.next = 7;
              return _models["default"].ServicesOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicService: idClinic
                }
              });
            case 7:
              listServices = _context2.sent;
              resolve({
                status: 200,
                message: 'create service successfully',
                data: listServices
              });
              _context2.next = 12;
              break;
            case 11:
              resolve({
                status: 202,
                message: 'create service failed',
                data: []
              });
            case 12:
              _context2.next = 18;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              _winston["default"].servicesOfClinic.error(_context2.t0);
              reject(_context2.t0);
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 14]]);
      }));
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  },
  updateService: function updateService(idClinic, idService, data) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
        var updateServiceClinic, listServices;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _models["default"].ServicesOfClinic.update({
                nameService: data.nameService,
                colorService: data.colorService
              }, {
                where: {
                  id: idService
                }
              });
            case 3:
              updateServiceClinic = _context3.sent;
              if (!updateServiceClinic) {
                _context3.next = 11;
                break;
              }
              _context3.next = 7;
              return _models["default"].ServicesOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicService: idClinic
                }
              });
            case 7:
              listServices = _context3.sent;
              resolve({
                status: 200,
                message: 'update service successfully',
                data: listServices
              });
              _context3.next = 12;
              break;
            case 11:
              resolve({
                status: 202,
                message: 'update service failed',
                data: []
              });
            case 12:
              _context3.next = 18;
              break;
            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              _winston["default"].servicesOfClinic.error(_context3.t0);
              reject(_context3.t0);
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 14]]);
      }));
      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  },
  deleteService: function deleteService(idClinic, idService) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
        var checkAppointmentWithService, deleteServiceClinic, listServices;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _models["default"].Schedule.findOne({
                where: {
                  idService: idService
                }
              });
            case 3:
              checkAppointmentWithService = _context4.sent;
              if (!checkAppointmentWithService) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", resolve({
                status: 202,
                message: "This service cannot be deleted because it is being used to create an appointment"
              }));
            case 6:
              _context4.next = 8;
              return _models["default"].ServicesOfClinic.destroy({
                where: {
                  id: idService
                }
              });
            case 8:
              deleteServiceClinic = _context4.sent;
              if (!deleteServiceClinic) {
                _context4.next = 16;
                break;
              }
              _context4.next = 12;
              return _models["default"].ServicesOfClinic.findAll({
                order: [['createdAt', 'ASC']],
                where: {
                  idClinicService: idClinic
                }
              });
            case 12:
              listServices = _context4.sent;
              resolve({
                status: 200,
                message: 'delete service successfully',
                data: listServices
              });
              _context4.next = 17;
              break;
            case 16:
              resolve({
                status: 202,
                message: 'delete service failed',
                data: []
              });
            case 17:
              _context4.next = 23;
              break;
            case 19:
              _context4.prev = 19;
              _context4.t0 = _context4["catch"](0);
              _winston["default"].servicesOfClinic.error(_context4.t0);
              reject(_context4.t0);
            case 23:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 19]]);
      }));
      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
};
var _default = servicesOfClinicServices;
exports["default"] = _default;