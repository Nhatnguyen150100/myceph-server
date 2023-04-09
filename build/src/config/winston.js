"use strict";
'use-strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _chalk = _interopRequireDefault(require("chalk"));
var _winston = require("winston");
var _winstonDailyRotateFile = _interopRequireDefault(require("winston-daily-rotate-file"));
var combine = _winston.format.combine,
  timestamp = _winston.format.timestamp,
  printf = _winston.format.printf,
  colorize = _winston.format.colorize;
var customLevels = {
  levels: {
    error: 0,
    warning: 1,
    info: 2,
    debug: 3
  },
  colors: {
    error: 'red',
    warning: 'yellow',
    info: 'green',
    debug: 'blue'
  }
};
var customFormat = combine(timestamp({
  format: 'YYYY-MM-DD HH:mm:ss'
}), printf(function (_ref) {
  var level = _ref.level,
    message = _ref.message,
    timestamp = _ref.timestamp;
  return "".concat(_chalk["default"][customLevels.colors[level]]("[".concat(timestamp, "] - [").concat(level, "]: "))).concat(message);
}));
var logger = {
  app: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winston.transports.Console({
      level: 'info'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/app/app-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  doctor: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/doctor/doctor-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  clinic: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/clinic/clinic-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  token: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/token/token-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  passport: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/passport/passport-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  patient: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winston.transports.Console({
      level: 'info'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/patient/patient-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  diagnosis: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/diagnosis/diagnosis-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  extraoral: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/extraoral/extraoral-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  intraoral: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/intraoral/intraoral-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  history: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/history/history-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  listOfIssue: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/listOfIssue/listOfIssue-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  radiography: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/radiography/radiography-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  sharePatient: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/sharePatient/sharePatient-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  treatmentHistory: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/treatmentHistory/treatmentHistory-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  treatmentPlan: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/treatmentPlan/treatmentPlan-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  libraryImagePatient: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/libraryImagePatient/libraryImagePatient-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  roomOfClinic: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/roomOfClinic/roomOfClinic-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  servicesOfClinic: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/servicesOfClinic/servicesOfClinic-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  statusOfClinic: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/statusOfClinic/statusOfClinic-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  }),
  schedule: (0, _winston.createLogger)({
    levels: customLevels.levels,
    format: customFormat,
    transports: [new _winston.transports.Console({
      level: 'error'
    }), new _winstonDailyRotateFile["default"]({
      format: combine(_winston.format.json()),
      filename: './src/log/schedule/schedule-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })]
  })
};
var _default = logger;
exports["default"] = _default;