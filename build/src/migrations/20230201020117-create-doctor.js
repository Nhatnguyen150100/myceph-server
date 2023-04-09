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
            return queryInterface.createTable('Doctors', {
              id: {
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                type: Sequelize.UUID
              },
              email: {
                unique: true,
                allowNull: false,
                type: Sequelize.STRING
              },
              password: {
                type: Sequelize.STRING
              },
              fullName: {
                type: Sequelize.STRING
              },
              gender: {
                type: Sequelize.STRING
              },
              birthday: {
                type: Sequelize.DATE
              },
              avatar: {
                type: Sequelize.STRING
              },
              phoneNumber: {
                type: Sequelize.STRING
              },
              speciality: {
                type: Sequelize.STRING
              },
              diploma: {
                type: Sequelize.STRING
              },
              position: {
                type: Sequelize.STRING
              },
              description: {
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
            return queryInterface.dropTable('Doctors');
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};