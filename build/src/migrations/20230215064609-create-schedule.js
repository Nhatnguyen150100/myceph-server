'use strict';

/** @type {import('sequelize-cli').Migration} */
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return queryInterface.createTable('Schedules', {
              id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
              },
              idPatientSchedule: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                  model: {
                    tableName: 'Patients',
                    name: 'idPatientSchedule'
                  },
                  key: 'id'
                }
              },
              idDoctorSchedule: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                  model: {
                    tableName: 'Doctors',
                    name: 'idDoctorSchedule'
                  },
                  key: 'id'
                }
              },
              idClinicSchedule: {
                allowNull: true,
                type: Sequelize.UUID,
                references: {
                  model: {
                    tableName: 'Clinics',
                    name: 'idClinicSchedule'
                  },
                  key: 'id'
                }
              },
              idStatus: {
                allowNull: true,
                type: Sequelize.UUID,
                references: {
                  model: {
                    tableName: 'StatusOfClinics',
                    name: 'idStatus'
                  },
                  key: 'id'
                }
              },
              idService: {
                allowNull: true,
                type: Sequelize.UUID,
                references: {
                  model: {
                    tableName: 'ServicesOfClinics',
                    name: 'idService'
                  },
                  key: 'id'
                }
              },
              idRoom: {
                allowNull: true,
                type: Sequelize.UUID,
                references: {
                  model: {
                    tableName: 'RoomOfClinics',
                    name: 'idRoom'
                  },
                  key: 'id'
                }
              },
              appointmentDate: {
                type: Sequelize.DATE
              },
              startTime: {
                type: Sequelize.TIME
              },
              endTime: {
                type: Sequelize.TIME
              },
              note: {
                type: Sequelize.STRING
              },
              createdAt: {
                allowNull: false,
                type: Sequelize.DATE
              },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
              }
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return queryInterface.dropTable('Schedules');
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};