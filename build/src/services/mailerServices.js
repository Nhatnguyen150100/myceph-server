'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _mail = _interopRequireDefault(require("../config/mail.config"));
var mailerServices = {
  sendMail: function sendMail(receivedMail, htmlContent, linkVerify) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
        var transport, options, sendMail;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              transport = _nodemailer["default"].createTransport({
                host: _mail["default"].optionMail.HOST,
                port: _mail["default"].optionMail.PORT,
                secure: false,
                auth: {
                  user: _mail["default"].optionMail.USERNAME,
                  pass: _mail["default"].optionMail.PASSWORD
                }
              });
              options = {
                from: _mail["default"].optionMail.FROM_ADDRESS,
                to: receivedMail,
                subject: _mail["default"].optionMail.SUBJECT,
                html: htmlContent(linkVerify)
              };
              _context.next = 5;
              return transport.sendMail(options);
            case 5:
              sendMail = _context.sent;
              if (sendMail) {
                resolve(sendMail);
              }
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              reject(_context.t0);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }
};
var _default = mailerServices;
exports["default"] = _default;