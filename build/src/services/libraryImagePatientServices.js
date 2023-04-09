'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _utility = _interopRequireDefault(require("../common/utility"));
var _lodash = _interopRequireDefault(require("lodash"));
var _sequelize = require("sequelize");
var _require = require("../config/winston"),
  logger = _require["default"];
var db = require("../models");
var libraryImagePatientServices = {
  getListImage: function getListImage(idPatient, type) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var listImage, listImageGroupByDate;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return db.LibraryImagePatient.findAll({
                order: [['consultationDate', 'DESC']],
                where: {
                  idPatientImage: idPatient,
                  typeImage: (0, _defineProperty2["default"])({}, _sequelize.Op.or, type)
                }
              });
            case 3:
              listImage = _context.sent;
              if (listImage.length >= 0) {
                listImageGroupByDate = _lodash["default"].groupBy(listImage, function (_ref2) {
                  var consultationDate = _ref2.consultationDate;
                  return (0, _utility["default"])(new Date(consultationDate));
                });
                logger.libraryImagePatient.info(listImageGroupByDate);
                resolve({
                  status: 200,
                  message: 'get list image successfully',
                  data: listImageGroupByDate
                });
              } else {
                resolve({
                  status: 202,
                  message: 'get list image failed'
                });
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              logger.libraryImagePatient.error(_context.t0);
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
  upLoadImage: function upLoadImage(idPatient, data, type) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
        var image, listImage, listImageGroupByDate;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return db.LibraryImagePatient.create({
                idPatientImage: idPatient,
                linkImage: data.linkImage,
                typeImage: data.typeImage,
                consultationDate: new Date(data.consultationDate)
              });
            case 3:
              image = _context2.sent;
              if (!image) {
                _context2.next = 13;
                break;
              }
              _context2.next = 7;
              return db.LibraryImagePatient.findAll({
                order: [['consultationDate', 'DESC']],
                where: {
                  idPatientImage: idPatient,
                  typeImage: (0, _defineProperty2["default"])({}, _sequelize.Op.or, type)
                }
              });
            case 7:
              listImage = _context2.sent;
              listImageGroupByDate = _lodash["default"].groupBy(listImage, function (_ref4) {
                var consultationDate = _ref4.consultationDate;
                return (0, _utility["default"])(new Date(consultationDate));
              });
              logger.libraryImagePatient.info(listImageGroupByDate);
              resolve({
                status: 200,
                message: 'upload image successfully',
                data: listImageGroupByDate
              });
              _context2.next = 14;
              break;
            case 13:
              resolve({
                status: 202,
                message: 'upload image failed'
              });
            case 14:
              _context2.next = 20;
              break;
            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              logger.libraryImagePatient.error(_context2.t0);
              reject(_context2.t0);
            case 20:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 16]]);
      }));
      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }());
  },
  updateImage: function updateImage(idPatient, idImage, consultationDate, typeImage, linkImage, type) {
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
        var updateImagePatient, listImage, listImageGroupByDate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return db.LibraryImagePatient.update({
                consultationDate: new Date(consultationDate),
                typeImage: typeImage,
                linkImage: linkImage
              }, {
                where: {
                  id: idImage
                }
              });
            case 3:
              updateImagePatient = _context3.sent;
              if (!updateImagePatient) {
                _context3.next = 11;
                break;
              }
              _context3.next = 7;
              return db.LibraryImagePatient.findAll({
                order: [['consultationDate', 'DESC']],
                where: {
                  idPatientImage: idPatient,
                  typeImage: (0, _defineProperty2["default"])({}, _sequelize.Op.or, type)
                }
              });
            case 7:
              listImage = _context3.sent;
              listImageGroupByDate = _lodash["default"].groupBy(listImage, function (_ref6) {
                var consultationDate = _ref6.consultationDate;
                return (0, _utility["default"])(new Date(consultationDate));
              });
              logger.libraryImagePatient.info(listImageGroupByDate);
              resolve({
                status: 200,
                message: 'upload image successfully',
                data: listImageGroupByDate
              });
            case 11:
              _context3.next = 17;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              logger.libraryImagePatient.error(_context3.t0);
              reject(_context3.t0);
            case 17:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 13]]);
      }));
      return function (_x5, _x6) {
        return _ref5.apply(this, arguments);
      };
    }());
  },
  updateArrayImage: function updateArrayImage(idPatient, newDate, oldDate, type) {
    return new Promise( /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
        var updateArrayImage, listImage, listImageGroupByDate;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return db.LibraryImagePatient.update({
                consultationDate: new Date(newDate)
              }, {
                where: {
                  consultationDate: new Date(oldDate)
                }
              });
            case 3:
              updateArrayImage = _context4.sent;
              if (!updateArrayImage) {
                _context4.next = 11;
                break;
              }
              _context4.next = 7;
              return db.LibraryImagePatient.findAll({
                order: [['consultationDate', 'DESC']],
                where: {
                  idPatientImage: idPatient,
                  typeImage: (0, _defineProperty2["default"])({}, _sequelize.Op.or, type)
                }
              });
            case 7:
              listImage = _context4.sent;
              listImageGroupByDate = _lodash["default"].groupBy(listImage, function (_ref8) {
                var consultationDate = _ref8.consultationDate;
                return (0, _utility["default"])(new Date(consultationDate));
              });
              logger.libraryImagePatient.info(listImageGroupByDate);
              resolve({
                status: 200,
                message: 'upload image successfully',
                data: listImageGroupByDate
              });
            case 11:
              _context4.next = 17;
              break;
            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              logger.libraryImagePatient.error(_context4.t0);
              reject(_context4.t0);
            case 17:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 13]]);
      }));
      return function (_x7, _x8) {
        return _ref7.apply(this, arguments);
      };
    }());
  },
  deleteImage: function deleteImage(idPatient, idImage, type) {
    return new Promise( /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
        var deleteImagePatient, listImage, listImageGroupByDate;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return db.LibraryImagePatient.destroy({
                where: {
                  id: idImage
                },
                force: true
              });
            case 3:
              deleteImagePatient = _context5.sent;
              if (!deleteImagePatient) {
                _context5.next = 11;
                break;
              }
              _context5.next = 7;
              return db.LibraryImagePatient.findAll({
                order: [['consultationDate', 'DESC']],
                where: {
                  idPatientImage: idPatient,
                  typeImage: (0, _defineProperty2["default"])({}, _sequelize.Op.or, type)
                }
              });
            case 7:
              listImage = _context5.sent;
              listImageGroupByDate = _lodash["default"].groupBy(listImage, function (_ref10) {
                var consultationDate = _ref10.consultationDate;
                return (0, _utility["default"])(new Date(consultationDate));
              });
              logger.libraryImagePatient.info(listImageGroupByDate);
              resolve({
                status: 200,
                message: 'delete image successfully',
                data: listImageGroupByDate
              });
            case 11:
              _context5.next = 17;
              break;
            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5["catch"](0);
              logger.libraryImagePatient.error(_context5.t0);
              reject(_context5.t0);
            case 17:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 13]]);
      }));
      return function (_x9, _x10) {
        return _ref9.apply(this, arguments);
      };
    }());
  }
};
var _default = libraryImagePatientServices;
exports["default"] = _default;