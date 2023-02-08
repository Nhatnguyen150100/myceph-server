'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ListOfIssues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idListOfIssue: {
        type: Sequelize.INTEGER
      },
      issue: {
        type: Sequelize.STRING
      },
      treatmentObject: {
        type: Sequelize.STRING
      },
      treatmentMethod: {
        type: Sequelize.STRING
      },
      priotized: {
        defaultValue: 0,
        type: Sequelize.BOOLEAN
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ListOfIssues');
  }
};