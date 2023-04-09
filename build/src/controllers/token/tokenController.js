"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var privateKey = _fs["default"].readFileSync(_path["default"].join(__dirname, 'private.pem'));
var privateKeyRefreshToken = _fs["default"].readFileSync(_path["default"].join(__dirname, 'privateRefreshToken.pem'));
var tokenController = {
  generateAccessToken: function generateAccessToken(doctor) {
    return _jsonwebtoken["default"].sign({
      id: doctor.id,
      email: doctor.email
    }, privateKey, {
      expiresIn: "".concat(process.env.NODE_ENV === 'development' ? '1m' : '5m'),
      algorithm: 'RS512'
    });
  },
  generateRefreshToken: function generateRefreshToken(doctor) {
    return _jsonwebtoken["default"].sign({
      id: doctor.id,
      email: doctor.email
    }, privateKeyRefreshToken, {
      expiresIn: '1d',
      algorithm: 'RS512'
    });
  }
};
var _default = tokenController;
exports["default"] = _default;