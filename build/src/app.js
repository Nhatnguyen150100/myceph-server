"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _httpErrors = _interopRequireDefault(require("http-errors"));
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _winston = _interopRequireDefault(require("./config/winston"));
var _morgan = _interopRequireDefault(require("morgan"));
var _helmet = _interopRequireDefault(require("helmet"));
var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));
var _connectDB = _interopRequireDefault(require("./config/connectDB"));
var _clinicRoutes = _interopRequireDefault(require("./routes/clinicRoutes"));
var _doctorRoutes = _interopRequireDefault(require("./routes/doctorRoutes"));
var _authRouters = _interopRequireDefault(require("./routes/authRouters"));
var _patientRouters = _interopRequireDefault(require("./routes/patientRouters"));
var _historyRouters = _interopRequireDefault(require("./routes/historyRouters"));
var _extraoralRouters = _interopRequireDefault(require("./routes/extraoralRouters"));
var _intraoralRouters = _interopRequireDefault(require("./routes/intraoralRouters"));
var _radiographyRouters = _interopRequireDefault(require("./routes/radiographyRouters"));
var _diagnosisAndTreatmentRouters = _interopRequireDefault(require("./routes/diagnosisAndTreatmentRouters"));
var _listOfIssueRouters = _interopRequireDefault(require("./routes/listOfIssueRouters"));
var _treatmentPlanRouters = _interopRequireDefault(require("./routes/treatmentPlanRouters"));
var _treatmentHistoryRouters = _interopRequireDefault(require("./routes/treatmentHistoryRouters"));
var _sharePatientRouters = _interopRequireDefault(require("./routes/sharePatientRouters"));
var _libraryImagePatientRouters = _interopRequireDefault(require("./routes/libraryImagePatientRouters"));
var _roomOfClinicRouters = _interopRequireDefault(require("./routes/roomOfClinicRouters"));
var _servicesOfClinicRouters = _interopRequireDefault(require("./routes/servicesOfClinicRouters"));
var _statusOfClinicRouters = _interopRequireDefault(require("./routes/statusOfClinicRouters"));
var _scheduleRouters = _interopRequireDefault(require("./routes/scheduleRouters"));
_dotenv["default"].config();
var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: process.env.BASE_URL_CLIENT
}));
app.use((0, _cookieParser["default"])());
app.use((0, _helmet["default"])());
var limiter = (0, _expressRateLimit["default"])({
  windowMs: 5 * 60 * 1000,
  // 5 minutes
  max: 500,
  // limit each IP to 500 requests per windowMs
  legacyHeaders: true,
  message: "Too many requests from this IP, please try again in 5 minutes"
});
app.use(limiter);

// view engine setup
app.set('views', _path["default"].join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use((0, _morgan["default"])('dev', {
  stream: _winston["default"].app.stream.write
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
// parse application/x-www-form-urlencoded
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
// parse application/json
app.use(_bodyParser["default"].json());
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));

// router setup
app.use('/v1/clinic', _clinicRoutes["default"]);
app.use('/v1/doctor', _doctorRoutes["default"]);
app.use('/v1/auth', _authRouters["default"]);
app.use('/v1/patient', _patientRouters["default"]);
app.use('/v1/history', _historyRouters["default"]);
app.use('/v1/extraoral', _extraoralRouters["default"]);
app.use('/v1/intraoral', _intraoralRouters["default"]);
app.use('/v1/radiography', _radiographyRouters["default"]);
app.use('/v1/diagnosis', _diagnosisAndTreatmentRouters["default"]);
app.use('/v1/listOfIssue', _listOfIssueRouters["default"]);
app.use('/v1/treatmentPlan', _treatmentPlanRouters["default"]);
app.use('/v1/treatmentHistory', _treatmentHistoryRouters["default"]);
app.use('/v1/sharePatient', _sharePatientRouters["default"]);
app.use('/v1/libraryImagePatient', _libraryImagePatientRouters["default"]);
app.use('/v1/roomOfClinic', _roomOfClinicRouters["default"]);
app.use('/v1/servicesOfClinic', _servicesOfClinicRouters["default"]);
app.use('/v1/statusOfClinic', _statusOfClinicRouters["default"]);
app.use('/v1/schedule', _scheduleRouters["default"]);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if (err instanceof _expressRateLimit["default"]) {
    res.status(429).send(err.message);
  }
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
(0, _connectDB["default"])();
app.listen(process.env.PORT || 3000, function () {
  _winston["default"].app.info('server listening on port: ' + process.env.PORT || 3000);
});
module.exports = app;