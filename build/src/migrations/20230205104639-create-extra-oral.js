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
            return queryInterface.createTable('ExtraOrals', {
              id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
              },
              idExtraoral: {
                unique: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                references: {
                  model: {
                    tableName: 'Patients',
                    name: 'idExtraoral'
                  },
                  key: 'id'
                }
              },
              faceAsymetry: {
                type: Sequelize.STRING
              },
              chin: {
                type: Sequelize.STRING
              },
              lipCompetence: {
                type: Sequelize.STRING
              },
              lipPostureApart: {
                type: Sequelize.INTEGER
              },
              normalNaresExposure: {
                type: Sequelize.STRING
              },
              alarBaseWidth: {
                type: Sequelize.STRING
              },
              lipWidth: {
                type: Sequelize.STRING
              },
              verticalDimensions: {
                type: Sequelize.STRING
              },
              overallProfile: {
                type: Sequelize.STRING
              },
              lowerThirdProfile: {
                type: Sequelize.STRING
              },
              nasolabialAngle: {
                type: Sequelize.STRING
              },
              softTissuePogonion: {
                type: Sequelize.STRING
              },
              mandibularPlaneAngle: {
                type: Sequelize.STRING
              },
              obliqueAnalysis: {
                type: Sequelize.STRING
              },
              teethDisplay: {
                type: Sequelize.STRING
              },
              gingivalDisplayLevel: {
                type: Sequelize.STRING
              },
              incisalDisplayMaxillary: {
                type: Sequelize.STRING
              },
              incisalDisplayMandibular: {
                type: Sequelize.STRING
              },
              smileArc: {
                type: Sequelize.STRING
              },
              restPositionIncisalDisplay: {
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
            return queryInterface.dropTable('ExtraOrals');
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};