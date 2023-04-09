"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authControllers = _interopRequireDefault(require("../controllers/auth/authControllers"));
var _passportJS = _interopRequireDefault(require("../controllers/token/passportJS"));
var _refreshTokenController = _interopRequireDefault(require("../controllers/token/refreshTokenController"));
var _middlewareController = _interopRequireDefault(require("../middleware/middlewareController"));
var _recaptchaMiddleware = _interopRequireDefault(require("../middleware/recaptchaMiddleware"));
var router = _express["default"].Router();
router.post('/login', _recaptchaMiddleware["default"].verifyRecaptcha, _passportJS["default"].authenticate, _authControllers["default"].login);
router.post('/refreshToken', _refreshTokenController["default"]);
router.post('/logout', _middlewareController["default"].verifyToken, _authControllers["default"].logout);
var _default = router;
exports["default"] = _default;