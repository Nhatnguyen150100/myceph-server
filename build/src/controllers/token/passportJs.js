"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _passport = _interopRequireDefault(require("passport"));
var _passportLocal = _interopRequireDefault(require("passport-local"));
var LocalStrategy = _passportLocal["default"].Strategy;
var _require = require("../../config/winston"),
  logger = _require["default"];
var _require2 = require("../../services/authServices"),
  authServices = _require2["default"];
var passportJS = {
  verifyAccount: function () {
    var _verifyAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, password, done) {
      var _yield$authServices$l, data, message;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return authServices.login(email, password);
          case 3:
            _yield$authServices$l = _context.sent;
            data = _yield$authServices$l.data;
            message = _yield$authServices$l.message;
            logger.passport.info(data);
            return _context.abrupt("return", done(null, data, message));
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            logger.passport.error(_context.t0);
            return _context.abrupt("return", done(_context.t0));
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    function verifyAccount(_x, _x2, _x3) {
      return _verifyAccount.apply(this, arguments);
    }
    return verifyAccount;
  }(),
  authenticate: function authenticate(req, res, next) {
    _passport["default"].authenticate('local', function (error, data, message) {
      if (error) {
        return res.status(500).json({
          message: 'Oops somethings wrong is happen. Please check your account!'
        });
      }
      if (!data) {
        return res.status(401).json({
          message: message
        });
      }
      req.data = data;
      req.message = message;
      next();
    })(req, res, next);
  }
};
_passport["default"].use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, passportJS.verifyAccount));
var _default = passportJS;
exports["default"] = _default;