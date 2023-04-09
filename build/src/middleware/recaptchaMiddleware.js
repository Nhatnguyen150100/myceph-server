"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _require = require("axios"),
  axios = _require["default"];
var recaptchaMiddleware = {
  verifyRecaptcha: function () {
    var _verifyRecaptcha = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var recaptchaToken, secretKey;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            try {
              // với development thì không kiểm tra reCAPTCHA
              if (process.env.NODE_ENV === 'development') {
                next();
              } else {
                recaptchaToken = req.body.tokenRecaptcha;
                secretKey = process.env.SECRET_KEY_RECAPTCHA;
                axios({
                  method: 'POST',
                  url: "https://www.google.com/recaptcha/api/siteverify?secret=".concat(secretKey, "&response=").concat(recaptchaToken),
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
                  }
                }).then(function (captchaResponse) {
                  if (captchaResponse.data.success) {
                    next();
                  } else res.status(500).send("Error captcha: ".concat(captchaResponse.data['error-codes'][0]));
                })["catch"](function (error) {
                  if (error.response) {
                    res.status(500).send("response is received but error");
                  } else if (error.request) {
                    res.status(500).send("no response received from ReCaptcha server");
                  } else {
                    res.status(500).send("Error checking ReCaptcha");
                  }
                });
              }
            } catch (error) {
              res.status(400).json({
                message: error
              });
            }
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function verifyRecaptcha(_x, _x2, _x3) {
      return _verifyRecaptcha.apply(this, arguments);
    }
    return verifyRecaptcha;
  }()
};
var _default = recaptchaMiddleware;
exports["default"] = _default;