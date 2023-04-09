"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _winston = _interopRequireDefault(require("../../config/winston"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var db = require("../../models");
var _require = require("./tokenController"),
  tokenController = _require["default"];
var publicKeyRefreshToken = _fs["default"].readFileSync(_path["default"].join(__dirname, 'publicRefreshToken.pem'));
var refreshTokenController = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var refreshToken, refreshTokenExist;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          refreshToken = req.body.refreshToken;
          if (refreshToken) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(401).json("You're not authenticated"));
        case 4:
          _context2.next = 6;
          return db.RefreshToken.findOne({
            where: {
              token: refreshToken,
              isActive: true
            },
            raw: true
          });
        case 6:
          refreshTokenExist = _context2.sent;
          if (!(refreshTokenExist === null)) {
            _context2.next = 10;
            break;
          }
          _winston["default"].token.error(refreshTokenExist);
          return _context2.abrupt("return", res.status(403).json('Refresh token is not valid'));
        case 10:
          _jsonwebtoken["default"].verify(refreshToken, publicKeyRefreshToken, /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, doctor) {
              var newAccessToken, newRefreshToken;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    if (!err) {
                      _context.next = 7;
                      break;
                    }
                    _context.next = 4;
                    return db.RefreshToken.destroy({
                      where: {
                        token: refreshToken
                      }
                    });
                  case 4:
                    return _context.abrupt("return", res.status(403).json('Refresh token is not valid'));
                  case 7:
                    // create new access token và refresh token
                    newAccessToken = tokenController.generateAccessToken(doctor);
                    newRefreshToken = tokenController.generateRefreshToken(doctor);
                    _context.next = 11;
                    return db.RefreshToken.update({
                      token: newRefreshToken,
                      timeRefresh: refreshTokenExist.timeRefresh + 1
                    }, {
                      where: {
                        idDoctor: doctor.id,
                        token: refreshToken,
                        isActive: true
                      }
                    });
                  case 11:
                    res.status(200).json({
                      newAccessToken: newAccessToken,
                      newRefreshToken: newRefreshToken,
                      message: 'refresh token successfully'
                    });
                  case 12:
                    _context.next = 18;
                    break;
                  case 14:
                    _context.prev = 14;
                    _context.t0 = _context["catch"](0);
                    _winston["default"].token.error(_context.t0);
                    res.status(500).json({
                      message: 'server error'
                    });
                  case 18:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 14]]);
            }));
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }());
          _context2.next = 17;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          _winston["default"].token.error(_context2.t0);
          res.status(500).json({
            message: 'server error'
          });
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function refreshTokenController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = refreshTokenController;
exports["default"] = _default;