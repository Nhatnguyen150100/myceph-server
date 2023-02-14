'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ListOfIssues', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      idListOfIssue: {
        type: Sequelize.UUID,
        references:{
          model: {
            tableName: 'patients',
            name: 'idListOfIssue',
          },
          key: 'id',
        }
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