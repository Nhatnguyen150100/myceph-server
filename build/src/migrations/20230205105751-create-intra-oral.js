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
            return queryInterface.createTable('IntraOrals', {
              id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
              },
              idIntraoral: {
                unique: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                references: {
                  model: {
                    tableName: 'Patients',
                    name: 'idIntraoral'
                  },
                  key: 'id'
                }
              },
              oralHygiene: {
                type: Sequelize.STRING
              },
              dentition: {
                type: Sequelize.STRING
              },
              caries: {
                type: Sequelize.STRING
              },
              missing: {
                type: Sequelize.STRING
              },
              wearingTeeth: {
                type: Sequelize.STRING
              },
              detalAldevelopment: {
                type: Sequelize.STRING
              },
              otherProblems: {
                type: Sequelize.STRING
              },
              archForm: {
                type: Sequelize.STRING
              },
              rightCanine: {
                type: Sequelize.STRING
              },
              rightMolar: {
                type: Sequelize.STRING
              },
              leftCanine: {
                type: Sequelize.STRING
              },
              leftMolar: {
                type: Sequelize.STRING
              },
              overjet: {
                type: Sequelize.INTEGER
              },
              overbite: {
                type: Sequelize.INTEGER
              },
              curveOfSpee: {
                type: Sequelize.INTEGER
              },
              cant: {
                type: Sequelize.STRING
              },
              posteriorRight: {
                type: Sequelize.STRING
              },
              posteriorLeft: {
                type: Sequelize.STRING
              },
              upperMidline: {
                type: Sequelize.STRING
              },
              lowerMidline: {
                type: Sequelize.STRING
              },
              deviate: {
                type: Sequelize.STRING
              },
              crCoDiscrepancy: {
                type: Sequelize.STRING
              },
              maximumMouthOpening: {
                type: Sequelize.INTEGER
              },
              guidanceOnProtrusion: {
                type: Sequelize.STRING
              },
              guidanceOnRight: {
                type: Sequelize.STRING
              },
              guidanceOnLeft: {
                type: Sequelize.STRING
              },
              musculature: {
                type: Sequelize.STRING
              },
              swallowingPattern: {
                type: Sequelize.STRING
              },
              historyOfTMD: {
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
            return queryInterface.dropTable('IntraOrals');
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};