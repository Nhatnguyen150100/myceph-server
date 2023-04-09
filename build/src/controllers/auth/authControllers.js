"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = _interopRequireDefault(require("../../config/winston"));
var _models = _interopRequireDefault(require("../../models"));
var _useragent = _interopRequireDefault(require("useragent"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var _nodeRsa = _interopRequireDefault(require("node-rsa"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _require = require("../../services/authServices"),
  authServices = _require["default"];
var _require2 = require("../token/tokenController"),
  tokenController = _require2["default"];
var parentDir = _path["default"].join(__dirname, '..');
var publicKey = _fs["default"].readFileSync(_path["default"].join(parentDir, './token/rsaPublicToken.pem'));
var keyPublicToken = new _nodeRsa["default"](publicKey);
var authControllers = {
  login: function () {
    var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var data, message, accessToken, refreshToken, userAgentString, user, encryptedAccessToken, encryptedRefreshToken;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            data = req.data;
            message = req.message;
            _context.next = 5;
            return _models["default"].RefreshToken.update({
              isActive: false
            }, {
              where: {
                idDoctor: data.id
              }
            });
          case 5:
            accessToken = tokenController.generateAccessToken(data);
            refreshToken = tokenController.generateRefreshToken(data);
            userAgentString = req.headers['user-agent'];
            user = _useragent["default"].parse(userAgentString);
            _context.next = 11;
            return _models["default"].RefreshToken.create({
              token: refreshToken,
              idDoctor: data.id,
              nameDevice: user.toString(),
              ipOfDevice: req.ip,
              isActive: true
            });
          case 11:
            // mã hóa token bằng ASE 256 - chưa xong do không thể lưu dữ liệu quá dài vào cookie
            encryptedAccessToken = keyPublicToken.encrypt(accessToken, 'base64');
            encryptedRefreshToken = keyPublicToken.encrypt(refreshToken, 'base64');
            res.status(200).json({
              message: message,
              data: _objectSpread(_objectSpread({}, data), {}, {
                accessToken: accessToken,
                refreshToken: refreshToken
              })
            });
            _context.next = 20;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            _winston["default"].doctor.error(_context.t0);
            res.status(500).json({
              message: 'server error'
            });
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 16]]);
    }));
    function login(_x, _x2) {
      return _login.apply(this, arguments);
    }
    return login;
  }(),
  logout: function () {
    var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _yield$authServices$l, status, message;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return authServices.logout(req.body.idDoctor, req.body.refreshToken);
          case 3:
            _yield$authServices$l = _context2.sent;
            status = _yield$authServices$l.status;
            message = _yield$authServices$l.message;
            res.status(status).json({
              message: message
            });
            _context2.next = 12;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            res.status(400).json({
              message: 'server error'
            });
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    function logout(_x3, _x4) {
      return _logout.apply(this, arguments);
    }
    return logout;
  }()
};
var _default = authControllers;
exports["default"] = _default;