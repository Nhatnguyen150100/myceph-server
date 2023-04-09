"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var parentDir = _path["default"].join(__dirname, '..');
var publicKey = _fs["default"].readFileSync(_path["default"].join(parentDir, './controllers/token/public.pem'));
var middlewareController = {
  verifyToken: function verifyToken(req, res, next) {
    var token = req.headers.token;
    if (token !== undefined) {
      var accessToken = token.split(' ')[1];
      _jsonwebtoken["default"].verify(accessToken, publicKey, function (err, doctor) {
        if (err) {
          return res.status(403).json({
            refreshToken: true,
            message: 'Token is error. Reload window...'
          });
        }
        req.doctor = doctor;
        next();
      });
    } else {
      return res.status(401).json({
        status: "You're not authenticated"
      });
    }
  }
};
var _default = middlewareController;
exports["default"] = _default;